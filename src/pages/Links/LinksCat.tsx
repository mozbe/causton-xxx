import { collection, query, orderBy, where } from 'firebase/firestore';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MoreVertIcon from '@mui/icons-material/MoreVert';
/* *** */
import FontIcon from '@components/FontIcon';
import LinkItem from './LinkItem';

interface LinksCatProps {
  item: {
    name: string;
    tag: string;
  }
}

const LinksCat = ({ item }: LinksCatProps) => {
  const { name, tag } = item;
  const firestore = useFirestore();
  const ref = collection(firestore, 'links');
  const refQuery = query(ref, where('cat', '==', tag), orderBy('name'));
  const { data: links } = useFirestoreCollectionData(refQuery, { idField: 'id' });

  if (!links || links?.length < 1) {
    return null;
  }

  return (
    <Box sx={{ width: { xs: '100%', lg: 240 }, marginBottom: '10px' }} key={tag}>
      <Card>
        <CardHeader
          title={name}
          action={<IconButton><MoreVertIcon /></IconButton>}
          titleTypographyProps={{ variant:'h5' }}
          sx={{ p: '10px 20px'}}
          avatar={<Avatar><FontIcon icon={tag} /></Avatar>}
        />
        <CardContent sx={{ paddingTop: 0, paddingBottom: '0 !important' }}>
          <List>
            {links?.map((link:any, i) => {
              const isLast = i === Object.values(links).length-1;

              return (
                <LinkItem key={link.id} data={link} cat={tag} isLast={isLast} />
              );
            })}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LinksCat;
