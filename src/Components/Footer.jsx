import { navLinks, socialLinks } from '../data/navigationData';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Top CTA Section (The Action Card) */}
      <div className="footer-cta-container">
        <div className="footer-cta-card">
          <div className="footer-cta-left">
            <h2 className="footer-cta-title">Build Your Growth Engine.</h2>
            <p className="footer-cta-subtitle">
              Stop micromanaging your brand. Let's scale your business.
            </p>
          </div>
          <div className="footer-cta-right">
            <a href="#contact" className="footer__cta">Let's Connect</a>
          </div>
        </div>
      </div>

      {/* Middle Divider */}
      <div className="footer-divider"></div>

      {/* Bottom Navigation Row */}
      <div className="footer-nav-container">
        {/* Left Column (Brand) */}
        <div className="footer-brand-column">
          <div className="footer-logo">
            NG<span className="footer-logo-dot">.</span>
          </div>
          <p className="footer-copyright">
            © 2026 NiharGoyal – Automated Creative Systems.
          </p>
        </div>

        {/* Right Column (Links & Socials) */}
        <div className="footer-links-column">
          <div className="footer-links-grid">
            <div className="footer-links-row">
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="footer-links-row">
              <a href="#privacy" className="footer-link">Privacy Policy</a>
            </div>
          </div>
          <div className="footer-socials-row">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer-section {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          background-color: #0F0F0F;
          border-top: 1px solid rgba(255, 90, 0, 0.4);
          box-shadow: 0px -15px 40px rgba(255, 90, 0, 0.05);
          margin-top: 6rem;
          color: #fff;
          font-family: 'Inter', sans-serif;
          z-index: 10;
        }

        .footer-cta-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .footer-cta-card {
          background: #1A1A1A;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 3rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
        }

        .footer-cta-left {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .footer-cta-subtitle {
          font-size: 1.1rem;
          color: #A1A1AA;
          margin: 0;
        }

        .footer__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2.25rem;
          background-color: #ff5a00;
          color: #121212 !important;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .footer__cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 90, 0, 0.35);
          background-color: #ff6d1b;
        }

        .footer-divider {
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
        }

        .footer-brand-column {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-logo {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #ffffff;
          line-height: 1;
        }

        .footer-logo-dot {
          color: #ff5a00;
        }

        .footer-copyright {
          font-size: 0.825rem;
          color: #A1A1AA;
          margin: 0;
        }

        .footer-links-column {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }

        .footer-links-grid {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.75rem;
        }

        .footer-links-row {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link {
          color: #A1A1AA;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #ff5a00;
        }

        .footer-socials-row {
          display: flex;
          gap: 1rem;
        }

        .footer-social-link {
          color: #A1A1AA;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .footer-social-link:hover {
          color: #ff5a00;
          transform: translateY(-2px);
        }

        .footer-social-link svg {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .footer-cta-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 2.5rem 2rem;
            gap: 1.5rem;
          }

          .footer-cta-title {
            font-size: 1.75rem;
          }

          .footer-nav-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 2.5rem;
            padding: 2rem;
          }

          .footer-links-column {
            align-items: flex-start;
            width: 100%;
          }

          .footer-links-grid {
            align-items: flex-start;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
