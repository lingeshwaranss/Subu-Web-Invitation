import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { MapPin, ExternalLink, QrCode as QrIcon } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

interface ClickableQRCodeProps {
  size?: number;
  className?: string;
}

export const ClickableQRCode: React.FC<ClickableQRCodeProps> = ({ size = 200, className = '' }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(true);

  useEffect(() => {
    QRCode.toDataURL(INVITATION_DATA.venue.mapsUrl, {
      width: size * 2,
      margin: 2,
      color: {
        dark: '#20572C',
        light: '#FFFDF3',
      },
      errorCorrectionLevel: 'H',
    })
      .then((url) => {
        setQrDataUrl(url);
        setIsGenerating(false);
      })
      .catch((err) => {
        console.error('Error generating QR code:', err);
        setIsGenerating(false);
      });
  }, [size]);

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Clickable QR Code Container */}
      <a
        href={INVITATION_DATA.venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={INVITATION_DATA.uiLabels.openGoogleMaps}
        className="group relative block p-3 bg-[#FFFDF3] rounded-2xl border-2 border-[#C6A15B] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#C6A15B]/40"
      >
        {/* Subtle decorative gold corner accents */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#70451F] rounded-tl-sm pointer-events-none" />
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#70451F] rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#70451F] rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#70451F] rounded-br-sm pointer-events-none" />

        <div className="relative overflow-hidden rounded-xl">
          {isGenerating ? (
            <div
              style={{ width: size, height: size }}
              className="flex items-center justify-center bg-[#E7F0D7]/50 text-[#20572C] text-sm"
            >
              <QrIcon className="w-8 h-8 animate-pulse text-[#C6A15B]" />
            </div>
          ) : (
            <img
              src={qrDataUrl}
              alt="QR Code for Venue Google Maps"
              width={size}
              height={size}
              className="block rounded-lg transition-transform duration-300 group-hover:scale-102"
              loading="lazy"
            />
          )}

          {/* Interactive touch/click overlay hint on hover in English */}
          <div className="absolute inset-0 bg-[#20572C]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg pointer-events-none">
            <span className="bg-[#20572C] text-[#FFFDF3] text-xs font-bold py-1 px-3 rounded-full shadow flex items-center gap-1 font-sans">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{INVITATION_DATA.uiLabels.openGoogleMaps}</span>
            </span>
          </div>
        </div>
      </a>

      {/* English scan / tap label */}
      <p className="mt-3 text-xs sm:text-sm font-bold text-[#20572C] flex items-center justify-center gap-1.5 font-sans">
        <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0" />
        <span>{INVITATION_DATA.uiLabels.scanOrTapQR}</span>
      </p>

      {/* Dedicated Google Maps button in English */}
      <a
        href={INVITATION_DATA.venue.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold rounded-full text-[#FFFDF3] bg-[#20572C] hover:bg-[#184422] border border-[#C6A15B] shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] font-sans"
      >
        <MapPin className="w-4 h-4 text-[#ECC880]" />
        <span>{INVITATION_DATA.uiLabels.openGoogleMaps}</span>
        <ExternalLink className="w-3.5 h-3.5 opacity-80" />
      </a>
    </div>
  );
};
