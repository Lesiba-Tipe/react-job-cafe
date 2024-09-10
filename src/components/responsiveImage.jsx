import React, { useEffect, useState } from 'react';

const ResponsiveImage = ({ mobileSrc, tabletSrc, desktopSrc, alt }) => {

    const getDeviceSize = () => {
        const width = window.innerWidth;
        if (width < 768) {
          return 'mobile';
        } else if (width < 1200) {
          return 'tablet';
        } else {
          return 'desktop';
        }
      };

    const [deviceSize, setDeviceSize] = useState(getDeviceSize());

    useEffect(() => {
        const handleResize = () => {
        setDeviceSize(getDeviceSize());
        };

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    let src;
    if (deviceSize === 'mobile') {
        src = mobileSrc;
    } else if (deviceSize === 'tablet') {
        src = tabletSrc;
    } else {
        src = desktopSrc;
    }

  return <img src={src} alt={alt} />;
};

export default ResponsiveImage;
