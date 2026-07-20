import kalindiLogo from '../assets/logos/kalindi.png';
import chaisuttaLogo from '../assets/logos/chaisutta.png';
import godrejLogo from '../assets/logos/godrej.png';
import kaffeelaLogo from '../assets/logos/kaffeela.png';
import highontalesLogo from '../assets/logos/highontales.png';
import maateaLogo from '../assets/logos/maatea.png';
import communityLogo from '../assets/logos/community.png';
import stellaspireLogo from '../assets/logos/stellaspire.png';
import strandLogo from '../assets/logos/strand.png';
import airenLogo from '../assets/logos/airen.png';

/**
 * logosData — Client logo definitions for the carousel.
 *
 * Each entry uses a semantic CSS className (e.g. "logo-kalindi") instead of
 * numeric scale values. All sizing is handled in index.css via those classes,
 * keeping data and presentation cleanly separated.
 *
 * Removed:
 *  - scale: x.xx  (replaced with className)
 *  - via: "..."   (removed entirely; .logo-via JSX deleted from LogoCard)
 */
export const logosData = [
  {
    name: 'Kalindi Gandhi Group',
    image: kalindiLogo,
    className: 'logo-kalindi',
  },
  {
    name: 'Chai Sutta Bar',
    image: chaisuttaLogo,
    className: 'logo-chaisutta',
  },
  {
    name: 'Godrej Properties',
    image: godrejLogo,
    className: 'logo-godrej',
  },
  {
    name: 'Kaffee-La',
    image: kaffeelaLogo,
    className: 'logo-kaffeela',
  },
  {
    name: 'High On Tales',
    image: highontalesLogo,
    className: 'logo-highontales',
  },
  {
    name: 'Maatea',
    image: maateaLogo,
    className: 'logo-maatea',
  },
  {
    name: 'Community Platform',
    image: communityLogo,
    className: 'logo-community',
  },
  {
    name: 'Stellaspire',
    image: stellaspireLogo,
    className: 'logo-stellaspire',
  },
  {
    name: 'Strand',
    image: strandLogo,
    className: 'logo-strand',
  },
  {
    name: 'Airen Group',
    image: airenLogo,
    className: 'logo-airen',
  },
];
