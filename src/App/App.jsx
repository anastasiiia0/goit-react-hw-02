// import userData from '../../userData.json';
// import friends from '../../friends.json';
// import transactions from '../../transactions.json';

import { useState } from 'react';

import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';

const App = () => {
  const [reviewsTypes, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviewsTypes,
      [feedbackType]: reviewsTypes[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options reviewsTypes={reviewsTypes} updateFeedback={updateFeedback} />
      <Feedback reviewsTypes={reviewsTypes} />
    </>
  );
};

export default App;
