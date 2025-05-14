// components/ServiceSection.js

import React, { forwardRef } from 'react';
import Image from 'next/image';

// Use forwardRef because the parent component needs to assign a ref to the h2 element
const ServiceSection = forwardRef(({ service, index, headerRef, ...props }, ref) => {
  return (
    <section
      ref={ref} // Ref for the section container itself (optional for now, but good practice)
      className="service-section"
      style={{ backgroundColor: service.color }}
      data-index={index} // Data attribute to identify section index
      {...props}
    >
      <div className="service-content-wrapper">
        {/*
          The h2 will become position: sticky.
          Its 'top' and 'zIndex' will be controlled dynamically by the parent's scroll logic.
        */}
        <h2 ref={headerRef} className="service-header">
          {service.title}
        </h2>
        <div className="service-details">
          <div className="service-description">
            <p>{service.description}</p>
            <ul>
              {service.list && service.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="service-image">
             {/* Use Next/Image for optimization */}
            <Image
              src={service.image}
              alt={service.title}
              layout="responsive" // Or 'fill' with a container div
              width={600} // Specify original width/height for aspect ratio
              height={400}
              objectFit="cover"
              className="rounded-lg" // Example styling
            />
          </div>
        </div>
      </div>
    </section>
  );
});

ServiceSection.displayName = 'ServiceSection'; // Add display name for debugging

export default ServiceSection;