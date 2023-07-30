import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <section className='activity-container'>
      <p>Nothing to do given those contraints.</p>
      <Link data-cy='back-btn' to='/i-want-to' className='uni-btn'>Try something else.</Link>
    </section>
  );
}

export default NoMatch;