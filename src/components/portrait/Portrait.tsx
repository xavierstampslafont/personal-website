import portrait from "#/assets/portrait.jpg"
import React from "react"
import styles from "./Portrait.module.css"

export const Portrait = () => (
  <img
    className={styles.portrait}
    src={portrait}
    alt="Xavier on a sunny day"
    width="400px"
    height="400px"
  />
)
