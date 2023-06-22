import React from 'react';
import Layout from '../components/Layout';
import { Heading, Button } from '@chakra-ui/react';
import { Text } from "@chakra-ui/react";
import Image from 'next/image';

const HomePage = () => {
  return (
    <Layout>
      <div className="image-container">
        <div className="image-background" />
          <div className="content">
            <div class="container h-100">
              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-black">
                  <h1 class="display-3">Romon Smith, LMT</h1>
                  <h2>Body Worker and Mobile Massage Professional</h2>
                </div>
              </div>
          </div>
          <div className="centered-button">
              <a href="/booking">
                <Button variant="solid" colorScheme="gray" size="lg">
                  <Text color="black">
                    Book Now
                  </Text>
                </Button>
              </a>
            </div>
          </div>
      </div>

    </Layout>
  );
};

export default HomePage;
