// src/count-context.js
import React from 'react';
import { enhanceLocalStorage, localStorageType } from '../utils/localStorage';

const SoundStateContext = React.createContext();
const SoundDispatchContext = React.createContext();

const soundType = {
  ON: 'ON',
  OFF: 'OFF',
  TOGGLE: 'TOGGLE',
};

const soundStatus = {
  ON: 'ON',
  OFF: 'OFF',
};

const initialSound = (status) => ({
  status: soundStatus[status] || soundStatus.ON,
});

function soundReducer(state, action) {
  switch (action.type) {
    case soundType.TOGGLE:
      return {
        status:
          state.status === soundStatus.ON ? soundStatus.OFF : soundStatus.ON,
      };
    case soundType.ON:
      return { status: soundStatus.ON };
    case soundType.OFF:
      return { status: soundStatus.OFF };
    default: {
      throw new Error(`Unhandled action type in soundReducer: ${action.type}`);
    }
  }
}

function SoundProvider({ children, sound }) {
  const [state, dispatch] = React.useReducer(soundReducer, initialSound(sound));

  const isSoundOn = state.status === soundStatus.ON;
  const isSoundOff = state.status === soundStatus.OFF;

  return (
    <SoundStateContext.Provider
      value={{
        ...state,
        isSoundOn,
        isSoundOff,
        nextStatus: isSoundOn ? soundStatus.OFF : soundStatus.ON,
      }}
    >
      <SoundDispatchContext.Provider value={dispatch}>
        {children}
      </SoundDispatchContext.Provider>
    </SoundStateContext.Provider>
  );
}

function useSoundState() {
  const context = React.useContext(SoundStateContext);
  if (context === undefined) {
    throw new Error('useSoundState must be used within a SoundProvider');
  }
  return context;
}

function useSoundDispatch() {
  const context = React.useContext(SoundDispatchContext);
  if (context === undefined) {
    throw new Error('usesoundDispatch must be used within a soundProvider');
  }
  return context;
}

function useSoundMethod() {
  const dispatch = React.useContext(SoundDispatchContext);
  const state = React.useContext(SoundStateContext);

  const toggle = React.useCallback(() => dispatch({ type: soundType.TOGGLE }), [dispatch]);
  const toggleComplex = React.useCallback(() => {
    enhanceLocalStorage(localStorageType.SOUND, state.nextStatus);
    toggle();
  }, [toggle, state.status]);

  if (dispatch === undefined) {
    throw new Error('useSoundDispatch must be used within a SoundProvider');
  }
  return { toggleComplex, toggle };
}

export { SoundProvider, useSoundState, useSoundDispatch, useSoundMethod };
