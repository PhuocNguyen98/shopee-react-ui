import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import Popper from '../Popper';
import configs from '~/configs';
import images from '~/assets/images';
import style from './Cart.module.scss';

const cx = classNames.bind(style);

type Props = {
  isShow: boolean;
};

interface Product {
  img: string;
  name: string;
  slug: string;
  price: number | string;
  quantity: number;
  supplier: string;
}

const LIST_PRODUCTS: Product[] = [
  {
    img: images['cart-item-1'],
    name: 'Chuột Logitech G502 Lightspeed Wireless',
    slug: 'cart-item-1',
    price: '2.260.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-2'],
    name: 'Bàn phím Asus TUF Gaming K1 RGB',
    slug: 'cart-item-2',
    price: '890.000',
    quantity: 2,
    supplier: 'Asus',
  },
  {
    img: images['cart-item-3'],
    name: 'Tai nghe Logitech G733 Lightspeed Wireless RGB',
    slug: 'cart-item-3',
    price: '2.940.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-1'],
    name: 'Chuột Logitech G502 Lightspeed Wireless',
    slug: 'cart-item-1',
    price: '2.260.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-2'],
    name: 'Bàn phím Asus TUF Gaming K1 RGB',
    slug: 'cart-item-2',
    price: '890.000',
    quantity: 2,
    supplier: 'Asus',
  },
  {
    img: images['cart-item-3'],
    name: 'Tai nghe Logitech G733 Lightspeed Wireless RGB',
    slug: 'cart-item-3',
    price: '2.940.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-1'],
    name: 'Chuột Logitech G502 Lightspeed Wireless',
    slug: 'cart-item-1',
    price: '2.260.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-2'],
    name: 'Bàn phím Asus TUF Gaming K1 RGB',
    slug: 'cart-item-2',
    price: '890.000',
    quantity: 2,
    supplier: 'Asus',
  },
  {
    img: images['cart-item-3'],
    name: 'Tai nghe Logitech G733 Lightspeed Wireless RGB',
    slug: 'cart-item-3',
    price: '2.940.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-1'],
    name: 'Chuột Logitech G502 Lightspeed Wireless',
    slug: 'cart-item-1',
    price: '2.260.000',
    quantity: 1,
    supplier: 'Logitech',
  },
  {
    img: images['cart-item-2'],
    name: 'Bàn phím Asus TUF Gaming K1 RGB',
    slug: 'cart-item-2',
    price: '890.000',
    quantity: 2,
    supplier: 'Asus',
  },
  {
    img: images['cart-item-3'],
    name: 'Tai nghe Logitech G733 Lightspeed Wireless RGB',
    slug: 'cart-item-3',
    price: '2.940.000',
    quantity: 1,
    supplier: 'Logitech',
  },
];

function Cart({ isShow }: Props) {
  return (
    <Popper isShow={isShow} isArrow={true} isRight={true}>
      <div className={cx('cart__wrapper')}>
        {!LIST_PRODUCTS.length ? (
          <div className={cx('no__cart')}>
            <img src={images['no-cart']} alt='Chưa có sản phẩm' />
            <span className={cx('cart__title')}>Chưa có sản phẩm</span>
          </div>
        ) : (
          <>
            <span className={cx('cart__heading')}>Sản phẩm đã thêm</span>
            <ul className={cx('cart__list')}>
              {LIST_PRODUCTS.map((product, index) => (
                <li key={index} className={cx('cart__item')}>
                  <Link to={product.slug} className={cx('cart-item__link')}>
                    <img src={product.img} alt='Cart item' className={cx('cart-item__img')} />
                    <div className={cx('cart-item__content')}>
                      <div className={cx('cart-item__top')}>
                        <h5 className={cx('cart-item__name')}>{product.name}</h5>
                        <div>
                          <span className={cx('cart-item__price')}>{product.price}</span>
                          <span className={cx('cart-item__character')}>x</span>
                          <span className={cx('cart-item__quantity')}>{product.quantity}</span>
                        </div>
                      </div>
                      <div className={cx('cart-item__bottom')}>
                        <span className={cx('cart-item__supplier')}>
                          Thương hiệu: {product.supplier}
                        </span>
                        <span className={cx('cart-item__btn-delete')}>Xóa</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={configs.routes.cart}>
              <button className={cx('view-cart__btn')}>Xem giỏ hàng</button>
            </Link>
          </>
        )}
      </div>
    </Popper>
  );
}

export default Cart;
