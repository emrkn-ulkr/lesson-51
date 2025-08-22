import React from 'react';
import Gonderi from './Gonderi';
import './Gonderiler.css';

const Gonderiler = (props) => {

  const { gonderiler, gonderiyiBegen } = props;

  return (
    <div className="posts-container-wrapper">
      { }
      {gonderiler.map((gonderi) => {
        return <Gonderi gonderi={gonderi} gonderiyiBegen={gonderiyiBegen} />;
      })}
    </div>
  );
};

export default Gonderiler;
