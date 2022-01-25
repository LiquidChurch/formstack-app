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
    formstackSync(formstackID: String!): StatusDetail
    fieldsByFormstackID(formstackID: String!): [FieldDetail]
    seriesByUri(uri: String!): SeriesDetail
    formByUri(uri: String!): FormDetail
    seriesList: [SeriesDetail]
  }

  type Mutation {
    entrySave(input: EntryInput!): EntryDetail
    seriesSave(input: SeriesInput!): SeriesDetail
    formSave(input: FormInput!): FormDetail
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

  type SeriesDetail {
    id: String!
    name: String!
    uri: String!
    imageUrl: String!
    year: Int!
    forms: [FormDetail]
  }

  type FormDetail {
    id: String!
    type: String!
    formstackId: String!
    name: String!
    uri: String!
    imageUrl: String!
    seriesUri: String!
    part: Int!
    fields: [FieldDetail]
  }

  type FieldDetail {
    fieldId: String!
    label: String!
    description: String!
    name: String!
    type: String!
    sectionText: String!
    sort: Int!
    required: String!
    defaultValue: String!
    entry: EntryDetail!
    isLeader: Boolean!
  }

  type EntryDetail {
    fieldId: String!
    entry: String!
  }

  input SeriesInput {
    id: String!
    imageUrl: String!
    name: String!
    uri: String!
    year: Int!
  }

  input FormInput {
    id: String!
    type: String!
    formstackId: String!
    name: String!
    uri: String!
    imageUrl: String!
    seriesId: String!
    part: Int!
  }

  input EntryInput {
    fieldId: String!
    entry: String!
  }
`