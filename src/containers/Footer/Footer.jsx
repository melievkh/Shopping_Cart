import React from 'react';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import { Wrapper } from './Footer.style';
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';
import colors from '../../assets/color/colors';

const Footer = () => {
  return (
    <Wrapper>
      <Heading secondary size="lg">
        logo
      </Heading>
      <ul>
        <li>Asosiy</li>
        <li>Biz haqimizda</li>
        <li>Aloqa</li>
      </ul>
      <FlexBox row wd="80%" justifyContent="space-between">
        <Heading style={{ color: colors.bgColor }}>
          Ijtimoiy tarmoqlarimiz
        </Heading>
        <ul>
          <li>
            <FaTelegram />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </FlexBox>
      <hr />
      <FlexBox row wd="85%" justifyContent="space-between">
        <Heading style={{ color: colors.bgColor }}>
          Foydalanish shartlari
        </Heading>
        <Heading style={{ color: colors.bgColor }}>
          {' '}
          Melievkh tomonidan ishlab chiqilgan
        </Heading>
      </FlexBox>
    </Wrapper>
  );
};

export default Footer;
