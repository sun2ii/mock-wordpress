import React from 'react';

const BeehiivForm = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <iframe
        src="https://embeds.beehiiv.com/0b23ecec-bf54-407d-ba6c-f74eff9ae7f2"
        data-test-id="beehiiv-embed"
        width="480"
        height="320"
        frameBorder="0"
        scrolling="no"
        style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'transparent' }}
        title="Beehiiv Form"
      ></iframe>
    </div>
  );
};

export default BeehiivForm;