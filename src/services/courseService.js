import axios from "axios";

export default class CourseService{
    getCourses(){
        return axios.get("https://fakestoreapi.com/products");
    }

    getCourseById(id){
        return axios.get("https://fakestoreapi.com/products/"+id);
    }
}