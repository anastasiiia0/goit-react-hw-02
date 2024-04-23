import css from './Feedback.module.css';

function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const Feedback = ({ reviewsTypes }) => {
  const types = Object.keys(reviewsTypes);

  return (
    <ul className={css.feedbackList}>
      {types.map((type, index) => {
        return (
          <li key={index} className={css.feedbackListItem}>
            {capitalizeFirstLetter(type)}: {reviewsTypes[type]}
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;

//  <p>No feedback yet</p>
//       <li className={css.feedbackListItem}>Good: </li>
//       <li className={css.feedbackListItem}>Neutral: </li>
//       <li className={css.feedbackListItem}>Bad: </li>
//       <li className={css.feedbackListItem}>Total: </li>
//       <li className={css.feedbackListItem}>Positive: </li>
