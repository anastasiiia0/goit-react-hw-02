import { useState, useEffect } from 'react';

import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification';

const App = () => {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = JSON.parse(
      window.localStorage.getItem('saved-reviews')
    ) || { good: 0, neutral: 0, bad: 0 };
    return savedReviews;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-reviews', JSON.stringify(reviews));
  }, [reviews]);

  const updateFeedback = feedbackType => {
    setReviews({
      ...reviews,
      [feedbackType]: reviews[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    return setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round(
    ((reviews.good + reviews.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />

      <Options
        reviews={reviews}
        handleClickForUpdate={updateFeedback}
        totalNumber={totalFeedback}
        handleClickForReset={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          reviews={reviews}
          totalNumber={totalFeedback}
          numberOfPositive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
