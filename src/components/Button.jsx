import React from 'react';
import Button from '@material-ui/core/Button';
function Buttons(props) {
  return (
    <Button
      className="button"
      size="small"
      color="primary"
      variant="contained"
      onClick={props.handleClick}
    >
      {props.label}
    </Button>
  );
}

export default Buttons;
