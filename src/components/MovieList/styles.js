/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eol-last */

import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movieContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));