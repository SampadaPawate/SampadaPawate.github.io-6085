import styles from '../styles/EndorsementsPage.module.css';

const endorsements = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    text: 'An exceptional developer with strong problem-solving skills. Always delivers high-quality code on time.',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Project Manager',
    company: 'Innovation Labs',
    text: 'Great team player with excellent communication skills. A pleasure to work with on complex projects.',
    avatar: '👩‍💻',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Tech Lead',
    company: 'StartupXYZ',
    text: 'Highly skilled in full-stack development. Quick learner who adapts well to new technologies.',
    avatar: '👨‍🔬',
  },
];

const EndorsementsPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Endorsements</h2>
      <p className={styles.subtitle}>Recommendations from colleagues and mentors</p>
      <div className={styles.grid}>
        {endorsements.map((endorsement) => (
          <div key={endorsement.id} className={styles.card}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{endorsement.text}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{endorsement.avatar}</div>
              <div className={styles.info}>
                <h4 className={styles.name}>{endorsement.name}</h4>
                <p className={styles.title}>{endorsement.title}</p>
                <p className={styles.company}>{endorsement.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.note}>
        <span>💡</span>
        Connect with me on LinkedIn for more endorsements
      </p>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Endorsements' },
  };
}

export default EndorsementsPage;
