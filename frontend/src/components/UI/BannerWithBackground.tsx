import React from 'react';

interface BannerWithBackgroundProps {
  backgroundImage: string;
  text: string;
  height?: string; // Altura personalizada
}

const BannerWithBackground: React.FC<BannerWithBackgroundProps> = ({
  backgroundImage,
  text,
  height = "h-[220px]", // Altura por defecto
}) => {
  return (
    <div
      className={`w-full bg-center bg-cover ${height}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-orange-700 bg-opacity-80 text-white text-center flex items-center justify-center h-full">
        <p className="text-xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default BannerWithBackground;
