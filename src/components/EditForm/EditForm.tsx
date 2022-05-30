import { useDatabase, useDatabaseObjectData } from 'reactfire';
import { ref } from 'firebase/database';
import { useSnackbar } from 'notistack';
import AbcIcon from '@mui/icons-material/Abc';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';

const fields = [{
  id: 'name',
  label: 'Name',
  icon: <AbcIcon />,
},
{
  id: 'url',
  label: 'URL',
  icon: <LinkIcon />,
}];

interface EditFormProps {
  current: {
    id?: string;
    name?: string;
  },
  onClose: () => void;
}

const EditForm = ({ current, onClose }: EditFormProps) => {
  const { id, name } = current;
  const { enqueueSnackbar } = useSnackbar();
  const db = useDatabase();
  const linkRef = ref(db,`links/${id}`);
  const { data }: { data: any } = useDatabaseObjectData(linkRef, { idField: 'id' });

  function handleSave() {
    onClose();

    setTimeout(() => {
      enqueueSnackbar(`Successfully saved the link: ${name}`, { variant: 'success' });
    }, 1000);
  }

  return (
    <List subheader={<ListSubheader>Edit link</ListSubheader>}>
      {data && fields.map(field => (
        <ListItem key={field.id}>
          <ListItemIcon>{field.icon}</ListItemIcon>
          <TextField id={field.id} label={field.label} defaultValue={data[field.id]} variant="outlined" fullWidth />
        </ListItem>
      ))}

      <ListItem>
        <Button variant="text" sx={{ marginLeft: 'auto' }} onClick={onClose}>Cancel</Button>
        <Button variant="contained" disableElevation onClick={handleSave} color="primary">Save</Button>
      </ListItem>
    </List>
  );
};

export default EditForm;
