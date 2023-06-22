import React from 'react';
import { InlineWidget } from 'react-calendly';
import Layout from './Layout';

const CalendlyComponent = () => {
  return (
    <Layout>
      <div>
        <InlineWidget url="https://calendly.com/lyndawellhausen/90-minute-massage" />
      </div>
    </Layout>
  );
};

export default CalendlyComponent;