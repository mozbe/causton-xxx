import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export function SignIn({ auth }: { auth: any}) {
  const navigate = useNavigate();
  const signIn = async (a: Auth) => {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(a, provider).then(() =>  navigate('/'));
  };

  return (
    <Button onClick={() => signIn(auth)} size="small" variant="text">Log in</Button>
  );
}
