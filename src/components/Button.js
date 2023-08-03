export let Button = ({ value, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        Button Component
      </button>
      <p>The Button is clicked {value} times</p>
    </>
  );
};
