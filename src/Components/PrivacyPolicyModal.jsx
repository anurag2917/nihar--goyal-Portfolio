import { m } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="privacy-modal-overlay"
      onClick={onClose}
    >
      <m.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="privacy-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="privacy-modal-header">
          <div>
            <h2 className="privacy-modal-title">Privacy Policy</h2>
            <p className="privacy-modal-date">Last updated: July 2026</p>
          </div>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="privacy-modal-content">
          <div className="privacy-section">
            <span className="privacy-badge">01</span>
            <h3>Introduction</h3>
            <p>
              Welcome to the portfolio website of Nihar Goyal (Automated Creative Systems). We respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we look after your data when you visit this website and tell you about your privacy rights.
            </p>
          </div>

          <div className="privacy-section">
            <span className="privacy-badge">02</span>
            <h3>Information We Collect</h3>
            <p>
              When you submit a query through our contact forms or reach out to us directly, we may collect the following information:
            </p>
            <ul>
              <li>Identity Data: Name, company name, or social media handles.</li>
              <li>Contact Data: Email address, phone number, and communication histories.</li>
              <li>Project Data: Briefs, media files, references, and goals you share.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <span className="privacy-badge">03</span>
            <h3>How We Use Your Data</h3>
            <p>
              We process your personal information only to provide services and maintain professional relationships:
            </p>
            <ul>
              <li>To answer queries, provide quotes, and initiate creative collaborations.</li>
              <li>To edit, produce, and deliver high-retention video content, motion design, and graphics.</li>
              <li>To display authorized testimonials and showcase portfolio works you have consented to feature.</li>
            </ul>
          </div>

          <div className="privacy-section">
            <span className="privacy-badge">04</span>
            <h3>Data Security & Sharing</h3>
            <p>
              We prioritize the safety of your project assets and personal details. We do not sell, distribute, or lease your personal information to third parties. All project footage and assets are kept secure and are only accessed by necessary creative team members involved in your production workflow.
            </p>
          </div>

          <div className="privacy-section">
            <span className="privacy-badge">05</span>
            <h3>Your Rights</h3>
            <p>
              You hold the right to request access to, correction of, or deletion of the personal data we hold about you. If you wish to withdraw permission for a portfolio showcase or testimonial, please connect with us directly, and we will update the website immediately.
            </p>
          </div>
        </div>

        {/* CSS Styles */}
        <style dangerouslySetInnerHTML={{ __html: `
          .privacy-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(10, 10, 10, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }

          .privacy-modal-card {
            background: #121212;
            border: 1px solid rgba(255, 90, 0, 0.2);
            border-radius: 20px;
            width: 100%;
            max-width: 680px;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 90, 0, 0.05);
            overflow: hidden;
            position: relative;
          }

          .privacy-modal-header {
            padding: 28px 32px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .privacy-modal-title {
            font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
            font-size: 1.75rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 6px 0;
            background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .privacy-modal-date {
            font-size: 0.85rem;
            color: #ff5a00;
            font-weight: 600;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .privacy-modal-close {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            color: #a1a1aa;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .privacy-modal-close:hover {
            background: rgba(255, 90, 0, 0.1);
            border-color: rgba(255, 90, 0, 0.4);
            color: #ffffff;
            transform: rotate(90deg);
          }

          .privacy-modal-close svg {
            width: 18px;
            height: 18px;
          }

          .privacy-modal-content {
            padding: 32px;
            overflow-y: auto;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            gap: 28px;
            scrollbar-width: thin;
            scrollbar-color: rgba(255, 90, 0, 0.3) rgba(0, 0, 0, 0.2);
          }

          .privacy-modal-content::-webkit-scrollbar {
            width: 6px;
          }

          .privacy-modal-content::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
          }

          .privacy-modal-content::-webkit-scrollbar-thumb {
            background: rgba(255, 90, 0, 0.3);
            border-radius: 4px;
          }

          .privacy-section {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .privacy-badge {
            font-size: 0.75rem;
            font-weight: 700;
            color: #ff5a00;
            background: rgba(255, 90, 0, 0.1);
            padding: 3px 8px;
            border-radius: 6px;
            width: fit-content;
            margin-bottom: 2px;
          }

          .privacy-section h3 {
            font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
          }

          .privacy-section p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #a1a1aa;
            margin: 0;
          }

          .privacy-section ul {
            margin: 0;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .privacy-section li {
            font-size: 0.95rem;
            color: #a1a1aa;
            line-height: 1.5;
          }

          @media (max-width: 640px) {
            .privacy-modal-card {
              max-height: 90vh;
            }
            .privacy-modal-header {
              padding: 20px 24px;
            }
            .privacy-modal-content {
              padding: 24px;
            }
            .privacy-modal-title {
              font-size: 1.5rem;
            }
          }
        `}} />
      </m.div>
    </m.div>
  );
};

export default PrivacyPolicyModal;
