import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { Box, Wrapper } from './Login.style';
import Button from '../../components/button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import colors from '../../assets/color/colors';
import { login } from '../../store/user/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(details));
    navigate('/');
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
          <FaUserAlt /> Saytga kirish
        </Heading>
        <FlexBox wd="100%" gap="30px">
          <input
            type="tel"
            placeholder="Phone number"
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
        </FlexBox>
        <Button
          wd="80%"
          style={{
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Kirish <AiOutlineArrowRight />
        </Button>
        <Heading style={{ fontSize: '12px' }}>
          Ro'yhatdan o'tmaganmisiz?
          <Link to="/register">Ro'yhatdan o'tish</Link>
        </Heading>
      </Box>
    </Wrapper>
  );
};

export default Login;
