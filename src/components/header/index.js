import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    main: red[400],
  },
  title: {
    flexGrow: 1,
  },
}));

 function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR STORE 
          </Typography>
          <Button color="inherit">cart ({0})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
    console.log('state------>',state)
  return {  };
};
export default connect(mapStateToProps)(ButtonAppBar);
