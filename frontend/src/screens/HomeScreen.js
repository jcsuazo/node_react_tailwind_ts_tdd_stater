import React from 'react';

const HomeScreen = () => {
  const showProducts = (
    <div className='align-items-center flex h-full justify-center flex-1'>
      <div className='align-items-center bg-white flex justify-center rounded'>
        <h1>Home</h1>
      </div>
    </div>
  );

  return <>{showProducts}</>;
};

export default HomeScreen;
