import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import urlParser from "../common/urlParser";
import api from "../services/api";

import IUser from "../types/IUser";
import ICourse from "../types/ICourse";

interface Props {
  history: any,
  location: any,
}

const CoursesDetail: React.FC<Props> = ({ history, location }) => {
  const { id } = urlParser(location, '/courses/:id/detail');

  const [course, setCourse] = useState<ICourse>({
    id: '',
    name: '',
    duration: 0,
    date_start: new Date(),
    users: [],
  });
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get(`/courses/${id}`);

      setCourse(data);
      setUsers(data.users);
    }

    loadData();
  }, [id]);

  function handleChangeCourse(name: string, value: any) {
    setCourse({ ...course, [name]: value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    await api.put(`/courses/${id}`, course);
    history.push("/");
  }

  function handleAddUser() {
    setUsers([ ...users, { id: String(Math.round(Math.random() * 1000)), age: 0, email: '', name: '' }]);
  }

  function handleChangeUser(user_id: string, name: string, value: any) {
    setUsers(users.map(user => {
      if (user.id === user_id) {
        user = { ...user, [name]: value};
        return user;
      } else {
        return user;
      }
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={course.name} onChange={e => handleChangeCourse('name', e.target.value)} />
        <input type="number" value={course.duration} onChange={e => handleChangeCourse('duration', e.target.value)} />


        <ul>
          {users.map(user => (
            <div key={user.id}>
              <input type="text" value={user.name} onChange={e => handleChangeUser(user.id, "name", e.target.value)} />
              <input type="email" value={user.email} onChange={e => handleChangeUser(user.id, "email", e.target.value)} />
              <input type="number" value={user.age} onChange={e => handleChangeUser(user.id, "age", e.target.value)} />
            </div>
          ))}
        </ul>

        <button type="button" onClick={() => handleAddUser()}>+ User</button>
        <button type="submit">Save</button>
      </form>

      <Link to="/">
        <b>Back</b>
      </Link>
    </div>
  );
}

export default CoursesDetail;