import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="px-8 py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-3">Contact</h1>
      <p className="text-gray-400 mb-14 text-sm">Envoyez-moi un message</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <h2 className="text-xl font-bold mb-6">Restons en contact</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Une question, une proposition ou juste envie de dire bonjour ? N'hésitez pas à m'écrire !
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: <FaEnvelope />, label: 'Email', value: 'rayane.elyounsi@efrei.fr' },
              { icon: <FaMapMarkerAlt />, label: 'Localisation', value: 'Bordeaux, France' },
              { icon: <FaLinkedin />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/rayane-elyounsi/' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div className="bg-primary/10 border border-primary rounded-2xl p-8 text-center">
              <p className="text-xl font-bold mb-2">Message envoyé !</p>
              <p className="text-gray-500 text-sm">Merci de m'avoir contacté. Je reviendrai vers vous bientôt.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-black underline hover:text-primary transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-black font-semibold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity self-start"
              >
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
