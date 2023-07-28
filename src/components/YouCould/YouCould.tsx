import { ReactElement, useContext } from 'react';
import './YouCould.css';
import { Link } from 'react-router-dom';
import ThemeContext from '../../Contexts/ThemeContext';
import { Activity } from '../../models';

interface YouCouldProps {
  activityObject: Activity,
  addActivity: () => void,
  setFirst: (first: boolean) => void
};

const YouCould: React.FC<YouCouldProps> = ({ activityObject, addActivity, setFirst }) => {
  
  const { activity, link, error } = activityObject;
  
  const theme = useContext<string>(ThemeContext);

  const handleSubmit = () :  void => {
    addActivity();
    setFirst(false);
  }

  const match: ReactElement =
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
  ;

  const noMatch: ReactElement = 
    <section className='activity-container'>
      <p>Nothing to do given those contraints.</p>
      <Link data-cy='back-btn' to='/i-want-to' className='uni-btn'>Try something else.</Link>
    </section>
  ;

  const loading: ReactElement = 
  <section className='activity-container'>
    <p>Loading....</p>
  </section>
;

  return (
    <section className={`you-could ${theme}`}>
      {activity ? match : error ? noMatch : loading}
    </section>
  );
}

export default YouCould;
