const PARTICLES = Array.from({ length: 28 });

const AnimatedBackground = () => (
  <div className="animated-bg" aria-hidden="true">
    <div className="blob-3" />
    <div className="particles">
      {PARTICLES.map((_, i) => {
        const size = 4 + ((i * 7) % 14);
        const left = (i * 37) % 100;
        const delay = (i * 0.8) % 14;
        const duration = 14 + ((i * 3) % 16);
        const opacity = 0.25 + ((i % 5) * 0.1);
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
    <div className="grid-overlay" />
  </div>
);

export default AnimatedBackground;