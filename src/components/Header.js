import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const navStyles = makeStyles((theme) => ({
    nav: {
      flexGrow: 1,
    },
    appBar: {
        background: 'linear-gradient(45deg, #8559A0 30%, #c383eb 90%)',
    },
    title: {
      flexGrow: 1,
    },
  }));

  export default function Header() {
      const classes = navStyles();
    return (
        <div className={classes.nav}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              Activities
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}


