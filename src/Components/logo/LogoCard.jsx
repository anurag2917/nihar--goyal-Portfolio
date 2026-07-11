import { memo } from 'react';

const LogoCard = memo(({ logo }) => {
  return (
    <div className="logo-card" role="img" aria-label={`Client logo: ${logo.name} (${logo.via})`}>
      <div className="logo-img-wrapper" aria-hidden="true">{logo.svg}</div>
      <div className="logo-via" aria-hidden="true">{logo.via}</div>
    </div>
  );
});

LogoCard.displayName = 'LogoCard';

export default LogoCard;
