import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <h1>Shop Online</h1>
      <div className='search-input'>
        <input type='text' placeholder='Search...' />
        <button className='search-button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <nav className='header-navigate'>
        <a href='/'>Trang chủ</a>
        <a href='/products'>Sản phẩm</a>
        <a href='/cart'>Giỏ hàng</a>
      </nav>
    </header>
  );
};

export default Header;
