import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fancypawsgrooming.doppiodesignsgrphx.com/wp-json/myplugin/v1/services')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching services:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading services...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {services.map((category) => (
        <div key={category.categoryId}>
          <h2 style={{ textAlign: 'center', fontFamily: 'Marcellus' }}>
            {category.categoryName}
          </h2>
          {/* 
              If the service list is not empty, assume that the description 
              of the first service represents the category description.
          */}
          {category.serviceList.length > 0 && (
            <p style={{ textAlign: 'center', fontFamily: 'Marcellus' }}>
              {category.serviceList[0].description}
            </p>
          )}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 30,
            }}
          >
            {category.serviceList.map((service) => (
              <ServiceCard 
                key={service.serviceId}
                service={service.serviceName}
                price={service.price}
                // We no longer pass description to each card since it's shown once per category
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
