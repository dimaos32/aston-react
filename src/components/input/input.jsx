import cn from 'classnames';

import styles from './input.module.scss';

export default function Input({ type, name, classes, placeholder, label, labelClasses }) {

  return (
    <>
      <label className={cn(labelClasses)} htmlFor="search">{label}</label>
      <input
        className={cn(styles.input, classes)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};
