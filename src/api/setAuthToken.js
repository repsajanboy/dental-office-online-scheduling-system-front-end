import api from "./axios.js";

const setAuthToken = (token) => {
    console.log("Hey");
  if (token) {
    console.log("seeting up token");
    console.log(token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
