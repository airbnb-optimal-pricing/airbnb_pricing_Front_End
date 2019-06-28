import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`
    }
  });
};
export default axiosWithAuth;
