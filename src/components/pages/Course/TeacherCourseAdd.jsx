import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import * as Yup from "yup";
import CourseService from '../../../services/courseService';
import TextInput from '../../../utilities/formControl';
import { toast } from 'react-toastify';
import { roles } from '../../../data/roles';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CourseAdd() {
    const { userValue } = useSelector(state => state.user)

    const { teacherId } = useParams()

    const initialValues = {
        name: '',
        subject: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        subject: Yup.string().required('Required')
    })

    useEffect(() => {
      console.log(teacherId)
    }, [])
    

    function handleSubmit(values){
        let courseService = new CourseService(roles[userValue.user.roleId]);
        courseService.addCourse(values).then(response => {toast.success(`${values.name} is added successfully.`)})
        .catch(error => {
          if(error){
            toast.error(`${error}`)
          }
        });
    }

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            handleSubmit(values);
        }}
    >
        <Form className="ui form">
            <label>Name</label>
            <TextInput name="name" placeholder="Name"></TextInput>
            <label>Subject</label>
            <TextInput name="subject" placeholder="Subject"></TextInput>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>
    </Formik>;
}
