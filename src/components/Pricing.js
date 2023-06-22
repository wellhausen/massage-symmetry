import React from 'react';
import Layout from '../components/Layout';
import { Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styles from './pricing.module.css';

const Pricing = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.pricingContainer}>
          <h2>Massage Pricing:</h2>
          <ul>
            <li>30 minutes: $50</li>
            <li>60 minutes: $90</li>
            <li>90 minutes: $150</li>
          </ul>
        </div>
        <div className={styles.centeredButton}>
          <Link href="/booking">
            <Button variant="solid" colorScheme="gray" size="lg">
              <Text color="black">
                Book Now
              </Text>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
