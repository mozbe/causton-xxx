import Grid from '@mui/material/Grid';
/* *** */
import LinksCat from './LinksCat';

interface ItemProps {
  name: string;
  tag: string;
}

const LinksColumn = ({ data }: { data: any}) => (
  <Grid item xs={12} md={3}>
    {data?.map((item: ItemProps) => {
      const { tag } = item;

      return (
        <LinksCat item={item} key={tag} />
      );
    })}
  </Grid>
);

export default LinksColumn;
