import { useState } from 'react';
import LightboxComponent from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface LightboxProps {
  images: string[];
  children: (props: { open: (index: number) => void }) => React.ReactNode;
}

export const Lightbox = ({ images, children }: LightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  const open = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {children({ open })}
      <LightboxComponent
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </>
  );
};
