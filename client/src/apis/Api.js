import axios from "axios";

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

const BaseApi = axios.create({
    baseURL: "//sirual.site:8000/api"
});

const Api = () => {
    const token = localStorage.getItem("token");

    if (token) {
        BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return BaseApi;
};

export default Api;
