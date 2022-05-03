import React, { FC, createContext, useReducer } from 'react';


interface PadContext {
  organizationId: string;
  projectId: string;
}

interface Props {}


const defaultGlobalState: PadContext = {
  organizationId: '',
  projectId: ''
}
const globalStateContext = createContext(defaultGlobalState);
const dispatchStateContext = createContext(defaultGlobalState);

const useGlobalState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];

function reducer(state = defaultGlobalState, action: any) {
  switch (action.type) {
    case "project":
      return { ...state, projectId: action.value };
    case "organization":
      return {
        ...state,
        organizationId: action.value,
      };
  }
  return state;
}

const GlobalStateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultGlobalState);
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch.prototype}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export { useGlobalState };
export type { PadContext };
export default GlobalStateProvider;
