import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const Main = (props) => {
    return (
     props.products.map(ele=>{
         return(
        <LightTooltip title="Add">
        <Button>{ele.name} {ele.category} {ele.price}</Button>
        </LightTooltip>
         )
     })
    );
  };

  const mapStateToProps = (state) => {
      console.log('state------>',state)
    let state2 = state.categories.products.filter( ele => ele.category === state.categories.activeCategory);
    return { products: state2 };
  };


  export default connect(mapStateToProps)(Main);

