import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Shop Online</h1>
      <nav className='header-navigate'>
        <a href='/'>Trang chủ</a>
        <a href='/products'>Sản phẩm</a>
        <a href='/cart'>Giỏ hàng</a>
      </nav>
    </header>
  );
};

export default Header;
