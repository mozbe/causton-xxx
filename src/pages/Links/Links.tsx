import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import { ErrorBoundary } from 'react-error-boundary';
import Grid from '@mui/material/Grid';

/* *** */
import { groupBy } from '@helpers/groupBy';
import { loadingState } from '@state/loading';
import { withAuth } from '@components/Auth';
import ErrorFallback from '@components/ErrorFallback';
import LinksColumn from './LinksColumn';

const Links = () => {
  const [categories, setCategories] = useState([]);
  const setLoading = useSetRecoilState(loadingState);
  const firestore = useFirestore();
  const ref = collection(firestore, 'categories');
  const refQuery = query(ref, orderBy('col', 'asc'));
  const { status, data } = useFirestoreCollectionData(refQuery, { idField: 'id' });

  useEffect(() => {
    setLoading(true);

    if (status === 'success') {
      const cats = groupBy(data.sort((a, b) => a.order - b.order), 'col');
      setCategories(cats);
      setLoading(false);
    }
  }, [status]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Grid container spacing={2}>
        {Object.keys(categories).map((c:any, i: number) => (
          <LinksColumn key={i} data={categories[c]} />
        ))}
      </Grid>
    </ErrorBoundary>
  );
};

export default withAuth(Links);
