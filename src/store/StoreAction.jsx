export const setIsAdd = (val) => {
  return {
    type: "IS_ADD", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setIsError = (val) => {
  return {
    type: "IS_ERROR", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setIsSuccess = (val) => {
  return {
    type: "IS_SUCCESS", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setIsArchive = (val) => {
  return {
    type: "IS_ARCHIVE", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setIsRestore = (val) => {
  return {
    type: "IS_RESTORE", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setIsDelete = (val) => {
  return {
    type: "IS_DELETE", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};

export const setMessage = (val) => {
  return {
    type: "MESSAGE", // TO BE USED AS KEY TO STOREREDUCER FILE
    payload: val, // SET THE NEW VALUE
  };
};
