import axios from "axios";

export default class UserService{
    getUsers(){
        return axios.get("https://jsonplaceholder.typicode.com/users");
    }

    async getUserByUsernameAndEmail(email, username){
        let users = [];
        await this.getUsers().then(result => users = result.data);
        const user = users.find((u)=>u.username===username && u.email===email);
        return user;
    }

    getUserById(id){
        return axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    }
}