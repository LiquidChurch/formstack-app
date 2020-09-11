package main

import (
  "os"
  "log"
  "time"
  "net/http"
  "encoding/json"
  //"strings"
  "path/filepath"
  "github.com/gorilla/mux"
  "github.com/joho/godotenv"
  graphql "github.com/graph-gophers/graphql-go"
  "github.com/graph-gophers/graphql-go/relay"
  "X/gosrv/src/gqlSchemas"
  "X/gosrv/src/authorizations"
)

type spaHandler struct {
	staticPath string
	indexPath  string
}

var schema *graphql.Schema

// Loads environmental file
func init() {
var env = os.Getenv("ENVIRONMENT")

  if env == "" {
    env = "cany"
  }
  
  if err := godotenv.Load(env + ".env"); err != nil {
    log.Println(env + ".env file not found!")
  } else {
    log.Println(env + ".env file loaded")
  }
}

// Main Function
func main() {
  log.Println("Started App")
  schema = graphql.MustParseSchema(gqlSchemas.Schema, &gqlSchemas.Resolver{})
  
  ngapp := spaHandler{staticPath: "gosrv/dist/app", indexPath: "index.html"}
  giqlapp := spaHandler{staticPath: "gosrv/dist", indexPath: "index.html"}
  
  r := mux.NewRouter()
  
  r.Path("/_ah/warmup").
    HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]bool{"ok": true})
	})
  
  r.Handle("/query", authorizations.AdminAuthnCheck(&relay.Handler{Schema: schema}))
  r.PathPrefix("/giql").Handler(giqlapp)
  r.PathPrefix("/").Handler(ngapp)
  
	port := os.Getenv("PORT")
  address := os.Getenv("ADDRESS")
  
	srv := &http.Server{
		Handler: r,
    Addr: address + ":" + port,
		WriteTimeout: 30 * time.Second,
		ReadTimeout:  30 * time.Second,
	}
  
	log.Printf("Listening on port %s", port)
	log.Fatal(srv.ListenAndServe())  
}

// Static File Server
func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {  
  log.Println("Serve HTTP URL: ", r.URL.Path)

  path, err := filepath.Abs(r.URL.Path)
  
	if err != nil {
    log.Println("error getting absolute path")
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	path = filepath.Join(h.staticPath, path)
  
  log.Println("file path: ", path)
	_, err = os.Stat(path)
  
	if os.IsNotExist(err) {
    log.Println("file not found, serving default file", h.indexPath)
    http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
    log.Println("error checking for path")
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
  }
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}