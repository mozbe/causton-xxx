import { Alert, AlertTitle, Stack } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

function ErrorFallback({error, resetErrorBoundary}: FallbackProps) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <pre>{error.message}</pre>
        {resetErrorBoundary && <button onClick={resetErrorBoundary}>Try again</button>}
      </Alert>
    </Stack>
  );
}

export default ErrorFallback;
