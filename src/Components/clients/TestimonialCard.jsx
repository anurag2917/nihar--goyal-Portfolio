import { memo } from 'react';
import { m, useReducedMotion } from 'framer-motion';

const TestimonialCard = memo(({ testimonial }) => {
  const {
    name,
    role,
    avatarColor,
    avatarText,
    avatarImage,
    isLogo,
    quote,
    project,
    date,
    badgeType,
    hasAudioStrip,
    audioTime,
    hasVideoThumb,
    videoTime,
    isWhatsAppDate,
    delay = 0.1,
  } = testimonial;

  const shouldReduceMotion = useReducedMotion();
  const initials = avatarText || (name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : '');

  return (
    <m.div
      className="bg-white border border-[#EAEAEA] rounded-2xl p-8 flex flex-col justify-between h-full cursor-default hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:border-gray-300 transition-all duration-300"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex-shrink-0 ${avatarImage ? 'bg-gray-50 border border-gray-100 overflow-hidden' : avatarColor} flex items-center justify-center text-white text-[10px] font-bold ${avatarImage && isLogo ? 'p-1.5' : ''}`}
          >
            {avatarImage ? (
              <img src={avatarImage} alt={name} className={`w-full h-full ${isLogo ? 'object-contain' : 'object-cover'}`} />
            ) : (
              initials
            )}
          </div>
          <div>
            <h3 className="font-bold text-[#0F0F0F] text-sm">{name}</h3>
            <p className="text-[#4B5563] text-xs">{role}</p>
          </div>
        </div>

        {/* Top Right Badges / Icons */}
        {badgeType === 'quote' && (
          <div className="text-[#ff5a00] text-3xl font-serif leading-none mt-[-5px]" aria-hidden="true">❞</div>
        )}

        {badgeType === 'waveform' && (
          <div className="flex items-end gap-[2px] h-5 opacity-40" aria-hidden="true">
            {[3, 6, 4, 8, 5].map((h, i) => (
              <div
                key={i}
                className="w-[2px] bg-[#8b5cf6] rounded-full"
                style={{ height: `${h * 2}px` }}
              ></div>
            ))}
          </div>
        )}

        {badgeType === 'approved' && (
          <span className="text-[9px] font-bold text-white bg-[#ff5a00] px-2 py-0.5 rounded-full">
            Final Approved
          </span>
        )}

        {badgeType === 'figma' && (
          <div className="w-5 h-7" aria-hidden="true">
            <svg viewBox="0 0 38 57" className="w-full h-full" fill="none">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
              <path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
          </div>
        )}

        {badgeType === 'whatsapp' && (
          <div className="text-[#25D366]" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-grow flex flex-col justify-center mb-6">
        {hasAudioStrip && (
          <div className="bg-gray-50 rounded-full h-10 flex items-center px-3 relative mb-4" aria-hidden="true">
            <div className="w-6 h-6 bg-[#8b5cf6] rounded-full flex items-center justify-center text-white pl-0.5">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <div className="flex items-center gap-0.5 ml-3 h-4 opacity-50">
              {[4, 8, 5, 12, 16, 10, 6, 14, 12, 8, 4, 8, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] bg-[#8b5cf6] rounded-full"
                  style={{ height: `${h}px` }}
                ></div>
              ))}
            </div>
            <span className="absolute right-4 text-[10px] text-gray-400 font-medium">
              {audioTime}
            </span>
          </div>
        )}

        {hasVideoThumb && (
          <div className="w-full h-[120px] bg-[#1a1a1a] rounded-xl flex items-center justify-center relative overflow-hidden mb-4" aria-hidden="true">
            <div className="absolute w-[150px] h-[150px] rounded-full bg-white/5 blur-xl"></div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg z-10 text-black">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <span className="absolute bottom-2 left-2 text-[10px] text-white bg-black/50 px-1.5 py-0.5 rounded">
              {videoTime}
            </span>
          </div>
        )}

        <p className="text-[#4B5563] font-medium text-[15px] leading-relaxed">{quote}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] text-[#999] uppercase font-semibold tracking-wider pt-4 border-t border-[#EAEAEA]">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          Project: {project}
        </span>
        {isWhatsAppDate ? (
          <span className="flex items-center gap-1 text-[#059669]">
            {date} <span className="text-[#25D366] text-xs font-bold leading-none">✓✓</span>
          </span>
        ) : (
          <span>{date}</span>
        )}
      </div>
    </m.div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
