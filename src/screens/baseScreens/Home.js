import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { MdCheckCircle, MdKeyboardArrowRight } from "react-icons/md"
import Footer from '../../components/Footer'
import Header from '../../components/global/Header'
import IndexSlider from '../../components/sliders/index/indexSlider'
import PackageSlider from '../../components/sliders/index/packageSlider'
import Partnership from '../../components/sliders/shop/partnership'
import styles from '../../customstyles/home.module.css'

  const data = [
    {id: 1, img: '/assets/iflolog/amsi.jpg', heading: 'men care', text: ''},
    {id: 2, img: '/assets/iflolog/ams.jpg', heading: 'women care', text: ''},
    {id: 3, img: '/assets/iflolog/nurse-measuring-patient-blood-pressure.jpg', heading: 'hypertension care', text: ''},
    {id: 4, img: '/assets/iflolog/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file.jpg', heading: 'diabetics care', text: ''},
    {id: 5, img: '/assets/iflolog/beautiful-pregnant-belly.jpg', heading: 'antenatal care', text: ''},
    {id: 6, img: '/assets/iflolog/boy-doing-occupational-therapy-session-with-psychologist.jpg', heading: 'children care', text: ''},
    {id: 7, img: '/assets/iflolog/unsplash-asthma.jfif', heading: 'asthma', text: ''},
    {id: 8, img: '/assets/iflolog/brain-writes-with-white-chalk-is-hand-draw-concept.jpg', heading: 'eye care', text: ''},
    {id: 9, img: '/assets/iflolog/practice.jpg', heading: 'ulcer care', text: ''}
  ]


const partnerData = [
  {id: 1, img: '/assets/iflolog/pharmacy.png', subscribers: '100+', category: 'Pharmacies'},
  {id: 2, img: '/assets/iflolog/hospital.png', subscribers: '50+', category: 'Hospitals'},
  {id: 3, img: '/assets/iflolog/patient.png', subscribers: '50, 000+', category: 'Patients'},
  {id: 4, img: '/assets/iflolog/professional.png', subscribers: '100+', category: 'Healthcare providers'},
]

const Home = () => {
  const [saveMoney, showSaveMoney] = useState(true);
  useEffect(() => {
    setInterval(() => {
      showSaveMoney(!saveMoney)
    }, 10000);
  // eslint-disable-next-line
  }, [])

  const [innerWidth, setInnerWidth] = useState(null)

    useEffect(() => {
        setInnerWidth(window.innerWidth);
        window.addEventListener('resize', function(){
        setInnerWidth(window.innerWidth);
        })
    }, []);

  return (
    <div className={styles.home}>
        <Header />
        <div>
          <IndexSlider />
        </div>
        <div className={styles.layer_one}>
          <div>
            <h2>Pharmacists, Physicians, other Healthcare Providers and Institutions?</h2>
            <h3><Link to='register'><button>Sign Up <MdKeyboardArrowRight/></button></Link></h3>
            <p>Already have an account? <Link to='login'><b>Log in</b></Link></p>
            <img src='/assets/iflolog/members.png' alt=""/>
          </div>
          {saveMoney ?
          <div className={styles.card}>
              <h2>Stay on Time</h2>
              <p>Make wholesale procurement with ease</p>
              <p>Get fast and efficient logistics</p>
          </div>:
          <div className={`${styles.card} ${styles.two} `}>
            <h2>Save More</h2>
            <p>Get the best prices and best delivery rates</p>
          </div>}
        </div>
        <div className={styles.layer_two}>
          <div className={styles.illustration}>
            <img src="/assets/images/patient-illustration.svg" alt="" />
          </div>
          <div className={styles.emergency_cta}>
            <h3>Patient?</h3>
            <p>Assess our 24-hour</p>
            <h2>Emergency medicines service</h2>
            <Link to='/emergency/request'><button>Click Here</button></Link>
          </div>
        </div>
        <div className={styles.layer_three}>
          <div>
            <h2>We guarantee you the CAPS of Healthcare</h2>
            <p><MdCheckCircle/> Convenience</p>
            <p><MdCheckCircle/> Accessibilty</p>
            <p><MdCheckCircle/> Privacy</p>
            <p><MdCheckCircle/> Speed</p>
          </div>
          <img src='/assets/iflolog/lady-in-striped-shirt-color.png' className='' alt="" />
        </div>
        <div className={styles.subscribe}>
          <h5>Looking for quality Healthcare?</h5>
          <h3>Subscribe to an offer that perfectly suits your Healthcare needs</h3>
        </div>
        {innerWidth > 400 ?
        <div className={styles.product_grid}>
              {data.map((product)=>(
                  <div className={styles.product}>
                    <img src={product.img} alt={product.heading} />
                    <div className={styles.product_info}>
                      <h3>{product.heading}</h3>
                      <p>Starting from NGN 9,999</p>
                      <p>30-day subscription</p>
                      <Link to='#'><button>Get Now</button></Link>
                    </div>
                  </div>
              ))}
        </div> :
        <PackageSlider /> }
        <div className={styles.layer_four}>
          <h4>Health Management Organisation?</h4>
          <p>Sign up to service your Patient's prescriptions</p>
          <Link to='#'><button>Click Here</button></Link>
        </div>
        <div className={styles.layer_five}>
          <div>
            <h5>Health at your fingertips</h5>
            <p>In 15 months of operations, we have become a trusted Healthcare partner to</p>
          </div>
          <div className={styles.partner_data}>
            {partnerData.map(item=>(
                <div>
                  <img src={item.img} alt=""/> 
                  <p>{item.subscribers}</p>
                  <h2>{item.category}</h2>
                </div>
            ))}
          </div>
        </div>
        <Partnership />
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
        <Footer />
    </div>
  )
}

export default Home