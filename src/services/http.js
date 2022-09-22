"use strict";

const axios = require("axios");

const { API_KEY, CLIENT_ID, CLIENT_SECRET } = process.env;

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "x-api-key": API_KEY,
  },
});

const getAccessToken = async () => {
  const credentials = Buffer.from(CLIENT_ID + CLIENT_SECRET).toString("base64");
  http.defaults.headers.common.Authorization = `Basic ${credentials}`;

  const { data } = await axiosInstance.post("/oauth/token");
  const oauthToken = data.access_token;
  http.defaults.headers.common.Authorization = `Bearer ${oauthToken}`;
};

const get = async (url) => {
  await getAccessToken();
  return http.get(url);
};

const post = async (url) => {
  await getAccessToken();
  return http.get(url);
};

module.exports = {
  get,
  post,
};
