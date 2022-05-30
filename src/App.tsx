import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { AuthProvider, useInitFirestore, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { ErrorBoundary } from 'react-error-boundary';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
/* *** */
import { routes } from '@routes/routes';
import { loadingState } from '@state/loading';
import { sidebarState } from '@state/sidebar';
import { globals } from '@styles/globals';
import { theme } from '@styles/theme';
import ErrorFallback from '@components/ErrorFallback';
import Sidebar from '@components/Sidebar';

const globalStyles = <GlobalStyles styles={globals} />;

function App() {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const routeRoutes = useRoutes(routes);
  const sidebar = useRecoilValue(sidebarState);
  const setLoading = useSetRecoilState(loadingState);

  const { status, data: firestoreInstance } = useInitFirestore(async (firebaseApp) => {
    const db = initializeFirestore(firebaseApp, {});
    return db;
  });

  const ready = status === 'success';

  useEffect(() => {
    setLoading(true);

    if (ready) {
      setLoading(false);
    }
  }, [status]);

  if (!ready) return null;

  return (
    <AuthProvider sdk={auth}>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <FirestoreProvider sdk={firestoreInstance}>
          <ThemeProvider theme={theme}>
            {globalStyles}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {routeRoutes}
            </ErrorBoundary>
            <Sidebar active={sidebar.active} current={sidebar.current} />
          </ThemeProvider>
        </FirestoreProvider>
      </SnackbarProvider>
    </AuthProvider>
  );
}

export default App;
