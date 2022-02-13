import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TakeCourse(props) {
    const authRoles=[2]
  return (
      <>
    {authRoles.indexOf(props.roleId)>-1 ? <Button onClick={props.click} variant='success'>Take Course</Button>: <></>}
    </>
  )
}
