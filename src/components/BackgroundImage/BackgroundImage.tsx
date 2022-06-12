import { useEffect, useState } from 'react';
import { styled } from '@mui/material';
/* *** */
import images from './images';

interface ImgProps {
  isloading?: string;
}

const Img = styled('img')`
  height: 100%;
  left: 0;
  min-height: 100%;
  object-fit: cover;
  opacity: ${(props: ImgProps) => props.isloading === 'mounted' ? 1 : 0 };
  position: fixed;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
  z-index: -1;
`;

const BackgroundImage = () => {
  const [background, setBackground] = useState('');
  const [loadingState, setLoadingState] = useState('loading');

  useEffect(() => {
    const image = images[Math.floor(Math.random() * images.length)];
    // const background = `https://cdn.mozbe.com/earth/${image}`;
    const background = `/images/earth/${image}`;

    setBackground(background);
  }, []);

  return (
    <Img
      src={background}
      alt="Background"
      onLoad={() => setLoadingState('mounted')}
      isloading={loadingState}
    />
  );
};

export default BackgroundImage;
