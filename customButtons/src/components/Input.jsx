export default function Input(props) {
  const { value, onChange, placeholder, type = "text" } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="custom-input"
    />
  );
}
