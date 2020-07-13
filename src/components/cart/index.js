import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { add } from '../../store/cart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



// const LightTooltip = withStyles((theme) => ({
//     tooltip: {
//       backgroundColor: theme.palette.common.white,
//       color: 'rgba(0, 0, 0, 0.87)',
//       boxShadow: theme.shadows[1],
//       fontSize: 11,
//       float : 'right',
//     },
//   }))(Tooltip);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 200,
      position: 'relative',
      right: -500,
      top :50,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
 
const Cart = (props) => {
    const classes = useStyles();
    console.log('cart ----->',props)
    return (
        // <>
        // <List component="nav" aria-label="main mailbox folders" className={classes.root}>
         props.cart.map(ele => {
         return(  
             
            
            <ListItem button className={classes.root}>
            
              <ListItemText primary={ele.name} />
            </ListItem>  
            

           
         )
     })
    //  </List>
    //  </>
    );
  };

  const mapStateToProps = (state) => {
      console.log('state in cart cart------>',state)
    return { cart : state.cart.cart };
  };



  const mapDispatchToProps = { add };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);


