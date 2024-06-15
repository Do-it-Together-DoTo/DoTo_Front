import { useMediaQuery } from 'react-responsive';

export const useDeviceSize = () => {
  const isDesktop = useMediaQuery({ minWidth: 640 });
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return { isDesktop, isMobile };
};
