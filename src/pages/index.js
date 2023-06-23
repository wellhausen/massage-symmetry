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

          </div>
          <div className="centered-content ms-box-shadow">
            <div className="content-box">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 content-text">
                  <h1 class="display-3">Romon Smith, LMT</h1>
                  <h2>Body Worker and Mobile Massage Professional</h2>
                </div>
              </div>
              <p className="content-text">
                Mobile massage professional offering massage and body work to the
                greater Austin area. Are you healing from an injury? Or do you need
                of a relaxing therapeutic massage? I am happy to help you in your
                healing process.
              </p>
              <p className="content-text">
                Call to schedule a phone consult or schedule by text or email today!
              </p>
              <p className="content-text">
                crsmithtxlmt@gmail.com
                <br />
                512-228-9744
              </p>
            </div>
          </div>
          <div className="centered-button">
            <a href="/booking">
              <Button variant="solid" colorScheme="gray" size="lg" className="ms-box-shadow">
                <Text color="black">Book Now</Text>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

