import React from 'react'
import PropTypes from 'prop-types';
import styles from './notification.module.css'


const Notification = ({message}) => (
    <div className={styles.notif}>
    {message}
    </div>
);

export default Notification;

Notification.propTypes = {
    message: PropTypes.string
}