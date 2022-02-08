import axios from "axios";
import { useSelector } from "react-redux";

export default class UserService {

    getUsers() {
        return axios.get("https://smapi.eu-west-3.elasticbeanstalk.com/admin/users");
    }

    async getUserByUsernameAndPassword(username, password) {
        let user = {}
        await axios.post("https://smapi.eu-west-3.elasticbeanstalk.com/user/token",
            { username: username, password: password }).then(result => user = result.data)
        return user;
    }

    getUserById(id) {
        return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
    }
}