import { gql } from '@apollo/client'

export const GET_ROLES = gql`
  query ($organizationId: ID!) {
    organization(organizationId: $organizationId) {
      roles {
        id
        name
        active
      }
    }
  }`;
