import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export function NotLoggedIn() {
  return (
    <Card>
      <CardContent sx={{ paddingTop: '20px'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Please login to access the site
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotLoggedIn;
