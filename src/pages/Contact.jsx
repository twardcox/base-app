import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {

  }
})
);

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography>
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;