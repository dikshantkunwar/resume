import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import ContactForm from '../components/sections/ContactForm';
import Hero from '../components/sections/Hero';
import Footer from '../components/sections/Footer'
// import profileImage from '../profile.jpg'
import absurdImg from '../03.png'
import ProjectList from '../components/sections/ProjectList';

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Hello world, I'm a software developer based in North Bay, ON!"
        subtitle="This is subheader section"
        image={absurdImg}
        />
        <ProjectList />
        <ContactForm />
        <Footer />
    </LandingLayout>
  )
}