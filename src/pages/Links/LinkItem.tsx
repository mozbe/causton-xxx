import ListItem from '@mui/material/ListItem';
/* *** */
import ListLink from './ListLink';
import FontIcon from '@components/FontIcon';
import { BrandingWatermark, CatchingPokemonOutlined } from '@mui/icons-material';

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
  break;CatchingPokemonOutlined;BrandingWatermark;
  return (
    <ListItem sx={{ padding: 0, height: '30px', ...(!isLast && {borderBottom: '1px solid rgba(0,0,0,.05)'})}}>
      <ListLink href={url} target="_blank" rel="noopener noreferrer">
        <FontIcon name="link" />
        <span className="title">{name}</span>
      </ListLink>
    </ListItem>
  );
};

export default LinkItem;
