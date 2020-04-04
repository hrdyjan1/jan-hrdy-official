// src/count-context.js
import React from 'react';

const ModalStateContext = React.createContext();
const ModalDispatchContext = React.createContext();

const modalType = {
  SHOW: 'SHOW',
  HIDE: 'HIDE',
};

const modalStatus = {
  SETTINGS: 'SETTINGS',
};

const modalVisibility = {
  VISIBLE: 'VISIBLE',
  HIDDEN: 'HIDDEN',
};

const initialModalState = {
  status: null,
  heading: null,
  visibility: 'HIDDEN',
};

function modalReducer(state, action) {
  switch (action.type) {
    case modalType.SHOW: {
      return {
        status: action.payload?.status || null,
        heading: action.payload?.heading,
        visibility: modalVisibility.VISIBLE,
      };
    }
    case modalType.HIDE: {
      return {
        ...state,
        visibility: modalVisibility.HIDDEN,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ModalProvider({ children }) {
  const [state, dispatch] = React.useReducer(modalReducer, initialModalState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>{children}</ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error('useModalState must be used within a ModalProvider');
  }
  return context;
}

function useModalDispatch() {
  const context = React.useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error('useModalDispatch must be used within a ModalProvider');
  }
  return context;
}

export { ModalProvider, useModalState, useModalDispatch, modalType, modalVisibility, modalStatus };
