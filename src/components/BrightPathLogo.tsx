import React from 'react';

interface BrightPathLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

const BrightPathLogo: React.FC<BrightPathLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Stylized B with path and burst effect */}
      <div className="relative">
        <div className={`font-black ${sizeClasses[size]} text-[#FFD700] relative`}>
          <span className="relative z-10">B</span>
          {/* Winding path through the B */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width={size === 'sm' ? '20' : size === 'md' ? '28' : '36'}
              height={size === 'sm' ? '20' : size === 'md' ? '28' : '36'}
              viewBox="0 0 24 24"
              className="text-[#002B5C]"
            >
              <path
                d="M6 8c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4zm8 8c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4z"
                fill="currentColor"
                opacity="0.3"
              />
              <path
                d="M8 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm8 8c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
          {/* Burst effect */}
          <div className="absolute -top-1 -right-1">
            <div className="relative">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 bg-[#FFD700] opacity-80"
                  style={{
                    height: size === 'sm' ? '6px' : size === 'md' ? '8px' : '12px',
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: 'bottom center',
                    left: '50%',
                    bottom: '0',
                    marginLeft: '-0.5px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Text part */}
      <div className="flex flex-col">
        <div className={`font-bold ${sizeClasses[size]} text-[#FFD700] leading-tight tracking-wide`}>
          BRIGHTPATH
        </div>
        <div className={`font-semibold ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-2xl'} text-white leading-tight tracking-wider`}>
          BILLBOARDS
        </div>
        {showTagline && (
          <div className={`${size === 'sm' ? 'text-xs' : 'text-sm'} text-[#FFD700] opacity-90 mt-1 tracking-widest`}>
            YOUR VOICE IN THE COMMUNITY
          </div>
        )}
      </div>
    </div>
  );
};

export default BrightPathLogo;
