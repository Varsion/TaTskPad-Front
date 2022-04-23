export interface SignUpProps {
  account: {
    id: string
    email: string
  }
  errors: [{
    attribute: string
    message: string
  }]
}
