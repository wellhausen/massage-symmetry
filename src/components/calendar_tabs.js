import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { InlineWidget } from 'react-calendly';

const CalendarTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>120 Minute Massage</Tab>
          <Tab>90 Minute Massage</Tab>
          <Tab>60 Minute Massage</Tab>
        </TabList>

        <TabPanel>
          <InlineWidget url="https://calendly.com/120-minute-massage" />
        </TabPanel>
        <TabPanel>
          <InlineWidget url="https://calendly.com/lyndawellhausen/90-minute-massage" />
        </TabPanel>
        <TabPanel>
          <InlineWidget url="https://calendly.com/60-minute-massage" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CalendarTabs;
