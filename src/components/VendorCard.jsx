import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import Button from './Button';

const useStyles = makeStyles({
  card: {
    width: 345,
    height: 420,
    margin: 50,
    boxShadow: ' 5px 5px 15px 5px #888888',
  },
  media: {
    paddingTop: '56.25%', // 16:9
  },

  removeLine: {
    textDecoration: 'none',
  },
});

export default function VendorCards(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.data.vendorName}
      </Typography>
      <CardMedia
        className={classes.media}
        image={props.data.cardImage}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.data.cardName}
        </Typography>
        <Typography variant="h6" component="h6">
          Category : {props.data.giftCategory}
        </Typography>
        <Typography variant="h6" component="h6">
          Price : {props.data.cardAmount}
        </Typography>
        <Typography variant="h6" component="h6">
          Discount : {props.data.cardDiscount}
        </Typography>
      </CardContent>

      <CardActions>
        <Link to={'/giftCard/' + props.data.id} className={classes.removeLine}>
          <Button label="Explore" />
        </Link>
      </CardActions>
    </Card>
  );
}
