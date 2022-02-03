import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CourseList from '../CourseList';

export default function Dashboard() {
  return <div>
      <Routes>
    <Route path="courselist" element={<CourseList />} />
  </Routes>
  </div>;
}
