import s from './Box.module.css';
function Box({ type = 'small', bgColor = '#ccc', classNames = '', styles }) {
  return (
    <div className={`box ${s[type]} ${classNames}`} style={styles}>
      Box
    </div>
    // <div className={s[type]} style={{ backgroundColor: bgColor }}>
    //   Box
    // </div>
  );
}
export default Box;
