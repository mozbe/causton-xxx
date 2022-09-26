import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export function SignOut({ auth }: { auth: any}) {
  const navigate = useNavigate();
  const signOut = (a: any) => a.signOut()
    .then(() => navigate('/login'));

  return (
    <Button onClick={() => signOut(auth)} variant="text" size="small">Log out</Button>
  );
}
