"use client";
import styles from "./spinner.module.css";

export default function Spinner() {
  return <div className={`${styles.spinner} animate-spin`}></div>;
}
