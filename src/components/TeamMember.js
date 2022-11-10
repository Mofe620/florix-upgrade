import React from 'react';
import styles from '../customstyles/about.module.css';

function TeamMember({data}) {
    const {name, position, imageSrc} = data;  
    return (
    <div className={styles.member_card}>
        <img src={imageSrc} alt="team member" />
        <h4>{name}</h4>
        <h6>{position}</h6>
    </div>
  )
}

export default TeamMember