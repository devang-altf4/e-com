import React, { useState } from 'react';

const SearchBar = ({ searchTerm = '', onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };

  return (
    <div className="flex items-center justify-center relative">
      {/* Main Search Container */}
      <div 
        className={`relative transition-all duration-300 w-full max-w-[590px]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Border Container for Input */}
        <div className="relative p-[2px] rounded-[12px] animated-border">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-[48px] bg-[#0a0a0a] border-none rounded-[10px] text-white text-base pl-[55px] pr-[55px] focus:outline-none placeholder-[#6b7280] placeholder:text-base relative z-10"
          />

          {/* Search Icon */}
          <div className="absolute left-5 top-[14px] w-5 h-5 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8" stroke="url(#search)" />
              <line x1="22" y1="22" x2="16.65" y2="16.65" stroke="url(#searchl)" />
              <defs>
                <linearGradient id="search" gradientTransform="rotate(50)">
                  <stop offset="0%" stopColor="#f8e7f8" />
                  <stop offset="50%" stopColor="#b6a9b7" />
                </linearGradient>
                <linearGradient id="searchl">
                  <stop offset="0%" stopColor="#b6a9b7" />
                  <stop offset="50%" stopColor="#837484" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Input Mask - Only hide placeholder when user types */}
          {!searchTerm && (
            <div 
              className="absolute top-[18px] left-[60px] w-[160px] h-[18px] pointer-events-none z-15"
              style={{
                background: 'linear-gradient(90deg, transparent, #0a0a0a 30%, #0a0a0a)'
              }}
            />
          )}
        </div>

        {/* Outer Glow Effect */}
        <div 
          className={`absolute inset-0 rounded-[12px] blur-[20px] opacity-60 transition-opacity duration-300 ${
            isFocused || isHovered ? 'opacity-80' : 'opacity-40'
          }`}
          style={{
            background: `conic-gradient(
              #000,
              #402fb5 10%,
              #000 25%,
              #000 50%,
              #cf30aa 65%,
              #000 80%
            )`,
            animation: 'spin-glow s linear infinite',
            zIndex: -1
          }}
        />
      </div>

      {/* Enhanced CSS for input field animations */}
      <style jsx>{`
        .animated-border {
          position: relative;
          background: conic-gradient(
            from 0deg,
            #1a1a1a,
            #402fb5 15%,
            #1a1a1a 30%,
            #1a1a1a 50%,
            #cf30aa 65%,
            #1a1a1a 80%,
            #1a1a1a
          );
          animation: rotate-border 6s linear infinite;
          border-radius: 12px;
        }

        .animated-border:hover {
          background: conic-gradient(
            from 0deg,
            #2a2a2a,
            #5040d5 15%,
            #2a2a2a 30%,
            #2a2a2a 50%,
            #df40ca 65%,
            #2a2a2a 80%,
            #2a2a2a
          );
          animation: rotate-border 4s linear infinite;
        }

        @keyframes rotate-border {
          0% {
            background: conic-gradient(
              from 0deg,
              #1a1a1a,
              #402fb5 15%,
              #1a1a1a 30%,
              #1a1a1a 50%,
              #cf30aa 65%,
              #1a1a1a 80%,
              #1a1a1a
            );
          }
          25% {
            background: conic-gradient(
              from 90deg,
              #1a1a1a,
              #402fb5 15%,
              #1a1a1a 30%,
              #1a1a1a 50%,
              #cf30aa 65%,
              #1a1a1a 80%,
              #1a1a1a
            );
          }
          50% {
            background: conic-gradient(
              from 180deg,
              #1a1a1a,
              #402fb5 15%,
              #1a1a1a 30%,
              #1a1a1a 50%,
              #cf30aa 65%,
              #1a1a1a 80%,
              #1a1a1a
            );
          }
          75% {
            background: conic-gradient(
              from 270deg,
              #1a1a1a,
              #402fb5 15%,
              #1a1a1a 30%,
              #1a1a1a 50%,
              #cf30aa 65%,
              #1a1a1a 80%,
              #1a1a1a
            );
          }
          100% {
            background: conic-gradient(
              from 360deg,
              #1a1a1a,
              #402fb5 15%,
              #1a1a1a 30%,
              #1a1a1a 50%,
              #cf30aa 65%,
              #1a1a1a 80%,
              #1a1a1a
            );
          }
        }

        @keyframes spin-glow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Focus state enhancement */
        input:focus + .animated-border {
          animation: rotate-border 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
