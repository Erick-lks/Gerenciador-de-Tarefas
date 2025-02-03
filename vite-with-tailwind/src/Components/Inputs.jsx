//component generic input
function Input(props) {
  return (
    <input
      //CallBack allthings Placeholders, type, value, onChange, etc
      {...props}
      className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
    ></input>
  );
}
export default Input;
