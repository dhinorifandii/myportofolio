"use client";

import { forwardRef } from 'react';

// Gunakan forwardRef untuk meneruskan ref dari komponen induk ke elemen <audio>
const MusicPlayer = forwardRef<HTMLAudioElement>((props, ref) => {
  return (
    <audio 
      ref={ref} 
      src="/audio/background_music.mp3" 
      loop 
    />
  );
});
MusicPlayer.displayName = 'MusicPlayer'; // Tambahkan displayName untuk debugging

export default MusicPlayer;