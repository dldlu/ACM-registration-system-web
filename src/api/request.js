import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const request = axios.create({
    baseURL: "https://reg.dluacm.cn/api",
    timeout: 5000
});
request.interceptors.request.use((config => {
    nprogress.start();
    return config;
}));

request.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;

}, (error) => {
    return Promise.reject(new Error('faile'));
});




export default request;
