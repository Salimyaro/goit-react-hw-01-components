import PropTypes from 'prop-types';

import defaultImg from '../cat.jpg';

export default function Painting({
  url = defaultImg,
  title,
  authorTag = 'no name',
  authorUrl,
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url ?? defaultImg} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorTag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
