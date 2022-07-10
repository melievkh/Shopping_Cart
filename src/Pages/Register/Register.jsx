import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import { Form, Wrapper } from './Register.style';
import { FiUserPlus } from 'react-icons/fi';
import colors from '../../assets/color/colors';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import { Input } from '../../components/Input/Input';

const Register = () => {
  const navigate = useNavigate();

  const initialState = {
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authApi
      .register(details)
      .then((res) => {
        alert(res.data.message);
        navigate('/login');
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Heading secondary>
          <FiUserPlus /> Ro'yhatdan o'tish
        </Heading>
        <Input
          type="text"
          placeholder="Foydalanuvchi ismi"
          name="username"
          value={details.username}
          onChange={handleChange}
        />
        <Input
          type="number"
          placeholder="Telefon raqam"
          name="phoneNumber"
          value={details.phoneNumber}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Parol"
          name="password"
          value={details.password}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Parolni qaytaring"
          name="confirmPassword"
          value={details.confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Akkount yaratish</Button>
        <Heading style={{ fontSize: '12px' }}>
          Akkountgiz allaqachon mavjudmi? <Link to="/login">Kirish</Link>
        </Heading>
      </Form>
    </Wrapper>
  );
};

export default Register;
