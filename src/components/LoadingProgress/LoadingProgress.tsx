import { LinearProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '48px',
  width: '100%',
  left: 0,
  transition: 'opacity 300ms',
};

const LoadingProgress = ({ loading }: { loading: boolean }) => {
  return (
    <LinearProgress sx={{...style, opacity: loading ? 1 : 0}} />
  );
};

export default LoadingProgress;
