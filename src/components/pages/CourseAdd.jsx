import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'react-bootstrap';
import { FormField } from 'semantic-ui-react';
import * as Yup from "yup";
import CourseService from '../../services/courseService';
import TextInput from '../../utilities/formControl';

export default function CourseAdd() {
    const initialValues = {
        name: '',
        subject: '',
        teacherId: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        subject: Yup.string().required('Required'),
        teacherId: Yup.string().required('Required')
    })

    function handleSubmit(values){
        let courseService = new CourseService();
        courseService.addCourse(values)
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
            <label>Teacher ID</label>
            <TextInput name="teacherId" placeholder="Teacher ID"></TextInput>
            <Button variant="primary" type="submit">
                Add
            </Button>
        </Form>

    </Formik>;
}
