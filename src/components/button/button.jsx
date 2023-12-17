import cn from 'classnames';

import styles from './button.module.scss';

export default function Button({ children, type, href, classes }) {

  return (
    <>
      {
        !href && <button className={cn(styles.button, classes)} type={type}>
          {children}
        </button>
      }
      {
        !!href && <a className={cn(styles.button, classes)} href={href}>
          {children}
        </a>
      }
    </>
  );
};
