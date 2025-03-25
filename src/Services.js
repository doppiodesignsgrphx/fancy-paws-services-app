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
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',  // Changed to lowercase
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
                description={service.description}  // Passed description prop
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
