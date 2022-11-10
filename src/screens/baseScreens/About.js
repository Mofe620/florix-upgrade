import React from 'react'
import {Helmet} from "react-helmet";
import FloatingAction from '../../components/FloatingAction';
import Header from '../../components/global/Header';
import Footer from '../../components/Footer';
import styles from '../../customstyles/about.module.css';
import CoreInfoCard from '../../components/CoreInfoCard';
import TeamMember from '../../components/TeamMember';

const coreInfo = [
    {
        title: "Our Vision",
        body: ["Healthcare for every African"]
    },
    {
        title: "Our Mission",
        body: ["To provide Africans with prompt access to quality and affordable healthcare"]
    },
    {
        title: "Our Core Values",
        body: ["Trust", "Innovation", "Excellence"]
    },
]

const teamInfo = [
    {
        name: "Andrew Akhabue",
        position: "Co-founder and CEO",
        imageSrc: "/assets/images/pharmAndrew.jpg"
    },
    {
        name: "Raphael Chimezie Odoh",
        position: "Chief Operations Officer",
        imageSrc: "/assets/images/Raphael.jpg"
    },
    {
        name: "Joy Chidinma Enwerem",
        position: "Head, Human Resource and Strategy",
        imageSrc: "/assets/images/Joy.jpg"
    }
]

const CoreCards = coreInfo.map(datum => <CoreInfoCard data={datum} />)
const TeamMembers = teamInfo.map(datum => <TeamMember data={datum} />)

const About = () => {
    return (
        <>
        <Header />
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>About Us</title>
                </Helmet>
                <div className={styles.about_banner}>
                    <img src="/assets/banners/about_banner.png" alt="" />
                    <h1>About Us</h1>
                </div>
                <div className={styles.layer_one}>
                    <h2>Who are we?</h2>
                    <div className={styles.summary_info}>
                        <img src="/assets/iflolog/about_team.png" alt="" />
                        <p>FLO-LOG<sup>&trade;</sup>, an initiative of Florix Healthcare LTD, is a tech-driven health care solution that seeks to change the narrative of the African healthcare sector in terms of product procurement and logistics. We offer an e-marketplace solution to healthcare professionals for the remote purchase of medicines and medical products from accredited distributors, with an accompanying dedicated healthcare logistics system.</p>
                    </div>
                    <div className={styles.core_info}>
                        {CoreCards}
                    </div>
                </div>
                <div className={styles.layer_two}>
                    <h5>OUR TEAM</h5>
                    <h2>Meet Our Team</h2>
                    <div className={styles.team_members}>
                        {TeamMembers}
                    </div>
                </div>
                <div className={styles.newsletter_layer}>
                    <div>
                        <h2>Be the first to find out about new products and services.</h2>
                        <p>Sign up for our newsletter</p>
                    </div>
                    <div className={styles.form_wrapper}>
                        <form>
                            <input type="email" placeholder="Enter your email" /> 
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <FloatingAction />
            </div>
        <Footer />
        </>
    )
}

export default About
