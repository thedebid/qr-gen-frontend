import axios from "axios";
const BaseURL = "http://localhost:5000/api/v1/";
// const BaseURL = "https://scripthunt-api.herokuapp.com/api/v1/";

const axiosHttp = axios.create({
  baseURL: BaseURL,
  responseType: "json",
});

function getHeaders(isSecured) {
  let options = {
    "Content-Type": "application/json",
  };
  if (isSecured) {
    options["Authorization"] = localStorage.getItem("token");
  }
  return options;
}

function POST(url, data, isSecure = false, params = {}) {
  return axiosHttp.post(url, data, {
    headers: getHeaders(isSecure),
    params,
  });
}

function GET(url, isSecure = true, params = {}) {
  return axiosHttp.get(url, {
    headers: getHeaders(isSecure),
    params,
  });
}

const http = {
  POST,
  GET,
};

export default http;
