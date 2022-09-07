import axiosClient from "axios";

function axiosInstance() {
  return axiosClient;
  const token = localStorage.getItem("token");

  let options = {};

  if (token) {
    options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
  } else {
    options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  const instance = axiosClient.create(options);
  return instance;
}

export { axiosInstance };
