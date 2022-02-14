import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AddNewCourse({roleId}) {
    const authRoles=[3,5]
  return (
    <>  
    {authRoles.indexOf(roleId)>-1 ? <Button as={Link} to="/courses/add" >Add New Course</Button>: <></>}
    </>
  )
}
