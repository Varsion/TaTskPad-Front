import React from 'react';
interface context {
  store: any,
  dispatch: any,
}
const Context = React.createContext<context>({
  store: '',
  dispatch: '',
})
export default Context;