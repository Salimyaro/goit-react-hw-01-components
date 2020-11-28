import PropTypes from 'prop-types';

import s from './FriendListItem.module.css';
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.item}>
      <span className={isOnline ? `${s.online}` : `${s.offline}`}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;
