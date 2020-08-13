import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
  }
})
);

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography className={classes.root}>
          Home
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;