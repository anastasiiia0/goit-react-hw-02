import css from './Options.module.css';

function capitalizeFirstLetter(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

const Options = ({
  reviews,
  handleClickForUpdate,
  totalNumber,
  handleClickForReset,
}) => {
  const reviewsTypes = Object.keys(reviews);

  return (
    <ul className={css.optionsList}>
      {reviewsTypes.map((type, index) => {
        return (
          <li key={index}>
            <button
              onClick={() => {
                handleClickForUpdate(type);
              }}
              type="button"
              className={css.optionBtn}
            >
              {capitalizeFirstLetter(type)}
            </button>
          </li>
        );
      })}

      {totalNumber > 0 && (
        <li>
          <button
            onClick={() => {
              handleClickForReset();
            }}
            type="button"
            className={css.optionBtn}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
