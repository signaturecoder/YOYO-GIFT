import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

import * as userAction from '../redux/actions/userAction';
import Button from '../components/Button';
import ShareGiftCard from './ShareGiftCard';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 40,
    boxShadow: ' 5px 5px 15px 5px #888888',
  },
  media: {
    height: 140,
  },
  removeLine: {
    textDecoration: 'none',
    color: 'white',
  },
});

function Cards(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [mail, setMail] = useState(false);

  let history = useHistory();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    if (message === 'Insufficient Balance, Add Money')
      history.push('/addBalance');
    setOpen(false);
  };

  const handleReedem = () => {
    const updatedUsers = JSON.parse(JSON.stringify(props.users));
    if (updatedUsers[0].isLoggedIn === true) {
      updatedUsers.map(user => {
        user.yoyoBalance =
          parseInt(user.yoyoBalance) - parseInt(props.data.cardAmount);
        return user;
      });
      if (updatedUsers[0].yoyoBalance >= 0) {
        props
          .updateUsers(updatedUsers[0])
          .then(() => {
            console.log('Successful');
            setMessage('Successful Reedem');
          })
          .catch(error => {
            console.log('Failed');
          });
      } else {
        console.log('Insufficient YoYoBalance');
        setMessage('Insufficient Balance, Add Money');
      }
      setOpen(true);
    } else {
      history.push('/login');
    }
  };

  const handleBuy = () => {
    const updatedUsers = JSON.parse(JSON.stringify(props.users));
    if (sessionStorage.getItem('token')) {
      updatedUsers.map(user => {
        user.yoyoBalance =
          parseInt(user.yoyoBalance) - parseInt(props.data.cardAmount);
        return user;
      });
      if (updatedUsers[0].yoyoBalance >= 0) {
        props
          .updateUsers(updatedUsers[0])
          .then(() => {
            console.log('Successful');
            setMessage('Successful Bought');
            setMail(true);
          })
          .catch(error => {
            console.log('Failed');
          });
      } else {
        console.log('Insufficient YoYoBalance');
        setMessage('Insufficient Balance, Add Money');
      }
      setOpen(true);
    } else {
      history.push('/login');
    }
  };
  return (
    <>
      {/* showing card details */}

      <Card className={classes.card}>
        <CardActionArea>
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
              <Box textAlign="left">Category : {props.data.category}</Box>
              <Box textAlign="left">Price : {props.data.cardAmount}</Box>
              <Box textAlign="left">Discount : {props.data.cardDiscount}</Box>
              <Box textAlign="left">
                Rating :
                <Rating name="read-only" value={props.data.rating} readOnly />
              </Box>
              <Box textAlign="left">Comments : {props.data.comments}</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button label="Reedem" handleClick={handleReedem} />

          <Button label="Buy And Share" handleClick={handleBuy} />
        </CardActions>
      </Card>
      {mail ? <ShareGiftCard details={props.data} /> : <></>}
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUsers: user => dispatch(userAction.updateUsers(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
