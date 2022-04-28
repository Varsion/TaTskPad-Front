import { gql } from '@apollo/client'

export const CREATE_BUCKET = gql`
  mutation CreateBucket($input: CreateBucketInput!) {
    createBucket(input: $input) {
      bucket {
        id
        name
        isRelease
      }
    }
  }`;
