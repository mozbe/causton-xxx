import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface DialogueProps {
  current: {
    name: string;
  };
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const ConfirmationDialogue = ({ current, open, onClose, onDelete }: DialogueProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm action</DialogTitle>
      <DialogContent>
        <DialogContentText>{`Are you sure you want to delete the link to ${current.name}?`}</DialogContentText>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onDelete} autoFocus variant="outlined">
            I&rsquo;m sure
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialogue;
