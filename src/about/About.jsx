import React from 'react';
import {makeStyles, Grid, Typography} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {

  }
})
)

const About = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Typography>
          About
        </Typography>
      </Grid>
    </Grid>
  )
}

export default About;