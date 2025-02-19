import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';


const blue =' hsva(213,32%,21%,1)'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: blue,
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Styled with Hook API</Button>;
}