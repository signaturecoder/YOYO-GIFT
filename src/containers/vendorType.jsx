import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import * as vendorType from '../redux/actions/vendorTypeActions';
import VendorCards from '../components/VendorCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    color: 'blue',
  },
  control: {
    padding: theme.spacing(2),
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

function VendorType(props) {
  const classes = useStyles();
  if (props.vendors.length === 0) {
    props.getVendors();
  }

  // Searching and filtering VendorList (HomePage Cards)

  const updatedVendors = JSON.parse(JSON.stringify(props.vendors));
  const resultList = updatedVendors.filter(list => {
    return (
      list.vendorName.toLowerCase().indexOf(props.searchText.toLowerCase()) !==
        -1 &&
      (props.filterCategoryValue === ''
        ? list.giftCategory !== props.filterCategoryValue
        : list.giftCategory === props.filterCategoryValue) &&
      (props.filterPriceValue === ''
        ? list.cardAmount !== props.filterPriceValue
        : list.cardAmount === props.filterPriceValue) &&
      (props.filterDiscountValue === ''
        ? list.cardDiscount !== props.filterDiscountValue
        : list.cardDiscount === props.filterDiscountValue)
    );
  });

  console.log(props.vendors);
  return (
    <>
      <div className={classes.flexContainer}>
        {resultList.map(vendor => {
          return <VendorCards key={vendor.id} data={vendor} />;
        })}
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    vendors: state.vendors,
    filterCategoryValue: state.filter.category,
    filterPriceValue: state.filter.price,
    filterDiscountValue: state.filter.discount,
  };
}

const mapDispatchToProps = dispatch => ({
  getVendors: () => dispatch(vendorType.loadVendors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VendorType);
