import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import ContactForm from '../components/sections/ContactForm';
import Hero from '../components/sections/Hero';
import Footer from '../components/sections/Footer'
import absurdImg from '../03.png'
import invertedabsurdImg from '../03-modified.png'
import ProjectList from '../components/sections/ProjectList';
import { Route, Routes } from 'react-router-dom';
import Example from './Example';

export default function Landing() {
  return (
    <LandingLayout>
      
      <Hero
        title="Hello world, I'm a software developer based in Toronto, ON!"
        subtitle="I love designing, building websites and strive for clean code. When I'm not coding I watch movies, listen to music and play chess :)"
        image={absurdImg}
        darkimage={invertedabsurdImg}
        mt={12}
        />
        <ProjectList />
        <Routes>
          <Route path="example" element={<Example />} ></Route>
        </Routes>
        <ContactForm />
        <Footer />
    </LandingLayout>
  )
}