import React from "react";
import PropTypes from "prop-types";
import styles from './section.module.css'

const Section = ({ title, children }) => (
  <div className={styles.page}>
    <div className={styles.content}>
    <h2 className={styles.pageTitle}>{title}</h2>
    {children}
    </div>
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
