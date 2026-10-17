import React from 'react';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { INVITATION_DATA } from '../data/invitationData';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}

export const MusicControl: React.FC<MusicControlProps> = ({
  isPlaying,
  onToggle,
  className = '',
}) => {
  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-2 ${className}`}>
      <button
        onClick={onToggle}
        aria-label={
          isPlaying
            ? INVITATION_DATA.uiLabels.pauseMusic
            : INVITATION_DATA.uiLabels.playMusic
        }
        title={
          isPlaying
            ? INVITATION_DATA.uiLabels.pauseMusic
            : INVITATION_DATA.uiLabels.playMusic
        }
        className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF3]/95 hover:bg-[#FFFDF3] text-[#20572C] border-2 border-[#C6A15B] shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] font-sans"
      >
        {/* Animated music disc / icon */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <Disc
            className={`w-5 h-5 text-[#C6A15B] transition-transform duration-700 ${
              isPlaying ? 'animate-spin' : ''
            }`}
            style={{ animationDuration: '4s' }}
          />
          {isPlaying ? (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20572C]" />
            </span>
          ) : null}
        </div>

        {/* English state label */}
        <span className="text-xs font-bold text-[#20572C] hidden sm:inline whitespace-nowrap">
          {isPlaying
            ? INVITATION_DATA.uiLabels.pauseMusic
            : INVITATION_DATA.uiLabels.playMusic}
        </span>

        {/* Play/Pause indicator icon */}
        <span className="text-[#70451F]">
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#20572C]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#70451F]/70" />
          )}
        </span>

        {/* Small animated audio wave bars when playing */}
        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3 ml-0.5">
            <span className="w-0.5 h-2.5 bg-[#C6A15B] animate-pulse rounded-full" />
            <span
              className="w-0.5 h-3 bg-[#477A32] animate-pulse rounded-full"
              style={{ animationDelay: '150ms' }}
            />
            <span
              className="w-0.5 h-1.5 bg-[#C6A15B] animate-pulse rounded-full"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        )}
      </button>
    </div>
  );
};
