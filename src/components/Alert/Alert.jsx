import s from './Alert.module.css';
// import './Alert.css';
import PropTypes from 'prop-types';

function Alert({ text, type = 'success' }) {
  return (
    // <p role="alert" className={`Alert Alert--${type}`}>
    //   {text}
    // </p>
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}
Alert.propType = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
};
export default Alert;
