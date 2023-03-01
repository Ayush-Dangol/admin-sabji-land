const Input = (props) => {
  return (
    <div className="input-items">
      <label htmlFor={props.id}>{props.data}</label>
      <input
        type={props.type}
        className={`add-products-input ${props.class}`}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.change}
      />
    </div>
  );
};

export default Input;
