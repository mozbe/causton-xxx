import {
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from '@mui/material';

interface ContextMenuProps {
  anchor: null | Element | ((element: Element) => Element);
  open: boolean,
  onClick: (e: React.MouseEvent, p: string) => void;
  onClose: () => void;
}

const ContextMenu = ({ anchor, open, onClick, onClose }: ContextMenuProps)=> (
  <Menu anchorEl={anchor} open={open} onClose={onClose}>
    <MenuList sx={{ width: '208px' }}>
      <MenuItem onClick={e => onClick(e, 'edit')}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>
      <MenuItem onClick={e => onClick(e, 'delete')}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </MenuList>
  </Menu>
);

export default ContextMenu;
