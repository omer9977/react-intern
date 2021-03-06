import axios from "axios";

export default class CourseService{
    constructor(role){
        this.role = role;
    }

    getCourses(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lessons`);
    }
    
    getCourseById(id){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`+id);
    }

    addCourse(values){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`,values);
    }

    deleteCourse(id){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/${this.role}/lesson/`+id);
    }


    //For Student
    getCoursesByUserId(userId){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/student/${userId}/lessons`)
    }

    addCourseByUserIdAndLessonId(userId, lessonId, values){
        return axios.post(`https://smapi.eu-west-3.elasticbeanstalk.com/student/${userId}/lesson/${lessonId}`,values);   
    }

    getCourseByUserIdAndLessonId(userId, lessonId){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/student/${userId}/lesson/${lessonId}`);   
    }

    deleteCourseByUserIdAndLessonId(userId, lessonId){
        return axios.delete(`https://smapi.eu-west-3.elasticbeanstalk.com/student/${userId}/lesson/${lessonId}`);   
    }

    //For Teacher
    getCoursesForTeacher(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lessons`)
    }

    getCoursesForTeacher(){
        return axios.get(`https://smapi.eu-west-3.elasticbeanstalk.com/admin/lessons`);
    }
}