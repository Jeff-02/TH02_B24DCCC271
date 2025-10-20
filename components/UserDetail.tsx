
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { User } from '../types'; // Import type

const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Lấy `id` từ URL bằng hook useParams
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get<User>(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          setUser(response.data);
        } catch (err) {
          setError('Không thể tải thông tin chi tiết.');
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }
  }, [id]); // useEffect sẽ chạy lại nếu `id` thay đổi

  if (loading) return <p>Đang tải chi tiết...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!user) return <p>Không tìm thấy sinh viên.</p>;

  return (
    <div className="card">
      <h2>Chi tiết sinh viên</h2>
      <p><strong>Họ tên:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Điện thoại:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Công ty:</strong> {user.company.name}</p>
      <br />
      <Link to="/users">Quay lại danh sách</Link>
    </div>
  );
};

export default UserDetail;