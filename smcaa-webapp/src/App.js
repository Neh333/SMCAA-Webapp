import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AnnouncementBanner from './Components/AnnouncementBanner';
import HomePage from './Components/HomePage';
import Programs from './Components/Programs';
import CommunityEventsPage from './Components/CommunityEventsPage';
import ContactForm from './Components/ContactForm';
import NavBar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <AnnouncementBanner />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/community-events" element={<CommunityEventsPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
