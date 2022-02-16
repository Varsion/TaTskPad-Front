import { toast } from "react-toastify";
const UNAUTHENTICATED = "unauthenticated";
const showUnauthenticatedTip = () => {
  toast.error("Your login session has expired");
}

export const isUnauthenticated = (errors: string[]) => {
  return errors.includes(UNAUTHENTICATED)
}

export const redirectToLogin = () => {
  showUnauthenticatedTip()
  localStorage.clear()
}
