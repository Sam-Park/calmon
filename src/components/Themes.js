
import { makeStyles } from "@material-ui/core/styles";

const  buttonStyle = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #8559A0 30%, #8559A0 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '3px 5px 2px rgba(133, 89, 160, .3)',
    color: 'white',
    width: '20vw',
    minWidth: '140px',
    maxWidth: '300px',
    height: 38,
    padding: '10px 30px',
    [theme.breakpoints.down("xs")]: {
      margin: '10px !important',
    },
    '&:hover': {
      background: 'linear-gradient(45deg, #8559A0 30%, #c383eb 90%)',
      boxShadow: '3px 5px 2px rgba(133, 89, 160, .5)',
    },
    '&:focus': {
      background: '#4a1b9a',
      boxShadow: '3px 5px 2px rgba(133, 89, 160, .5)',
    },
  },
  btngrp : {
    justifyContent: 'space-around',
    width: '100vw',
    [theme.breakpoints.down("xs")]: {
      flexDirection: 'column', 
      alignItems: 'center',
      margin: '10px',
      justifyContent: 'space-between'
    },
  },
  
}));

export default buttonStyle