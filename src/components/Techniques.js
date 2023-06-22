import React, { useState } from 'react';
import styles from './techniques.module.css';

const Techniques = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const techniquesData = [
    {
      name: 'Deep Tissue',
      explanation: 'Deep tissue massage focuses on realigning deeper layers of muscles and connective tissue. It is beneficial for relieving chronic muscle tension and targeting specific problem areas.',
    },
    {
      name: 'Swedish',
      explanation: 'Swedish massage is a gentle and relaxing massage technique that promotes overall relaxation and improves circulation. It involves long, flowing strokes, kneading, and circular motions.',
    },
    {
      name: 'Mayo Facial',
      explanation: 'Mayo facial massage is a technique that targets the muscles of the face and neck to improve blood flow, tone the skin, and reduce the appearance of wrinkles and tension.',
    },
    {
      name: 'Sports',
      explanation: 'Sports massage is designed for athletes and active individuals to help prevent and treat injuries, improve flexibility, and enhance performance. It involves techniques like stretching, compression, and deep tissue work.',
    },
    {
      name: 'Pregnancy',
      explanation: 'Pregnancy massage is specifically tailored for expectant mothers to address the unique discomforts and changes that occur during pregnancy. It helps to alleviate muscle tension, reduce swelling, and promote relaxation.',
    },
    {
      name: 'Reflexology',
      explanation: 'Reflexology is a technique that focuses on applying pressure to specific points on the feet, hands, and ears to stimulate healing responses in corresponding organs and systems of the body.',
    },
    {
      name: 'Tuina',
      explanation: 'Tuina is a traditional Chinese massage technique that uses various hand techniques, acupressure, and stretching to promote energy flow and balance in the body. It is often used for musculoskeletal conditions and overall wellness.',
    },
    {
      name: 'Jin Shin Do',
      explanation: 'Jin Shin Do is a form of acupressure therapy that combines gentle finger pressure on specific points with mindful breathing to release physical and emotional tension, promote relaxation, and restore balance.',
    },
  ];
  

  return (
    <div className={styles.container}>
      <h1>Techniques</h1>
      {techniquesData.map((technique, index) => (
        <div key={index} className={styles.technique}>
          <div
            className={`${styles.techniqueName} ${expanded === index ? styles.expanded : ''}`}
            onClick={() => handleExpand(index)}
          >
            {technique.name}
          </div>
          {expanded === index && (
            <div className={styles.explanation}>{technique.explanation}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Techniques;
