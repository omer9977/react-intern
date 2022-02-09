import axios from "axios";

export default class CourseService{
    constructor(role){
        this.role = role;
    }
    
    getCoursess(){
        return axios.get("https://fakestoreapi.com/products");
    }
    getCourses(){
        return axios.get(`http://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lessons`);
    }

    addCourse(values){
        return axios.post(`http://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`,values);
    }

    getCourseById(id){
        return axios.get("https://fakestoreapi.com/products/"+id);
    }
}