/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEncoutnerModel = /* GraphQL */ `
  query GetEncoutnerModel($id: ID!) {
    getEncoutnerModel(id: $id) {
      id
      encounter_id
      record_id
      clinic_name
      date
      in_person
      group
      non_visit
      org_time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEncoutnerModels = /* GraphQL */ `
  query ListEncoutnerModels(
    $filter: ModelEncoutnerModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEncoutnerModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        encounter_id
        record_id
        clinic_name
        date
        in_person
        group
        non_visit
        org_time
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
