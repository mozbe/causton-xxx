import { styled } from '@mui/material';
import Link from '@mui/material/Link';

const ListLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 0;
  font-size: 11px;
  height: inherit;
  text-decoration: none;

  .material-icons {
    font-size: 14px;
    margin-left: -16px;
    margin-right: 5px;
    opacity: 0;
    pointer-events: none;
    transition: all 300ms;
  }

  &:hover {
    .material-icons {
      margin-left: 0;
      opacity: 1;
    }
  }
`;

export default ListLink;
