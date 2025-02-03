function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-blue-800 text-white  rounded-md p-3"
    >
      {props.children}
    </button>
  );
}
export default Button;
