import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { Form } from './Register.style';
import { FiUserPlus } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';
import { Input } from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import useToggle from '../../hooks/useToggle';
import Login from '../Login/Login';

const Register = () => {
  const navigate = useNavigate();
  const modal = useToggle();

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
        Akkountgiz allaqachon mavjudmi?
        <Heading
          secondary
          style={{ fontSize: '12px', cursor: 'pointer' }}
          onClick={modal.open}
        >
          Kirish
        </Heading>
      </Heading>
      <Modal isOpen={modal.isOpen} onClose={modal.close}><Login/></Modal>
    </Form>
  );
};

export default Register;
