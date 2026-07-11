import { Fragment, useMemo } from 'react';
import { logosData } from '../data/logosData';
import LogoCard from './logo/LogoCard';

const Logo = () => {
  const duplicatedLogos = useMemo(() => [...logosData, ...logosData], []);

  return (
    <section className="logo-section relative z-40">
      <div className="logo-carousel-card">
        <div className="logo-carousel-wrapper">
          <div className="logo-carousel">
            {duplicatedLogos.map((logo, index) => (
              <Fragment key={index}>
                <LogoCard logo={logo} />
                <span className="logo-separator">·</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
