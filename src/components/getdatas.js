import axios from "axios";

class getdatas {
  getdata() {
    var config = {
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?country=tr&apiKey=478a4f0c2bfb4afc95733e797bb2dde8`,
    };
    return axios(config);
  }
}
export default new getdatas();
