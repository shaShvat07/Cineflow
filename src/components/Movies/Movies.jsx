/* eslint-disable no-console */
import React from 'react';
// import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  console.log('Movies');
  const { data } = useGetMoviesQuery();
  console.log(data);

  // console.log(data);
  return (
    <div>Movies</div>
  );
};

export default Movies;
