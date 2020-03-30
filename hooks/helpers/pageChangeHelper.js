const pageChangeType = {
  STARTED: 'STARTED',
  STARTED_VISIBLE: 'STARTED_VISIBLE',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};
const pageChangeStatus = {
  REJECTED: 'REJECTED',
  RESOLVED: 'RESOLVED',
  PENDING: 'PENDING',
  PENDING_VISIBLE: 'PENDING_VISIBLE',
  IDLE: 'IDLE'
};

const pageChangeInitialState = {
  status: pageChangeStatus.IDLE,
  error: null
};

const pageChangeReducer = (state, action) => {
  switch (action.type) {
    case pageChangeType.ERROR: {
      return {
        ...state,
        status: pageChangeStatus.REJECTED,
        error: action.error
      };
    }
    case pageChangeType.SUCCESS: {
      return {
        ...state,
        status: pageChangeStatus.RESOLVED
      };
    }
    case pageChangeType.STARTED: {
      return {
        ...state,
        status: pageChangeStatus.PENDING,
        error: null
      };
    }
    case pageChangeType.STARTED_VISIBLE: {
      return {
        ...state,
        status:
          state.status === pageChangeStatus.RESOLVED
            ? state.status
            : pageChangeStatus.PENDING_VISIBLE,
        error: null
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { pageChangeType, pageChangeStatus, pageChangeInitialState, pageChangeReducer };
