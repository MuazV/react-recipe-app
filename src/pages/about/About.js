import React from 'react';
import coding from '../../assets/coding.svg';
import StyledDiv from './style';

const About = () => {
  return (
    <StyledDiv>
      <div><img src={coding} alt="" /></div>
      <p>About Software Developer <span style={{color:"white"}}><span style={{fontSize:"1.8rem"}}>E</span>D <span style={{fontSize:"1.8rem"}}>B</span>EN</span></p>
      <section className='bottom'>
        <h2>I'm Ed.</h2>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>I've already known JS,ReactJS, ReactNative, NodeJS, MongoDB, SQL, Python, AWS Services</p>
        <p><span style={{color:"white", textDecoration: "underline"}}>Send email</span> : edwardbenedict92@gmail.com</p>
      </section>
    </StyledDiv>
  )
}

export default About