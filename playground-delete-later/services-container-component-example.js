// components/ServicesContainer.js
'use client'; // This component needs client-side rendering for DOM access and event listeners

import React, { useRef, useEffect, useState } from 'react';
import ServiceSection from './ServiceSection';
import { servicesData } from '@/data/servicesData'; // Adjust path if needed

// Basic throttle function to limit scroll handler calls
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const ServicesContainer = () => {
  // Array of refs for each service header element
  const headerRefs = useRef([]);
  // Ensure the refs array has the correct size and refs on mount/data change
  headerRefs.current = servicesData.map(
    (_, i) => headerRefs.current[i] ?? React.createRef()
  );

  useEffect(() => {
    const handleScroll = () => {
      let cumulativeStickyHeight = 0; // Tracks the total height of headers currently stuck at the top

      headerRefs.current.forEach((headerRef, index) => {
        const headerEl = headerRef.current;
        if (!headerEl) return;

        // Get the parent section element
        const sectionEl = headerEl.closest('.service-section'); // Find the closest ancestor with this class
        if (!sectionEl) return;

        const sectionRect = sectionEl.getBoundingClientRect();
        const headerHeight = headerEl.offsetHeight;

        // Determine if this header should be sticky based on section position
        // It becomes sticky when the top of its section reaches or scrolls past
        // the current cumulative height of the headers already sticky at the top.
        // It stops being sticky when the bottom of its section scrolls past
        // the current cumulative height (plus its own height).

        const shouldBeSticky = sectionRect.top <= cumulativeStickyHeight + 1 && // Add a small tolerance
                                 sectionRect.bottom > cumulativeStickyHeight;

        if (shouldBeSticky) {
          // Apply sticky styles
          headerEl.style.position = 'sticky';
          headerEl.style.top = `${cumulativeStickyHeight}px`;
          // Use z-index to ensure correct stacking order (later headers on top)
          // Lower index means earlier in the list, should be below later headers.
          headerEl.style.zIndex = servicesData.length - index;
          headerEl.style.width = 'auto'; // Allow width to adjust if needed
          headerEl.style.marginRight = '2rem'; // Maintain margin (adjust as per your CSS)


          // Add this header's height to the cumulative height for the next calculation
          cumulativeStickyHeight += headerHeight;

        } else {
          // Reset styles if not sticky
          headerEl.style.position = ''; // Reset to default (static/relative)
          headerEl.style.top = '';
          headerEl.style.zIndex = '';
          headerEl.style.width = '';
           headerEl.style.marginRight = ''; // Reset margin
        }
      });
    };

    // Add the scroll listener (throttled for performance)
    const throttledScroll = throttle(handleScroll, 50); // Adjust throttle limit as needed

    window.addEventListener('scroll', throttledScroll);

    // Call handler once on mount to set initial state (important if page is loaded scrolled down)
    handleScroll();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };

  }, [servicesData.length]); // Re-run effect if the number of services changes

  return (
    <div className="services-container">
      {servicesData.map((service, i) => (
        <ServiceSection
          key={service.title} // Use a stable key
          service={service}
          index={i}
          headerRef={headerRefs.current[i]} // Pass the ref to the header element
          // The stickyTop prop is no longer needed as we control it via inline style in JS
        />
      ))}
       {/* Optional: Add a contact button or footer here */}
       {/* <div className="contact-section" style={{ minHeight: '50vh', backgroundColor: '#f4f4f4', textAlign: 'center', padding: '4rem 0' }}>
            <p>Los Angeles, CA 11:53 AM</p>
            <h2>Let's work <span style={{ color: '#ff8cba' }}>together!</span></h2>
       </div> */}
    </div>
  );
};

export default ServicesContainer;