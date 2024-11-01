import React from 'react';

const ServiceDetails = ({ name }) => (
  <div style={{ padding: '20px', borderTop: '1px solid #ddd' }}>
    <h3>{name} Services</h3>
    <p>
      At Innomatics Research Labs, our {name.toLowerCase()} team is dedicated to providing 
      top-quality solutions that meet industry standards. With a strong focus on innovation 
      and user-centric design, we ensure our clients receive the best possible results.
    </p>
  </div>
);

export default ServiceDetails;
