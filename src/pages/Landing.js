import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import Hero from '../components/sections/Hero';

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Welcome to my page fellas!"
        subtitle="This is subheader section"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create account homes"
        />
    </LandingLayout>
  )
}