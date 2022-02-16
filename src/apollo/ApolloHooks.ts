import { useCallback, useEffect } from 'react';
import { ApolloError } from "@apollo/client";
import { toast } from 'react-toastify';

import { redirectToLogin, isUnauthenticated } from "helpers/unauthenticated"

export const HandlerErrors = (errors?: Array<{ message: string }>) => {
  if (errors) {
    const errorsArr = errors.map(({ message }) => message)
    toast.error(errorsArr.join('; '))
  }
}

export function useApolloErrorHandler(
  errors?: Array<ApolloError | undefined> | ApolloError,
  handleNotFoundCallback?: (errors: string[]) => void
): void {
  const handleError = useCallback(
    (e?: ApolloError) => {
      if (e?.graphQLErrors?.length) {
        const errors = e.graphQLErrors.map(({ message }) => message)
        if (isUnauthenticated(errors)) {
          return redirectToLogin()
        }
        if (handleNotFoundCallback) {
          return handleNotFoundCallback(errors)
        }
        toast.error(errors.join('; '))
      }
    },
    [handleNotFoundCallback]
  )

  useEffect(() => {
    if (Array.isArray(errors)) {
      errors.forEach((e?: ApolloError) => handleError(e))
    } else if (errors) {
      handleError(errors)
    }
  }, [errors, handleError])
}
