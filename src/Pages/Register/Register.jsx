import React, { useState } from 'react';
import Button from '../../components/button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import { Box, Wrapper } from './Register.style';
import { FiUserPlus } from 'react-icons/fi';
import colors from '../../assets/color/colors';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '../../api/authApi';

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
      <Box
        onSubmit={handleSubmit}
        wd="350px"
        hg="450px"
        justifyContent="space-evenly"
      >
        <Heading color={colors.blue}>
          <FiUserPlus /> Ro'yhatdan o'tish
        </Heading>
        <FlexBox wd="100%" gap="30px">
          <input
            type="text"
            placeholder="Foydalanuvchi ismi"
            name="username"
            value={details.username}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Telefon raqam"
            name="phoneNumber"
            value={details.phoneNumber}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Parol"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Parolni qaytaring"
            name="confirmPassword"
            value={details.confirmPassword}
            onChange={handleChange}
          />
        </FlexBox>
        <Button type="submit" wd="80%">
          Akkount yaratish
        </Button>
        <Heading style={{ fontSize: '12px' }}>
          Akkountgiz allaqachon mavjudmi? <Link to="/login">Kirish</Link>
        </Heading>
      </Box>
    </Wrapper>
  );
};

export default Register;
