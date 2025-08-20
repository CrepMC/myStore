import { useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const openBtnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const openBtn = openBtnRef.current;
    const closeBtn = closeBtnRef.current;
    const overlay = overlayRef.current;
    const sidebar = sidebarRef.current;

    function openSidebar() {
      root.classList.add('is-open');
      body.classList.add('no-scroll');
      sidebar.hidden = false;
      overlay.hidden = false;
      openBtn.setAttribute('aria-expanded', 'true');
      document.getElementById('sidebarTitle')?.focus();
    }

    function closeSidebar() {
      root.classList.remove('is-open');
      body.classList.remove('no-scroll');
      openBtn.setAttribute('aria-expanded', 'false');
      setTimeout(() => {
        if (!root.classList.contains('is-open')) {
          sidebar.hidden = true;
          overlay.hidden = true;
        }
      }, 300);
      openBtn.focus?.();
    }

    openBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSidebar();
    });

    // cleanup khi component unmount
    return () => {
      openBtn.removeEventListener('click', openSidebar);
      closeBtn.removeEventListener('click', closeSidebar);
      overlay.removeEventListener('click', closeSidebar);
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebar();
      });
    };
  }, []);

  return (
    <>
      <div className='page'>
        <button
          className='open-btn'
          ref={openBtnRef}
          aria-controls='sidebar'
          aria-expanded='false'
        >
          ☰
        </button>
      </div>

      <div className='overlay' ref={overlayRef} hidden></div>

      <aside
        className='sidebar'
        ref={sidebarRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='sidebarTitle'
        hidden
      >
        <header>
          <h2 id='sidebarTitle'>Menu</h2>
          <button
            className='close-btn'
            ref={closeBtnRef}
            aria-label='Đóng sidebar'
          >
            ✕
          </button>
        </header>
        <nav>
          <a href='#'>Trang chủ</a>
          <a href='#'>Sản phẩm</a>
          <a href='#'>Giỏ hàng</a>
          <a href='#'>Liên hệ</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
