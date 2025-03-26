import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ service, price, description }) { 
  return (
    <div className="service-card">
      <h2 className="service-card-title">{service}</h2>
      <h4>starting at ${price}...</h4>
      {/*<p className="service-card-description">{description}</p>*/}
    </div>
  );
}
