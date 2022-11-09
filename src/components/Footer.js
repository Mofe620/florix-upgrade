import React from 'react'
import {Link} from "react-router-dom"
import styles from '../customstyles/footer.module.css'


const Footer = () =>{
    return(
        <>
        <footer>
            <div className={styles.footer_links_wrapper}>
                <div className={styles.app_links}>
                    <img src="/assets/icons/playstore.svg" alt="" />
                    <img src="/assets/icons/appstore.svg" alt="" />
                </div>
                <div className={styles.link_group}>
                    <h5>Quick Links</h5>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/blog/posts">Blog</Link></p>
                </div>
                <div className={styles.link_group}>
                    <h5>Solutions</h5>
                    <p><Link to="/shop">Wholesale Store</Link></p>
                    <p><Link to="#">Logistics Portal</Link></p>
                    <p><Link to="/emergency/request">Emergency Medicine Service</Link></p>
                </div>
                <div className={styles.link_group}>
                    <h5>Policies</h5>
                    <p><Link to="/privacy-policy">Privacy Policy</Link></p>
                    <p><Link to="/terms-conditions">Terms & Conditions</Link></p>
                </div>
                <div className={styles.link_group}>
                    <h5>Social Media</h5>
                    <p><a href='https://www.facebook.com/florixhealthcare' target="_blank" rel="noreferrer noopenner">Facebook</a></p>
                    <p><a href='http://instagram.com/flo_log.hq' target="_blank" rel="noreferrer noopenner">Instagram</a></p>
                    <p><a href='https://www.flolog.co/' target="_blank" rel="noreferrer noopenner">Twitter</a></p>
                </div>
            </div>
        </footer>
        <p className={styles.copyright}>2022 &copy; Florix Healthcare Ltd. All Rights Reserved.</p> 
        </>
    )
}

export default Footer
