import { gql } from '@apollo/client'

export const CREATE_ISSUE = gql`
  mutation CreateOrganization($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      organization {
        id
        name
        email
        logoUrl
        organizationClass
      }
      errors {
        attribute
        message
      }
    }
  }`;
