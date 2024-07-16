/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEncounter = /* GraphQL */ `
  mutation CreateEncounter(
    $input: CreateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    createEncounter(input: $input, condition: $condition) {
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
export const updateEncounter = /* GraphQL */ `
  mutation UpdateEncounter(
    $input: UpdateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    updateEncounter(input: $input, condition: $condition) {
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
export const deleteEncounter = /* GraphQL */ `
  mutation DeleteEncounter(
    $input: DeleteEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    deleteEncounter(input: $input, condition: $condition) {
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
