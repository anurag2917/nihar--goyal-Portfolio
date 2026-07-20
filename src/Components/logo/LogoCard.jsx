import { memo } from 'react';

/**
 * LogoCard — Renders a single client logo inside the carousel.
 *
 * Changes from previous version:
 *  - Removed inline style={{ transform: `scale(...)` }} — all sizing now
 *    handled by per-logo CSS classes (e.g. .logo-kalindi, .logo-community).
 *  - Added logo.className to <img> via className="logo-img {logo.className}".
 *  - Updated aria-label to remove (via) suffix — simpler, cleaner semantics.
 *  - Removed .logo-via div entirely — dead UI, no longer in data.
 *  - Kept lazy loading and async decoding for performance.
 */
const LogoCard = memo(({ logo }) => {
  return (
    /* role="img" + aria-label gives the card an accessible name */
    <div className="logo-card" role="img" aria-label={`Client logo: ${logo.name}`}>

      {/* Fixed-size wrapper: centers logo optically via flexbox */}
      <div className="logo-img-wrapper" aria-hidden="true">
        {logo.image ? (
          <img
            src={logo.image}
            alt={logo.name}
            loading="lazy"
            decoding="async"
            /* Base .logo-img class provides object-fit:contain sizing;
               per-logo class (e.g. .logo-kalindi) overrides max-width/max-height
               where that specific logo needs optical correction. */
            className={`logo-img ${logo.className || ''}`}
          />
        ) : (
          /* SVG fallback for logos that ship as inline SVG */
          logo.svg
        )}
      </div>

    </div>
  );
});

LogoCard.displayName = 'LogoCard';

export default LogoCard;
