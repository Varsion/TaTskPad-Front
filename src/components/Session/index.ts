export const GetToken = () => {
  localStorage.getItem('token')
}

export const ClearToken = () => {
  localStorage.setItem('token', '')
}

export const setProjectId = (projectId: string) => {
  localStorage.setItem('projectId', projectId)
}

export const setOrganizationId = (organizationId: string) => {
  localStorage.setItem('organizationId', organizationId)
}

export const setOrganizationName = (organizationName: string) => {
  localStorage.setItem('organizationName', organizationName)
}

export const setProjectCodeUrl = (codeUrl: string) => {
  localStorage.setItem('codeUrl', codeUrl)
}
