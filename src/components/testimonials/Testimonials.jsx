import { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    role: 'Frontend Developer',
    text: "Rayane est un developpeur incroyable ! Personne toujours divertissant et instructif. Une vraie valeur ajoutée dans la communauté tech.",
    rating: 5,
    initials: 'MD',
  },
  {
    id: 2,
    name: 'Lucas Martin',
    role: 'Game Designer',
    text: "J'adore travailler avec Rayane. Il a un vrai talent pour créer une ambiance et engager ses clients. On revient toujours pour l'énergie qu'il dégage.",
    rating: 5,
    initials: 'LM',
  },
  {
    id: 3,
    name: 'Sophie Bernard',
    role: 'UX Designer',
    text: "Les travaux de Rayane sont toujours de qualité. Je recommande vivement !",
    rating: 4,
    initials: 'SB',
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);

  const { name, role, text, rating, initials } = testimonials[active];

  return (
    <section className="px-8 py-20 bg-gray-50" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="testimonials-heading" className="text-4xl font-bold mb-3">Testimonials</h2>
        <p className="text-gray-400 mb-14 text-sm">Ce que disent mes clients et partenaires</p>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-2xl mx-auto transition-all duration-300">
            <div className="flex justify-center gap-1 mb-6" aria-label={`Note : ${rating} étoiles sur 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < rating ? 'text-primary text-xl' : 'text-gray-200 text-xl'}
                />
              ))}
            </div>

            <blockquote className="text-gray-600 text-lg italic leading-relaxed mb-8">
              "{text}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-black flex-shrink-0"
                aria-hidden="true"
              >
                {initials}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-gray-400 text-xs">{role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Témoignage précédent"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <FaChevronLeft size={12} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Témoignage ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === active ? 'w-6 h-3 bg-primary' : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Témoignage suivant"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
