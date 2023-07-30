import { useContext } from 'react';
import './YouCould.css';
import ThemeContext from '../../Contexts/ThemeContext';
import { Activity } from '../../models';
import Loading from '../Loading/Loading';
import NoMatch from '../NoMatch/NoMatch';
import Match from '../Match/Match';

interface YouCouldProps {
  activityObject: Activity | undefined,
  addActivity: () => void,
  setFirst: (first: boolean) => void
};

const YouCould: React.FC<YouCouldProps> = ({ activityObject, addActivity, setFirst }) => {
    
  const theme = useContext<string>(ThemeContext);

  const handleSubmit = () :  void => {
    addActivity();
    setFirst(false);
  }

  return (
    <section className={`you-could ${theme}`}>
      {
        !activityObject
          ? <Loading/>
          : activityObject.error
            ? <NoMatch/>
            : <Match activityData={activityObject} handleSubmit={handleSubmit}/>
      }
    </section>
  );
}

export default YouCould;
