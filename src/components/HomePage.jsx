import React from 'react';
import VendorType from '../containers/vendorType';

const HomePage = ({ searchValue }) => {
  return (
    <>
      <div>
        <VendorType searchText={searchValue} />
      </div>
    </>
  );
};

export default HomePage;
