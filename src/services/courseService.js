import axios from "axios";

export default class CourseService{
    constructor(role){
        this.role = role;
    }

    getCourses(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lessons`);
    }
    
    getCourseById(id){
        return axios.get(`http://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`+id);
    }
    addCourse(values){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`,values);
    }

    deleteCourse(id){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`+id);
    }

}