import cn from "classnames";

import styles from "./favorite-button.module.scss";
import HeartSvg from "../inline-svg/heart-svg";

export default function FavoriteButton({ isFavorite, clickHandler }) {
  return (
    <button
        className={cn(styles.btn, {[styles.favorite]: isFavorite})}
        onClick={clickHandler}
      >
        <HeartSvg />
      </button>
  )
}
