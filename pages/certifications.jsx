import styles from '../styles/CertificationsPage.module.css';

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    credentialId: 'AWS-SAA-XXXXX',
    icon: '☁️',
  },
  {
    id: 2,
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    credentialId: 'AZ-900-XXXXX',
    icon: '🔷',
  },
  {
    id: 3,
    name: 'Google Cloud Professional',
    issuer: 'Google',
    date: '2023',
    credentialId: 'GCP-PDE-XXXXX',
    icon: '🌐',
  },
];

const CertificationsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Certifications</h2>
      <p className={styles.subtitle}>Professional certifications and credentials</p>
      <div className={styles.grid}>
        {certifications.map((cert) => (
          <div key={cert.id} className={styles.card}>
            <div className={styles.icon}>{cert.icon}</div>
            <div className={styles.content}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <p className={styles.date}>{cert.date}</p>
              <p className={styles.credentialId}>ID: {cert.credentialId}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        <span className={styles.icon}>📝</span>
        Update this page with your actual certifications in data/certifications.json
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Certifications' },
  };
}

export default CertificationsPage;
