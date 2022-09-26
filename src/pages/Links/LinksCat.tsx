import { collection, query, orderBy, where } from 'firebase/firestore';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
/* *** */
import FontIcon from '@components/FontIcon';
import LinkItem from './LinkItem';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
  };
}

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
  const refQuery = query(ref, where('cat', '==', name.toLowerCase()), orderBy('name'));
  const { data: links } = useFirestoreCollectionData(refQuery, { idField: 'id' });

  if (!links || links?.length < 1) {
    return null;
  }

  return (
    <Box sx={{ width: { xs: '100%', lg: 240 }, marginBottom: '20px' }} key={tag}>
      <Card>
        <CardHeader
          title={name}
          titleTypographyProps={{ variant:'h5' }}
          avatar={<Avatar {...stringAvatar(tag)}><FontIcon name={tag} /></Avatar>}
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
