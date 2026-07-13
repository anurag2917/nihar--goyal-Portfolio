import { memo } from 'react';

const LogoCard = memo(({ logo }) => {
  return (
    <div className="logo-card" role="img" aria-label={`Client logo: ${logo.name} (${logo.via})`}>
      <div className="logo-img-wrapper" aria-hidden="true">
        {logo.image ? (
          <img 
            src={logo.image} 
            alt={logo.name} 
            loading="lazy" 
            decoding="async" 
            style={logo.scale && logo.scale !== 1 ? { transform: `scale(${logo.scale})`, display: 'block' } : { display: 'block' }}
          />
        ) : (
          logo.svg
        )}
      </div>
      <div className="logo-via" aria-hidden="true">{logo.via}</div>
    </div>
  );
});

LogoCard.displayName = 'LogoCard';

export default LogoCard;
