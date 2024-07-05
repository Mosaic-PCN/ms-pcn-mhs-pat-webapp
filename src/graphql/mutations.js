/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEncoutnerModel = /* GraphQL */ `
  mutation CreateEncoutnerModel(
    $input: CreateEncoutnerModelInput!
    $condition: ModelEncoutnerModelConditionInput
  ) {
    createEncoutnerModel(input: $input, condition: $condition) {
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
export const updateEncoutnerModel = /* GraphQL */ `
  mutation UpdateEncoutnerModel(
    $input: UpdateEncoutnerModelInput!
    $condition: ModelEncoutnerModelConditionInput
  ) {
    updateEncoutnerModel(input: $input, condition: $condition) {
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
export const deleteEncoutnerModel = /* GraphQL */ `
  mutation DeleteEncoutnerModel(
    $input: DeleteEncoutnerModelInput!
    $condition: ModelEncoutnerModelConditionInput
  ) {
    deleteEncoutnerModel(input: $input, condition: $condition) {
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
