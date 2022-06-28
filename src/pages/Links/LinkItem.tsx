import ListItem from '@mui/material/ListItem';
/* *** */
import ListLink from './ListLink';
import FontIcon from '@components/FontIcon';

interface LinkItemProps {
  data: {
    name: string,
    url: string,
  },
  cat: string,
  isLast: boolean,
}

const LinkItem = ({ data, isLast }: LinkItemProps) => {
  const { name, url } = data;

  return (
    <ListItem divider={!isLast}>
      <ListLink href={url} target="_blank" rel="noopener noreferrer">
        <FontIcon name="link" />
        <span className="title">{name}</span>
      </ListLink>
    </ListItem>
  );
};

export default LinkItem;
