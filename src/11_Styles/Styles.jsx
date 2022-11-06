import React from "react";
import styles from "./style.module.css";
import headerStyles from "./header.module.scss";

// console.log(styles);
// console.log(headerStyles);

const Styles = () => {
  return (
    <div>
      <h1>CSS Module</h1>
      <p className={styles.title}>Hello BC32</p>
      <p className={headerStyles.title}>Hello Cybersoft</p>

      {/* <a className={headerStyles.listItem} href="#">
          Home
        </a> */}

      <ul className={headerStyles.list}>
        <li>
          <a className={headerStyles.listItem} href="/#">
            Home
          </a>
        </li>
        <li>
          <a className={headerStyles.listItem} href="/#">
            About
          </a>
        </li>
        <li>
          <a className={headerStyles.listItem} href="/#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Styles;
