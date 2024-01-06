// eslint-disable-next-line react/prop-types
const ButtonClose = ({ onClick }) => {
  return (
    <div className="flex justify-end font-semibold text-4xl mr-4">
      <button onClick={onClick}>X</button>
    </div>
  );
};

export default ButtonClose;
