import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { select } from '../../store/catagories';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { add } from '../../store/cart'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Main = (props) => {
    const classes = useStyles();
    return (
     props.products.map(ele=>{
         return(
            <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {ele.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary"  onClick={() => props.add(ele)}>
                Add To Cart
              </Button>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>    
        // <LightTooltip title="Add">
        // <Button>{ele.name} {ele.category} {ele.price}</Button>
        // </LightTooltip>
         )
     })
    );
  };

  const mapStateToProps = (state) => {
      console.log('state------>',state)
    let state2 = state.categories.products.filter( ele => ele.category === state.categories.activeCategory);
    return { products: state2 };
  };

  const mapDispatchToProps = { select,add };
  export default connect( mapStateToProps ,mapDispatchToProps)(Main);

