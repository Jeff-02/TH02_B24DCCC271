import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { User } from '../types'; 

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch (err) {
        setError('Lỗi khi tải danh sách sinh viên.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  if (loading) return <p>Đang tải danh sách...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="card">
      <h2>Danh sách sinh viên</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
