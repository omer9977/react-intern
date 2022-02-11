import axios from "axios";

export default class StudentService {

    constructor(role){
        this.role = role;
    }

    getStudents(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/students`);
    }
    
    getStudentById(id){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/student/`+id);
    }
    addStudent(values){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/student/`,values);
    }

    deleteStudent(id){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/student/`+id);
    }

}