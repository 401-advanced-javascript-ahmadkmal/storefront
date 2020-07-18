import React , { useEffect }from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { select } from '../../store/catagories';
import * as actions from '../../store/catagories'




const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);
const Main = (props) => {
  useEffect(() => {
    props.get();
    props.getCat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
    return (
     props.categories.map(ele=>{
         return(    
            <LightTooltip title={ele.name} onClick={() => props.select(ele.name)} >
            <Button>{ele.name}</Button>
            </LightTooltip>
         )
     })
    );
  };

  const mapStateToProps = (state) => {
      console.log('state------>',state)
    return { categories: state.categories.categories };
  };


  const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getProducts()),
    getCat: () => dispatch(actions.getCategories()),
    select:(name)=>dispatch(actions.select(name)),
});

  // const mapDispatchToProps = { select };
  export default connect(mapStateToProps, mapDispatchToProps)(Main);


