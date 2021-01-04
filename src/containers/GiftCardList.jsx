import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Cards from './Card';

const useStyles = makeStyles({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const GiftCardList = props => {
  const [giftCardList, setGiftCardList] = useState({});

  const classes = useStyles();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_FRONT_END_URL}giftCard/${props.match.params.id}`
      )
      .then(res => {
        const result = res.data;
        setGiftCardList(result);
      });
  }, [props.match.params.id]);

  return (
    <div className={classes.flexContainer}>
      <Cards data={giftCardList} />
    </div>
  );
};

export default GiftCardList;
