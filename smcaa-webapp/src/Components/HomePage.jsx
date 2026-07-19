import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContactForm from './ContactForm';
import EventCarousel from './EventCarousel';
import { motion } from "framer-motion";
import { sections, eventSection } from '../data/sections';
import '../App.css';

const alignmentToJustify = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

function HomePage() {
  return (
    <>
      <EventCarousel />

      <motion.section
        id="home"
        className="background"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/background-image.png)` }}
      >
        <p className="eyebrow">Empowering Families • Strengthening Communities • Creating Opportunities</p>


        <h1>Every mother deserves the opportunity to thrive.</h1>
      
      </motion.section>

      {/* =====================================================================
          EVENT — July 19, 2026 (7/19/26)  ·  EASY TO REMOVE
          To take this event down, delete this entire block (through the
          "END EVENT" comment) and, optionally, the `eventSection` export
          in src/data/sections.js.
      ===================================================================== */}
      <motion.section
        id={eventSection.id}
        initial="hidden"
        whileInView="visible"
        viewport={eventSection.animation.viewport}
        style={{
          backgroundColor: eventSection.background,
          color: eventSection.color,
          padding: '56px 16px',
          scrollMarginTop: '72px',
        }}
      >
        <motion.div
          variants={{
            hidden: eventSection.animation.initial,
            visible: eventSection.animation.whileInView,
          }}
          transition={eventSection.animation.transition}
        >
          <Container maxWidth="sm">
            <Box sx={{ textAlign: 'center', color: 'inherit' }}>
              <Typography
                component="p"
                sx={{ textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 800, fontSize: '.8rem', mb: 1, color: 'inherit' }}
              >
                {eventSection.kicker}
              </Typography>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 1, color: 'inherit' }}>
                {eventSection.title}
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 2, color: 'inherit', opacity: 0.9 }}>
                {eventSection.date}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 3, color: 'inherit' }}>
                {eventSection.body}
              </Typography>
              <Button
                variant="contained"
                href={eventSection.cta.href}
                sx={{
                  backgroundColor: '#fff',
                  color: eventSection.background,
                  fontWeight: 700,
                  '&:hover': { backgroundColor: '#f0e6f7' },
                }}
              >
                {eventSection.cta.label}
              </Button>
            </Box>
          </Container>
        </motion.div>
      </motion.section>
      {/* ========================= END EVENT ========================= */}

      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial="hidden"
          whileInView="visible"
          viewport={section.animation.viewport}
          style={{
            backgroundColor: section.background,
            color: section.color || 'inherit',
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
            <Container maxWidth="md">
              <Box sx={{ textAlign: section.align || 'center', color: 'inherit' }}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'inherit' }}>
                  {section.title}
                </Typography>
                {section.heading && (
                  <Typography variant="h6" component="p" sx={{ mb: 2, color: 'inherit', opacity: 0.9 }}>
                    {section.heading}
                  </Typography>
                )}
                {section.body && (
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'inherit' }}>
                    {section.body}
                  </Typography>
                )}
                {section.bullets && (
                  <Box
                    component="ul"
                    sx={{
                      display: 'inline-block',
                      textAlign: 'left',
                      pl: 3,
                      mt: 2,
                      mb: 0,
                      color: 'inherit',
                    }}
                  >
                    {section.bullets.map((point, index) => (
                      <Typography
                        component="li"
                        key={`${section.id}-bullet-${index}`}
                        variant="body1"
                        sx={{ fontSize: '1.05rem', lineHeight: 1.7, mb: 1, color: 'inherit' }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>

              {section.images?.map((image, index) => (
                <div
                  key={`${section.id}-image-${index}`}
                  style={{
                    display: 'flex',
                    justifyContent: alignmentToJustify[image.alignment] || 'center',
                    marginTop: 24,
                  }}
                >
                  <motion.img
                    src={`${process.env.PUBLIC_URL}${image.src}`}
                    alt={image.alt}
                    initial="hidden"
                    whileInView="visible"
                    viewport={image.animation.viewport}
                    variants={{
                      hidden: image.animation.initial,
                      visible: image.animation.whileInView,
                    }}
                    transition={image.animation.transition}
                    style={{ maxWidth: image.maxWidth || '100%', height: 'auto', borderRadius: 8 }}
                  />
                </div>
              ))}

              {section.id === 'contact' && <ContactForm />}
            </Container>
          </motion.div>
        </motion.section>
      ))}
    </>
  );
}

export default HomePage;
