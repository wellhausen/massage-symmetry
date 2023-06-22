import React, { useState } from 'react';
import styles from './testimonials.module.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    content: "I thought I had experienced great massages until my first session with Roman and it knocked every massage I’ve ever gotten out of the park. He has a true gift for tuning into your body and finding the actual source of the discomfort. He also does extra research on his own time to master issues that he finds while working on me, as well as sending me videos of workouts and stretches to do during the week. I have felt drastic changes in my body since I started working with Roman biweekly and I truly cannot recommend him enough.",
    name: "Molly McBrayer",
    title: "CEO, ABC Company",
    image: 'photo-person-one.jpeg',
  },
  {
    id: 2,
    content: "Romon Smith started working on me 3 days before I went in to labor to help my body prepare for child birth in 2014.  I had him back over about a week after delivering and I can’t tell you how wonderful I felt thanks to him.  My hips and entire body was prepared for a very special day in my life, but then having him back afterwards helped keep me ultra comfortable. Since then, Romon has worked on me countless times. I’ve sent several friends and family members to him as well to work on me when I’ve been in car crashes, or just feeling achy, even falling ill.",
    name: "Rachel Stokes",
    title: "Technical Sales",
    image: 'photo-person-one.jpeg',
  },
  {
    id: 3,
    content: "Roman is known as a very gifted healer in our community. One thing that stands out to me about him is that even tho he has many years more experience than most- he is constantly taking workshops and accreditations to go further into the art! We all respect and honor his abilities.",
    name: "Randi Southard A",
    title: "Owner, Indra's Awarehouse",
    image: 'photo-person-one.jpeg',
  },
  {
    id: 4,
    content: "Roman is known as a very gifted healer in our community. One thing that stands out to me about him is that even tho he has many years more experience than most- he is constantly taking workshops and accreditations to go further into the art! We all respect and honor his abilities.",
    name: "Randi Southard B",
    title: "Owner, Indra's Awarehouse",
    image: 'photo-person-one.jpeg',
  },
  {
    id: 5,
    content: "Roman is known as a very gifted healer in our community. One thing that stands out to me about him is that even tho he has many years more experience than most- he is constantly taking workshops and accreditations to go further into the art! We all respect and honor his abilities.",
    name: "Randi Southard C",
    title: "Owner, Indra's Awarehouse",
    image: 'photo-person-one.jpeg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.testimonials}>
        <div
          className={styles.testimonialsRow}
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
          }}
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonial} ${
                index >= currentIndex && index < currentIndex + 3 ? styles.active : ''
              }`}
            >
              <div className={styles.image}>
                <Image 
                  src={`/images/${testimonial.image}`} alt="Testimonial" 
                  width={100}
                  height={100}
                />

              </div>
              <div className={styles.content}>
                <p className={styles.quote}>{testimonial.content}</p>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.title}>{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={handlePrev}>
          <IoIosArrowBack />
        </button>
        <button className={styles.navButton} onClick={handleNext}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
