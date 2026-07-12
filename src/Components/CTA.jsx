import { useCallback } from 'react';

const CTA = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const subject = `New Inquiry from ${data.name}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}`;

    window.location.href = `mailto:hello@nihargoyal.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, []);

  return (
    <section className="cta-section py-[60px] md:py-[100px]" id="contact" style={{ position: 'relative', zIndex: 12 }}>
      <div className="cta-top-content">
        <div className="cta-left">

          <h2 className="cta-title">
            Got an idea<br/>
            worth bringing<br/>
            <span className="highlight">to life?</span>
          </h2>



          
        </div>

        <div className="cta-right">
           <form className="cta-form-card" onSubmit={handleSubmit}>
              <div className="form-inputs">
                 <div className="fi-group">
                    <label htmlFor="cta-name">YOUR NAME</label>
                    <input id="cta-name" type="text" name="name" className="fi-input" placeholder="John Doe" autoComplete="name" required />
                 </div>
                 <div className="fi-group">
                    <label htmlFor="cta-email">EMAIL ADDRESS</label>
                    <input id="cta-email" type="email" name="email" className="fi-input" placeholder="hello@example.com" autoComplete="email" required />
                 </div>
              </div>

              <button type="submit" className="start-btn-large group/btn" aria-label="Start Project">
                 Start Project
                 <div className="start-btn-icon flex items-center justify-center" aria-hidden="true">
                   <svg
                     width="14"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2.5"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-white"
                   >
                     <line x1="7" y1="17" x2="17" y2="7"></line>
                     <polyline points="7 7 17 7 17 17"></polyline>
                   </svg>
                 </div>
              </button>

              <div className="fc-footer">
                 <div className="fc-reply" role="status"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Replies within 24 hours</div>
              </div>
           </form>
        </div>

      </div>


      <style dangerouslySetInnerHTML={{__html: `
        .pt-card {
          transform: translateY(var(--y-rest));
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pt-card.active, .pt-card:hover {
          transform: translateY(calc(var(--y-rest) - 8px));
          border-color: var(--accent-orange, #ff5a00) !important;
          box-shadow: 0 10px 20px rgba(255, 90, 0, 0.1);
        }

        @keyframes orbitShape {
          0% { transform: rotate(0deg) translateX(15px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(15px) rotate(-360deg); }
        }
        .cta-bg-shape {
          animation: orbitShape 20s linear infinite;
        }

        @keyframes breatheBtn {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .start-btn-large {
          animation: breatheBtn 2s ease-in-out infinite;
        }

        @keyframes blinkDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .fc-status .dot.green {
          animation: blinkDot 1.5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default CTA;
