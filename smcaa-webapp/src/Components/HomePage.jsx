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
    animation: {
      initial: { hidden: true, opacity: 0, y: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    id: 'programs',
    title: 'Programs',
    heading: 'Programs that equip single mothers with skills, resources, and confidence.',
    background: '#e8eaf6',
    body: 'Explore our seasonal leagues, skills clinics, and training programs designed for all ages and experience levels.',
    animation: {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    id: 'community-events',
    title: 'Community Events',
    heading: 'Events that bring single moms and their families together all year long.',
    background: '#e0f7fa',
    body: 'Join us for tournaments, fundraisers, and family-friendly gatherings held throughout the year.',
    animation: {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    id: 'support',
    title: 'Support',
    heading: 'Your support helps single mothers and their children thrive.',
    background: '#242c4a',
    body: 'Help SMCAA thrive through donations, sponsorships, and volunteering. Every contribution keeps our programs running.',
    animation: {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },
  {
    id: 'contact',
    title: 'Contact',
    heading: 'Get in touch — we would love to hear from you.',
    background: '#f1f8e9',
    body: 'Have a question or want to get involved? Reach out and the SMCAA team will get back to you soon.',
    animation: {
      initial: { opacity: 0, scale: 0.9, y: 50 },
      whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 1, ease: 'easeOut' },
    },
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
          initial="hidden"
          whileInView="visible"
          viewport={section.animation.viewport}
          style={{
            backgroundColor: section.background,
            minHeight: '60vh',
            padding: '64px 16px',
            scrollMarginTop: '72px',
          }}
        >
          <motion.div
            variants={{
              hidden: section.animation.initial,
              visible: section.animation.whileInView,
            }}
            transition={section.animation.transition}
          >
            <Container maxWidth="sm">
              <h1 style={{ textAlign: 'center' }}>{section.title}</h1>
              <h2 style={{ textAlign: 'center' }}>{section.heading}</h2>
              <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {section.body}
              </p>
              {section.id === 'contact' && <ContactForm />}
            </Container>
          </motion.div>
        </motion.section>
      ))}
    </>
  );
}

export default HomePage;
