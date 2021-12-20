import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import ContactForm from '../components/sections/ContactForm';
import Hero from '../components/sections/Hero';
// import About from '../components/sections/About';
import profileImage from '../profile.jpg'

export default function Landing() {
  return (
    <LandingLayout>
      {/* <About /> */}
      <Hero
        title="Hello world, I'm a software developer based in North Bay, ON!"
        subtitle="This is subheader section"
        image={profileImage}
        //image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create account homes"
        />
        <ContactForm />
    </LandingLayout>
  )
}