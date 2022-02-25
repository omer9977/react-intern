import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export default function AddNewCourseForTeacher(props) {
  //let { id } = useParams()
  useEffect(() => {
    console.log(props)
  }, [])
  
    const authRoles=[3]
  return (
    <>  
    {authRoles.indexOf(props.roleId)>-1 ? <Button as={Link} to="/courses/add" >Add New Course</Button>: <></>}
    </>
  )
}
