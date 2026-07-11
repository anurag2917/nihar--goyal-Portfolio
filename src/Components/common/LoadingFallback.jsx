import React from 'react';

const LoadingFallback = () => {
  return (
    <div className="w-full min-h-[250px] flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-[#ff5a00] rounded-full animate-spin"></div>
        <span className="text-xs text-gray-400 font-sans tracking-widest uppercase">Loading Section...</span>
      </div>
    </div>
  );
};

export default LoadingFallback;
