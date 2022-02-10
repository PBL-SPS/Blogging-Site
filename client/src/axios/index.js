import axios from "axios";

const AxiosInst = axios.create({
    baseURL: "/api",
});

export default AxiosInst;
