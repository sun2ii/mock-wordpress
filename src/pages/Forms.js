import React from 'react';

const Forms = () => {
  return (
    <div className="content">
      <h1>Various Forms</h1>

      <section>
        <h2>Google Form</h2>
        <iframe
          src="https://forms.gle/LZFt6rc8CZA4hjBG8?utm_source=google_form&utm_medium=embed&utm_campaign=signup"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        >
          Loading…
        </iframe>
      </section>

      <section>
        <h2>Beehiiv Form</h2>
        <iframe
          src="https://embeds.beehiiv.com/0b23ecec-bf54-407d-ba6c-f74eff9ae7f2?utm_source=beehiiv_form&utm_medium=embed&utm_campaign=signup"
          data-test-id="beehiiv-embed"
          width="480"
          height="320"
          frameBorder="0"
          scrolling="no"
          style={{ borderRadius: '4px', border: '2px solid #e5e7eb', margin: '0', backgroundColor: 'transparent' }}
          title="Beehiiv Form"
        ></iframe>
      </section>

      <section>
        <h2>Typeform</h2>
        <iframe
          src="https://2zehjgc0nzh.typeform.com/to/qyNCE8vV?utm_source=typeform&utm_medium=embed&utm_campaign=signup"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Typeform"
        >
          Loading…
        </iframe>
      </section>

      <section>
        <h2>JotForm</h2>
        <iframe
          src="https://form.jotform.com/241555447676063?utm_source=jotform&utm_medium=embed&utm_campaign=signup"
          width="640"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="JotForm"
        >
          Loading…
        </iframe>
      </section>
    </div>
  );
};

export default Forms;