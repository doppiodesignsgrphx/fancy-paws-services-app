import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ service, price }) { 
  return (
    <div className="service-card">
      <h2 className="service-card-title">{service}</h2>
      <h4>starting at ${price}...</h4>
    </div>
  );
}
