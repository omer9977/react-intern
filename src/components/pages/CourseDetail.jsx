import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'
import CourseService from '../../services/courseService';
import { useSelector } from 'react-redux';

export default function CourseDetail() {
  let { id } = useParams()

  const {userValue} = useSelector(state => state.user)

  const [course, setCourse] = useState({});

  useEffect(() => {
    let courseService = new CourseService();
    courseService.getCourseById(id).then(result => setCourse(result.data))
    console.log(userValue)
  }, [])
  return <Card>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk
      of the card's content.
    </Card.Text>
  </Card.Body>
</Card>;
}
