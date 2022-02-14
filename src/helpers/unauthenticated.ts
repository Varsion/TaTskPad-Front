const UNAUTHENTICATED = "unauthenticated";
const showUnauthenticatedTip = () => {
  // show error message
}

export const isUnauthenticated = (errors: string[]) => {
  return errors.includes(UNAUTHENTICATED)
}

export const redirectToLogin = () => {
  showUnauthenticatedTip()
  localStorage.clear()
}
