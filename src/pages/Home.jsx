import { useEffect, useState } from 'react';
import Hero from '../components/hero/Hero';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <Testimonials />
    </div>
  );
};

export default Home;
