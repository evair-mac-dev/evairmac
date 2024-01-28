import { Outlet } from 'react-router-dom';
import { cx } from '@utils';

export const Header = () => {
  return (
    <div className={cx('w-full h-screen')}>
      <header className={cx('w-full px-8')}>
        <nav className={cx('flex gap-4 h-16 justify-between items-center')}>
          <div className={cx('flex gap-1 items-baseline')}>
            <h2 className={cx('text-xl font-bold')}>EvairMac</h2>
            <div className={'w-2 h-2 bg-green-base rounded-full'}></div>
            {/*<img src={Bubble} alt="buble" className={cx('animate-spin-slow w-5 h-5 opacity-')} />*/}
          </div>
        </nav>
      </header>

      <Outlet />
    </div>
  );
};
