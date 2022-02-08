import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import TextInput from '../../utilities/formControl';

export default function CourseAdd() {
  const initialValues = {title:"", price:0}
    
  const schema = Yup.object({
      title: Yup.string().required("Ürün adı zorunlu"),
      price: Yup.number().required("Ürün fiyatı zorunlu")
  })
return <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values)=>{
        console.log(values)
    }}
    >
        <Form className="ui form">
            <TextInput name="title" placeholder="Ürün Adı"></TextInput>
            <TextInput name="price" placeholder="Ürün Fiyatı"></TextInput>
            <button color='green' type="submit">Ekle</button>
        </Form>
        
    </Formik>;
}
