import axios from "axios";

axios.create;

const source = axios.CancelToken.source();
const timeoutFunction = (time_service) => {
  const resulttimeout = setTimeout(() => {
    console.log("El tiempo es:", time_service);
    source.cancel({
      status: 408,
      message: `Request canceled after pass ${time_service} ms`,
    });
    console.log("timeout true");
  }, time_service || 3000);
  return resulttimeout;
};

const get = (url = "", headers = {}, time) => {
  const timeout = timeoutFunction(time);
  return axios
    .get(url, {
      cancelToken: source.token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((result) => {
      clearTimeout(timeout);
      return result;
    })
    .catch(function (error) {
      return error.message;
    });
};

const post = (url = "", body = {}, headers = {}, time) => {
  console.log("ver__Post_client");
  console.log(url);
  console.log(body);
  console.log("ver__Post_client");
  const timeout = timeoutFunction(time);
  return axios
    .post(url, body, {
      cancelToken: source.token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((result) => {
      clearTimeout(timeout);
      return result;
    })
    .catch(function (error) {
      console.warn("POST ERROR - httpClient!!", error);
      clearTimeout(timeout);
      return error.message;
    });
};

const put = (url = "", body = {}, headers = {}, time) => {
  const timeout = timeoutFunction(time);
  return axios
    .put(url, body, {
      cancelToken: source.token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((result) => {
      clearTimeout(timeout);
      return result;
    })
    .catch(function (error) {
      return error.message;
    });
};

const del = (url = "", headers = {}, time) => {
  const timeout = timeoutFunction(time);
  return axios
    .delete(url, {
      cancelToken: source.token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((result) => {
      clearTimeout(timeout);
      return result;
    })
    .catch(function (error) {
      return error.message;
    });
};

const httpClient = {
  get,
  post,
  put,
  delete: del,
};

export default httpClient;
