import React from "react";
import cn from 'classnames'
import styles from "./Logo.scss";

const cx = cn.bind(styles);

export function Logo({ text }) {
  return <div className={cx(styles.logo)}>{text}</div>;
}
