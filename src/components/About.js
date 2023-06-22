import React from 'react';
import Layout from '../components/Layout';
import styles from './about.module.css';
import Image from 'next/image';

const About = () => {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src="/images/roman-about.png" alt="Roman" width={200} height={200} className={styles.image} />
          </div>
          <div className={styles.content}>
          <p className={styles.highlight}>Hi! I'm Roman.</p>
            <p className="mt-5">
              I'm the owner of Massage Symmetry. As an experienced massage therapist, with over twenty years of practice,
              I can attest that no two sessions are ever the same.
            </p>
            <p className="mt-5">
              Every week, as you change, grow, evolve and reach your goals, your body changes, therefore the needs of your
              body change, as well. I am here to listen and respond to those needs with the greatest of care and attention.
              I specialize in several massage techniques that I incorporate into my sessions, including but not limited to,
              deep tissue and reflexology.
            </p>
          </div>
        </div>
      </Layout>
    );
  };
  
  export default About;