function Title(props) {
  return (
    <h1 className="  text-3xl text-black m-5 font-bold text-center rounded-md p-4">
      {props.children}
    </h1>
  );
}

export default Title;

//the children is son the title is the father
