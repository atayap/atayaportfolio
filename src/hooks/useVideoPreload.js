import { useState, useEffect } from 'react';

export const useVideoPreload = (videoSrc) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [videoElement, setVideoElement] = useState(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'auto';
    video.muted = true;
    video.playsInline = true;
    
    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
      setVideoElement(video);
    };

    const handleError = () => {
      console.warn('Video failed to load, using fallback');
      setIsVideoReady(true); // Tetap lanjut dengan fallback
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('error', handleError);

    // Force load video
    video.load();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc]);

  return { isVideoReady, videoElement };
};