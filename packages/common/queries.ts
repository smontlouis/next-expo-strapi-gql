import { gql } from 'urql'

export const GET_PROFILE = gql`
  query profile($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          email
          confirmed
        }
      }
    }
  }
`
