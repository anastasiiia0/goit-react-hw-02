import css from './Feedback.module.css';

function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const Feedback = ({ reviews, totalNumber, numberOfPositive }) => {
  const types = Object.keys(reviews);

  return (
    <ul className={css.feedbackList}>
      {types.map((type, index) => {
        return (
          <li key={index} className={css.feedbackListItem}>
            {capitalizeFirstLetter(type)}: {reviews[type]}
          </li>
        );
      })}
      <li className={css.feedbackListItem}>Total: {totalNumber}</li>
      <li className={css.feedbackListItem}>Positive: {numberOfPositive}%</li>
    </ul>
  );
};

export default Feedback;
