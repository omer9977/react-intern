import axios from "axios";

export default class TeacherService {

    constructor(role){
        this.role = role;
    }

    getTeachers(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/teachers`);
    }
    
    getTeacherById(id){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/teacher/`+id);
    }
    
    addTeacher(values){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/teacher/`,values);
    }

    deleteTeacher(id){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/teacher/`+id);
    }
}