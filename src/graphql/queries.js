/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEncounter = /* GraphQL */ `
  query GetEncounter($id: ID!) {
    getEncounter(id: $id) {
      id
      workDate
      clinicName
      role
      sessionType
      meetingType
      orgTime
      gamePlanTime
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEncounters = /* GraphQL */ `
  query ListEncounters(
    $filter: ModelEncounterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEncounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        workDate
        clinicName
        role
        sessionType
        meetingType
        orgTime
        gamePlanTime
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
