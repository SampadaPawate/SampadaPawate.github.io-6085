import styles from '../styles/ResearchPage.module.css';

const research = [
  {
    id: 1,
    title: 'Brain Mapping EEG Classification System',
    type: 'Research Project',
    year: '2023',
    description: 'Developed an EEG classification web app using 3-level 2D DWT feature extraction and MSE matching, returning JSON results with confidence scores.',
    tags: ['Machine Learning', 'Signal Processing', 'Python'],
    link: 'https://github.com/SampadaPawate/brain-mapping-eeg-classification',
  },
  {
    id: 2,
    title: 'Real-time Fraud Detection System',
    type: 'Academic Project',
    year: '2024',
    description: 'Built a streaming data pipeline using Apache Flink and Kafka for real-time fraud detection with Docker containerization.',
    tags: ['Apache Flink', 'Kafka', 'Docker', 'Stream Processing'],
    link: 'https://github.com/SampadaPawate/lab-fraud-detection',
  },
  {
    id: 3,
    title: 'Security Automation Toolkit',
    type: 'Research Project',
    year: '2024',
    description: 'Created security automation utilities for log analysis, packet inspection, OSINT collection, and TCP client/server tooling.',
    tags: ['Python', 'Security', 'OSINT', 'Network Analysis'],
    link: 'https://github.com/SampadaPawate/python-for-automating-information-security',
  },
];

const ResearchPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Research & Publications</h2>
      <p className={styles.subtitle}>Academic research and significant projects</p>
      <div className={styles.timeline}>
        {research.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.content}>
              <span className={styles.type}>{item.type}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Research' },
  };
}

export default ResearchPage;
