import { useMediaQuery } from 'react-responsive';

const useTablet = () => {
  return useMediaQuery({ query: '(max-width: 960px)' });
};

export default useTablet;
