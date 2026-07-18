import React from 'react';
import Container from '@mui/material/Container';
import ContactForm from './ContactForm';
import { motion } from "framer-motion";
import '../App.css';

const sections = [
  {
    id: 'about',
    title: 'About',
    heading: 'Single Moms Can Achive All is dedicated to empowering single mothers and their families',
    background: '#f3e5f5',
    body: ' through community support, educational programs, and recreational activities.',
  },
  {
    id: 'programs',
    title: 'Programs',
    background: '#e8eaf6',
    body: 'Explore our seasonal leagues, skills clinics, and training programs designed for all ages and experience levels.',
  },
  {
    id: 'community-events',
    title: 'Community Events',
    background: '#e0f7fa',
    body: 'Join us for tournaments, fundraisers, and family-friendly gatherings held throughout the year.',
  },
  {
    id: 'support',
    title: 'Support',
    background: '#242c4a',
    body: 'Help SMCAA thrive through donations, sponsorships, and volunteering. Every contribution keeps our programs running.',
  },
  {
    id: 'contact',
    title: 'Contact',
    background: '#f1f8e9',
    body: 'Have a question or want to get involved? Reach out and the SMCAA team will get back to you soon.',
  },
];

function HomePage() {
  return (
    <>
      <motion.section
        id="home"
        className="background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.png)` }}
      >
        <p className="eyebrow">Empowering Families • Strengthening Communities • Creating Opportunities</p>


        <h1>Every mother deserves the opportunity to thrive.</h1>
      
      </motion.section>

      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          style={{
            backgroundColor: section.background,
            minHeight: '60vh',
            padding: '64px 16px',
            scrollMarginTop: '72px',
          }}
        >
          <Container maxWidth="sm">
            <h1 style={{ textAlign: 'center' }}>{section.title}</h1>
            <h2 style={{ textAlign: 'center' }}>{section.heading}</h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.6 }}>
              {section.body}
            </p>
            {section.id === 'contact' && <ContactForm />}
          </Container>
        </motion.section>
      ))}
    </>
  );
}

export default HomePage;
