import css from './Options.module.css';

function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const Options = ({ reviewsTypes, updateFeedback }) => {
  const types = Object.keys(reviewsTypes);

  return (
    <ul className={css.optionsList}>
      {types.map((type, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => {
                updateFeedback(type);
              }}
              type="button"
              className={css.optionBtn}
            >
              {capitalizeFirstLetter(type)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Options;
