import { cx } from '@utils';
import { FC } from 'react';

interface ISocialMedia {
  icon: string;
  alt: string;
  link: string;
}

export const SocialMedia: FC<ISocialMedia> = (props) => {
  const { icon, alt, link } = props;
  return (
    <a href={`https://${link}`} target="_blank" rel="noreferrer" className={cx('inline-block mx-2')}>
      <div
        className={cx(
          'w-16 h-16 rounded-full shadow-alternative-box flex items-center justify-center',
          'hover:shadow-alternative-box-2',
        )}
      >
        <img src={icon} alt={alt} className={cx('w-7 h-7')} />
      </div>
    </a>
  );
};
