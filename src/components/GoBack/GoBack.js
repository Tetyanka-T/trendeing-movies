import s from './GoBack.module.css';

const ComeBackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      type="button"
      className={s.button_comeBack}
      onClick={() => goBack()}
    >
      Back
    </button>
  );
};

export default ComeBackButton;
