import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSnackbar } from 'notistack';
import ListItem from '@mui/material/ListItem';
/* *** */
import { sidebarState } from '@state/sidebar';
import ConfirmationDialogue from '@components/ConfirmationDialogue';
import ContextMenu from '@components/ContextMenu';
import ListLink from './ListLink';

interface LinkItemProps {
  data: {
    name: string,
    url: string,
  },
  cat: string,
  isLast: boolean,
}

const LinkItem = ({ data, cat, isLast }: LinkItemProps) => {
  const { name, url } = data;
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const contextOpen = Boolean(anchorEl);
  const setSidebar = useSetRecoilState(sidebarState);
  const { enqueueSnackbar } = useSnackbar();
  const current = { ...data, cat };

  function handleContextMenu(event: React.MouseEvent){
    const target = event.currentTarget;
    event.preventDefault();

    if (target) {
      setAnchorEl(target);
    }
  }

  function handleCloseContextMenu(){
    setAnchorEl(null);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  function handleItemClick(event: React.MouseEvent, type: string)  {
    event.preventDefault();

    if (type === 'edit') {
      setSidebar({ active: true, type: 'link', current });
      handleCloseContextMenu();
    }

    if (type === 'delete') {
      handleCloseContextMenu();
      setDialogOpen(true);
    }
  }

  function handleDelete() {
    handleCloseDialog();

    setTimeout(() => {
      enqueueSnackbar(`Successfully deleted the link ${current.name}`, { variant: 'success' });
    }, 1000);
  }

  const ListItemStyle = {
    backgroundColor: anchorEl ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
  };

  return (
    <ListItem onContextMenu={handleContextMenu} divider={!isLast} sx={ListItemStyle}>
      <ContextMenu anchor={anchorEl} open={contextOpen} onClick={handleItemClick} onClose={handleCloseContextMenu} />
      <ConfirmationDialogue open={dialogOpen} onClose={handleCloseDialog} onDelete={handleDelete} current={current} />
      <ListLink href={url} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-link" /> {name}
      </ListLink>
    </ListItem>
  );
};

export default LinkItem;
