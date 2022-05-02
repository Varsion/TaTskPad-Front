import { gql } from '@apollo/client'

export const GET_MEMBERS = gql`
  query ($organizationId: ID!) {
    organization(organizationId: $organizationId) {
      members {
        id
        name
        avatar
      }
    }
  }`;
