export const GetToken = () => {
  localStorage.getItem('token')
}

export const ClearToken = () => {
  localStorage.setItem('token', '')
}
