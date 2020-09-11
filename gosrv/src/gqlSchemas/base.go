package gqlSchemas

import (
)

type Resolver struct{}

var Schema = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    health(): StatusDetail
    sessionDetail(): SessionDetail
    syncForm(formID: String!): StatusDetail
    getForm(formID: String!): [FieldDetail]
  }

  type Mutation {
    saveField(input: EntryInput!): EntryDetail
  }

  type StatusDetail {
    status: String!
    uID: String!
    cID: String!
  } 

  type SessionDetail {
    # Session JWT token.
    sessionToken: String!
    # Application User ID
    userID: String!
    # User Status
    status: String!
    # Session Expiration timer in sec
    expiration: Int!
  }  

  type FieldDetail {
    fieldId: String!
    label: String!
    description: String!
    name: String!
    type: String!
    sectionText: String!
    sort: String!
    required: String!
    entry: EntryDetail!
  }

  type EntryDetail {
    fieldId: String!
    entry: String!
  }

  input EntryInput {
    fieldId: String!
    entry: String!
  }
`