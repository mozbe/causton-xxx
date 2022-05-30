import { LinearProgress } from '@mui/material';

const progressStyle = {
  position: 'absolute',
  top: '48px',
  width: '100%',
  left: 0,
  transition: 'opacity 300ms',
};

const LoadingProgress = ({ loading }: { loading: boolean }) => {
  return (
    <LinearProgress sx={{...progressStyle, opacity: loading ? 1 : 0}} />
  );
};

export default LoadingProgress;
