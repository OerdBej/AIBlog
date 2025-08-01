import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-blue-500 border-gray-300/50"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-t-transparent border-blue-500/30 animation-delay-150"></div>
      </div>
    </div>
  );
};

export default Loading;
