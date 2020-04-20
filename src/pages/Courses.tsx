import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import ICourse from "../types/ICourse";

import api from "../services/api";

export default function Courses() {
  const [courses, setCourses] = useState<Array<ICourse>>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("/courses");

      setCourses(data);
    }

    loadData();
  }, []);

  return (
    <div>
      <ul>
        {courses.map(course => (
          <div key={course.id}>
            <Link to={`/courses/${course.id}/detail`}>{`${course.name} - ${course.duration} months of duration (${course.users.length}) users`}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}