import { useField } from 'formik';
import React from 'react';
import { FormField, Label } from 'semantic-ui-react';
import '../css/Login.css'

export default function TextInput({...props}) {
  
  const [field,meta] = useField(props)

  return (
      <FormField error={meta.touched && !!meta.error}>
          <input {...field} {...props}/>
          {meta.touched && !!meta.error ? (
              <Label pointing basic color='red' content={meta.error}></Label>
          ):(
              <><br/><br/><br/></>
          )}
      </FormField>
  );
}
