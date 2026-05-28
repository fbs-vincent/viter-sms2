export const StoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_ADD":
      return {
        ...state, // STORE ALL INITVAL
        isAdd: action.payload, // OVERWRITE THE VALUE
      };
    case "IS_ERROR":
      return {
        ...state, // STORE ALL INITVAL
        isError: action.payload, // OVERWRITE THE VALUE
      };
    case "IS_SUCCESS":
      return {
        ...state, // STORE ALL INITVAL
        isSuccess: action.payload, // OVERWRITE THE VALUE
      };
    case "IS_ARCHIVE":
      return {
        ...state, // STORE ALL INITVAL
        isArchive: action.payload, // OVERWRITE THE VALUE
      };
    case "IS_RESTORE":
      return {
        ...state, // STORE ALL INITVAL
        isRestore: action.payload, // OVERWRITE THE VALUE
      };
    case "IS_DELETE":
      return {
        ...state, // STORE ALL INITVAL
        isDelete: action.payload, // OVERWRITE THE VALUE
      };
    case "MESSAGE":
      return {
        ...state, // STORE ALL INITVAL
        message: action.payload, // OVERWRITE THE VALUE
      };
    //   IF ACTION TYPE NOT EXISTS RETURN THE INITVAL
    default:
      return state;
  }
};
