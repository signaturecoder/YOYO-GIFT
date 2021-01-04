import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import * as userAction from '../redux/actions/userAction';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  close: {
    padding: theme.spacing(0.5),
  },
  shareButton: {
    marginTop: 10,
  },
}));
const LoginForm = props => {
  const classes = useStyles();
  const [values, setValues] = useState('');
  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const updatedUsers = JSON.parse(JSON.stringify(props.users));
    updatedUsers.map(user => {
      if (user.email === values.email && user.password === values.password) {
        user.isLoggedIn = true;
        sessionStorage.setItem('token', 'fjsdkk');
        props.history.push('/');
      } else {
        console.log('Mismatch Credentials');
      }
      return user;
    });

    if (updatedUsers[0].isLoggedIn === true) {
      props
        .updateUsers(updatedUsers[0])
        .then(() => {
          console.log('Successful log In');
        })
        .catch(error => {
          console.log('Failed');
        });
    } else {
      console.log('Not Logged In');
    }
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <form noValidate>
          <div className="field">
            <label className="label">Email Address</label>
            <div>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ''}
                required
              />
            </div>
          </div>
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classes.shareButton}
          >
            Login
          </Button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
