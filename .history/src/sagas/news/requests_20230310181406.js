import axios from "axios";

export default function requestGetNews() {
  return axios.request({
    method: "GET",
  });
}
