import React from 'react';
import Button from '../../components/button/Button';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import { Box, Wrapper } from './Login.style';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import colors from '../../assets/color/colors';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Wrapper>
      <Box wd="350px" hg="450px" justifyContent="space-evenly">
        <Heading color={colors.blue}>
          <FaUserAlt /> Saytga kirish
        </Heading>
        <FlexBox wd="100%" gap="30px">
          <input type="number" placeholder="Phone number" />
          <input type="password" placeholder="Parol" />
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
          {' '}
          Ro'yhatdan o'tmaganmisiz? <Link to="/register">Ro'yhatdan o'tish</Link>
        </Heading>
      </Box>
    </Wrapper>
  );
};

export default Login;
