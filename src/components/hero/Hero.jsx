import HeroButtons from './HeroButtons';

const Hero = () => {
  return (
    <section className="flex flex-row min-h-[78vh] overflow-hidden">
      {/* Left — text content */}
      <div className="flex flex-col px-12 py-16 w-1/2 gap-4">
        <p className="text-primary font-semibold tracking-widest text-xl uppercase">
          ETUDIANT EFREI
        </p>
        <h1 className="text-6xl font-bold leading-tight">
          Hello,my name<br/> is Rayane
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Etudiant en 1ere année LSI à EFREI, en alternance chez BETCLIC en tant que développeur Android
        </p>
        <HeroButtons />
      </div>

      <div>
        <img
            src="/assets/yellow-bg.png"
            alt=""
            className="absolute top-20 right-0 w-1/2"
        />
        <img
            src="/assets/Rayane.png"
            alt="Rayane"
            className="absolute top-20 -right-20 w-1/2"
        />
      </div>
    </section>
  );
};

export default Hero;
