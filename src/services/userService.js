import axios from "axios";

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

    addUser(user){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/admin/user`,user);
    }

    deleteUser(userId){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/admin/user/${userId}`);
    }

    getUserById(id) {
        return axios.get("https://smapi.eu-west-3.elasticbeanstalk.com/admin/user/" + id);
    }
}