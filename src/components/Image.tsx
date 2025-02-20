import { useState, useEffect, useRef } from 'react';
import { optimizeImage, generateSrcSet, generateImageSizes } from '../utils/imageLoader';
import PropTypes from 'prop-types';

interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'sizes'> {
  src: string;
  alt: string;
  className?: string;
  breakpoints?: { min: number; max?: number; width: string }[];
  priority?: boolean;
}

const Image = ({
  src,
  alt,
  className = '',
  breakpoints = [
    { min: 1280, width: '100vw' },
    { min: 768, max: 1279, width: '50vw' },
    { min: 0, max: 767, width: '100vw' },
  ],
  priority = false,
  ...props
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!priority && imgRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px',
        }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    } else {
      setIsInView(true);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const optimizedSrc = optimizeImage(src);
  const srcSet = generateSrcSet(src);
  const sizesAttr = generateImageSizes(breakpoints);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Main Image */}
      {(priority || isInView) && (
        <img
          ref={imgRef}
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={sizesAttr}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  breakpoints: PropTypes.arrayOf(
    PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number,
      width: PropTypes.string.isRequired
    })
  ),
  priority: PropTypes.bool
};

export default Image; 