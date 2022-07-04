import React, { useState } from 'react';
import Button from '../../components/button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import { Box, Wrapper } from './Register.style';
import { FiUserPlus } from 'react-icons/fi';
import colors from '../../assets/color/colors';
import { Link } from 'react-router-dom';

const Register = () => {
  const initialState = {
    name: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  };
  const [details, setDetails] = useState(initialState);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder=" Ism"
            name="name"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            placeholder="Telefon raqam"
            name="phone_number"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Parol"
            name="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Parolni qaytaring"
            name="confirm_password"
            onChange={handleChange}
            required
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
