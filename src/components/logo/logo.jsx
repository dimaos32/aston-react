import cn from 'classnames';

import styles from './logo.module.scss';
import LogoSvg from '../inline-svg/logo-svg';

export default function Logo({ classes }) {
  return (
    <a href="/" className={cn(styles.logo, classes)}>
      <LogoSvg />
    </a>
  );
}
