import React from 'react';
import styles from '../customstyles/about.module.css';

function CoreInfoCard({data}) {
  const {title, body} = data;  
  return (
    <div className={styles.coreInfo_card}>
        <div className={styles.card_header}>
            <h4>{title}</h4>
        </div>
        <div className={styles.card_body}>
            <ul>
                {body.map(item => <li>{item}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default CoreInfoCard