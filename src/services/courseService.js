import axios from "axios";

export default class CourseService{
    getCourses(){
        return axios.get("https://fakestoreapi.com/products");
    }

    getCoursess(){
        return axios.get("http://smapi.eu-west-3.elasticbeanstalk.com/student/lessons");
    }

    getCourseById(id){
        return axios.get("https://fakestoreapi.com/products/"+id);
    }
}