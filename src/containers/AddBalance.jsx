import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import * as userAction from '../redux/actions/userAction';
import Button from '../components/Button';

const useStyles = makeStyles(theme => ({
  addButton: {
    marginTop: 10,
  },
}));
const AddBalance = props => {
  const [amount, setAmount] = useState('');
  const classes = useStyles();
  const handleChange = e => {
    setAmount(e.target.value);
  };

  // Keep a copy of users and updating the yoyoBalance
  const addBalance = () => {
    const updatedUsers = JSON.parse(JSON.stringify(props.users));
    updatedUsers.map(user => {
      user.yoyoBalance = parseInt(user.yoyoBalance) + parseInt(amount);
      return user;
    });
    if (updatedUsers[0].yoyoBalance >= 0) {
      props
        .updateUsers(updatedUsers[0])
        .then(() => {
          console.log('Successful');
        })
        .catch(error => {
          console.log('Failed');
        });
    } else {
      console.log('Insufficient YoYoBalance');
    }
  };
  return (
    <>
      <div>
        <label>YoYo Amount</label>
        <div>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={amount}
          />
        </div>
        <div className={classes.addButton}>
          <Button label="Add Balance" handleClick={addBalance} />
        </div>
      </div>
    </>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AddBalance);
