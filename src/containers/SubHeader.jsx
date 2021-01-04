import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
  getCategoryFilter,
  getPriceFilter,
  getDiscountFilter,
} from '../redux/actions/filterAction';
// import SimpleDialogDemo from '../components/SimpleDialog';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#87CEEB',
  },
  formControl: {
    marginLeft: theme.spacing(10),
    minWidth: 120,
  },
  title: {
    flexGrow: 1,
  },
  removeLine: {
    textDecoration: 'none',
    color: 'Blue',
  },
}));

function SubHeader(props) {
  const classes = useStyles();

  const handleCategory = event => {
    const categoryValue = event.target.value;
    props.getFilterByCategory(categoryValue);
  };

  const handlePrice = event => {
    const priceValue = event.target.value;
    props.getFilterByPrice(priceValue);
  };

  const handleDiscount = event => {
    const discountValue = event.target.value;
    props.getFilterByDiscount(discountValue);
  };

  return (
    <div className={classes.root}>
      <Toolbar>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="Price"
            onChange={handlePrice}
          >
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value={'200'}>200</MenuItem>
            <MenuItem value={'250'}>250</MenuItem>
            <MenuItem value={'300'}>300</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Discount</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="discount"
            onChange={handleDiscount}
          >
            <MenuItem value={''}>None</MenuItem>
            <MenuItem value={'5 %'}>5 %</MenuItem>
            <MenuItem value={'10 %'}>10 %</MenuItem>
            <MenuItem value={'15 %'}>15 %</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="category"
            onChange={handleCategory}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Ecommerce">Ecommerce</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Travel and hospitality">
              Travel and Hospitality
            </MenuItem>
            <MenuItem value="Health and beauty">Health and Beauty</MenuItem>
            <MenuItem value="Food and beverages">Food and Beverages</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          {/* <SimpleDialogDemo /> */}
        </FormControl>
      </Toolbar>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    vendors: state.vendors,
  };
}

// dispatching corresponding actions and sending corresponding filter value as payload

const mapDispatchToProps = dispatch => {
  return {
    getFilterByCategory: categoryValue => {
      dispatch(getCategoryFilter(categoryValue));
    },
    getFilterByPrice: priceValue => {
      dispatch(getPriceFilter(priceValue));
    },
    getFilterByDiscount: discountValue => {
      dispatch(getDiscountFilter(discountValue));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubHeader);
