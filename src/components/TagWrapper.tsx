import { cx } from '@utils';

export const TagWrapper = () => {
  return (
    <div className={cx('flex gap-1 items-center')}>
      <div className={'w-1.5 h-1.5 bg-green-base rounded-full'}></div>
      <div className={'h-1 w-10 bg-green-base'}></div>
    </div>
  );
};
