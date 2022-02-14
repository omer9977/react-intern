import axios from "axios";

export function token(token) {
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${token}`;
            return config
        },
        error => {console.log("error")}
    )
}