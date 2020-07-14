import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red'
  }
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <h1>here</h1>
  );
};

export default MainLayout;