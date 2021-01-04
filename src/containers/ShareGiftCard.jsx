import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useForm from './useForm';
import validate from './ValidateForm';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  heading: {
    color: 'blue',
  },
  close: {
    padding: theme.spacing(0.5),
  },
  shareButton: {
    marginTop: 10,
  },
}));
const ShareGiftCard = props => {
  const classes = useStyles();
  const [isValidate, setIsValidate] = useState(false);

  // use of custom hook, useForm
  const { values, errors, handleChange, handleSubmit } = useForm(
    share,
    validate
  );

  function share() {
    setIsValidate(true);
  }
  const handleMail = () => {
    axios
      .get(
        `${process.env.REACT_APP_BACK_END_URL}${values.email}/${props.details.vendorName}/${props.details.cardAmount}`
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <h1 className={classes.heading}>Share to friends...</h1>
        <form noValidate>
          <div className="field">
            <label className="label">Name</label>
            <div>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name || ''}
                required
              />
            </div>
            {errors.name && <p>{errors.name}</p>}
          </div>
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
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          {isValidate ? (
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleMail}
              className={classes.shareButton}
            >
              Share
            </Button>
          ) : (
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.shareButton}
            >
              Validate
            </Button>
          )}
        </form>
      </div>
    </>
  );
};

export default ShareGiftCard;
