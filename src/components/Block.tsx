import { FC, ReactNode } from 'react';
import { cx } from '@utils';

interface IBlock {
  children: ReactNode;
  classNames?: string;
}

export const Block: FC<IBlock> = ({ children, classNames }) => {
  return (
    <div className={cx('rounded-3xl p-10 shadow-main-box', 'lg:px-8 lg:py-6', ...(classNames ? [classNames] : []))}>
      {children}
    </div>
  );
};
