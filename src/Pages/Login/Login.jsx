import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Form, Wrapper } from './Login.style';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import { login } from '../../store/user/actions';
import { Input } from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import useToggle from '../../hooks/useToggle';
import Register from '../Register/Register';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modal = useToggle();

  const [details, setDetails] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(details));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Heading secondary>
        <FaUserAlt /> Saytga kirish
      </Heading>
      <Input
        type="tel"
        placeholder="Phone number"
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
      <Button>
        Kirish <AiOutlineArrowRight />
      </Button>
      <Heading style={{ fontSize: '12px' }}>
        Akkountingiz yo'qmi?
        <Heading
          secondary
          style={{ fontSize: '12px', cursor: 'pointer' }}
          onClick={modal.open}
        >
          Ro'yhatdan o'tish
        </Heading>
      </Heading>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        <Register />
      </Modal>
    </Form>
  );
};

export default Login;
