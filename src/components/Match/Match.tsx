import { Link } from 'react-router-dom';
import { Activity } from '../../models';

interface MatchProps {
  activityData: Activity,
  handleSubmit: () => void
};

const Match: React.FC<MatchProps> = ({ activityData, handleSubmit}) => {

  const { activity, link } = activityData;

  return (
      <>
      <h2>You could...</h2>
      <div className='activity-container'>
        <h3 data-cy='activity-name'>{activity}</h3>
        {link && <a target="_blank" rel="noreferrer" href={link}>Link</a>}
        <form className='activity-choose-form'>
          <Link data-cy='do-it-btn' to='/you-did' onClick={handleSubmit} className='uni-btn'>Do it.</Link>
          <Link data-cy='nah-btn' to='/i-want-to' className='uni-btn'>Nah.</Link>
        </form>
      </div>
    </>
  );
}

export default Match;