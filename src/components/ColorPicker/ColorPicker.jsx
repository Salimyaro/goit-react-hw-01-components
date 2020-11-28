import './ColorPicker.css';
function ColorPicker({ options }) {
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">ColorPicker</h2>
      <div>
        {options.map(option => (
          <span
            key={option.label}
            className="ColorPicker__option"
            // style={{ color: 'red', fontSize: 20 }}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}
export default ColorPicker;
