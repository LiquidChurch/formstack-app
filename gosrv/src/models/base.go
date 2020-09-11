package models

import (
  "os"
)

var dBNamespace = ""

func ModelLoadNamespace() {
  dBNamespace = os.Getenv("APP_DS_NAMESPACE")  
}
