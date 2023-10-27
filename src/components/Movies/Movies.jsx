/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import React from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

const Movies = () => {
  console.log('Movies');
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies that match your name.
          <br />
          Please Search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'An error has occured.';
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
