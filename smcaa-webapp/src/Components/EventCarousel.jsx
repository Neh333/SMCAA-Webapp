import React, { useState, useEffect, useCallback } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: `${process.env.PUBLIC_URL}/7-19-26-Event.PNG`, alt: 'Community event flyer 1 — July 19, 2026' },
  { src: `${process.env.PUBLIC_URL}/7-19-26-Event2.PNG`, alt: 'Community event flyer 2 — July 19, 2026' },
  { src: `${process.env.PUBLIC_URL}/7-19-26-Event3.PNG`, alt: 'Community event flyer 3 — July 19, 2026' },
];

const AUTO_ADVANCE_MS = 6000;

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

function EventCarousel() {
  const [[index, direction], setState] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const paginate = useCallback((newDirection) => {
    setState(([current]) => [(current + newDirection + count) % count, newDirection]);
  }, [count]);

  const goTo = useCallback((target) => {
    setState(([current]) => [target, target > current ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paginate, paused, index]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 340, sm: 460, md: 580 },
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: '#111',
          boxShadow: 3,
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index].src}
            alt={images[index].alt}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = offset.x + velocity.x * 100;
              if (swipe < -120) paginate(1);
              else if (swipe > 120) paginate(-1);
            }}
            draggable={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              cursor: 'grab',
            }}
          />
        </AnimatePresence>

        <IconButton
          aria-label="Previous image"
          onClick={() => paginate(-1)}
          sx={{
            position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)',
            width: 44, height: 44, fontSize: '2rem', lineHeight: 1,
            bgcolor: 'rgba(0,0,0,0.45)', color: '#fff',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          {'‹'}
        </IconButton>
        <IconButton
          aria-label="Next image"
          onClick={() => paginate(1)}
          sx={{
            position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)',
            width: 44, height: 44, fontSize: '2rem', lineHeight: 1,
            bgcolor: 'rgba(0,0,0,0.45)', color: '#fff',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
          }}
        >
          {'›'}
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 2 }}>
        {images.map((img, i) => (
          <Box
            key={img.src}
            component="button"
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            sx={{
              width: 12, height: 12, p: 0, border: 'none', borderRadius: '50%',
              cursor: 'pointer',
              bgcolor: i === index ? 'primary.main' : 'grey.400',
              transition: 'background-color 0.2s',
            }}
          />
        ))}
      </Box>
    </Container>
  );
}

export default EventCarousel;
