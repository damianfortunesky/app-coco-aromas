import React from 'react';

interface UserAvatarProps {
  src: string,
  alt?: string, 
  className?: string 
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt='Avatar Usuario', className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default UserAvatar;
