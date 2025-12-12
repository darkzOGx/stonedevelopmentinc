const Hero = () => {
  return (
    <section className="pt-20">
      {/* Full-width Hero Video */}
      <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-125 md:scale-100 transition-transform duration-300"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
