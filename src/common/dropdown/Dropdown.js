const Dropdown = ({ items, onChange }) => {
  return (
    <select onChange={onChange} defaultValue="">
      <option value="" disabled>
        Choose style...
      </option>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
