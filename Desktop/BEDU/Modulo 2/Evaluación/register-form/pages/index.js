import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sunna Sign in</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>User registration</h1>
      <p className="sub-title">If you already have an existing user account, use it to log in. <a href="">Log in here.</a></p>

      <div id="contact-container">
        <div className="contact-info">
          <h4>
            Welcome to Sunna 2.0
          </h4>
          <p>Fill up the form and then click Register</p>
          <div className="icon-text">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>442-669-9297</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>sunna@mansur-solar.com</span>
          </div>
          <div className="icon-text">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>Avenida Siempreviva 742</span>
          </div>

          <div className="social-media">
            <a href="#" className="icon-circle">
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" className="icon-circle">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <form>
          <div className="col">
            <div className="form-group">
            <label>First Name</label>
            <input type="text"/>
            </div>
            <div className="form-group">
            <label>Last Name</label>
            <input type="text"/>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
            <label>E-Mail</label>
            <input type="email"/>
            </div>
            <div className="form-group">
            <label>Phone number</label>
            <input type="phone"/>
            </div>
          </div> 

          <div className="col">
            <div className="form-group">
            <label>Password*</label>
            <input type="password"/>
            </div>
            <div className="form-group">
            <label>Repeat Password</label>
            <input type="password"/>
            </div>
          </div> 
    
          <div className="col">
            <div className="form-group">
            <label>What kind of user do you need?</label>
            <div className="radio-button">
              <input type="radio" id="privateuser" name="type" value="private"/><label htmlFor="privateuser">Private User</label>
            </div>
            <div className="radio-btns">
            <input type="radio" id="commercialuser" name="type" value="commercial"/><label htmlFor="commercialuser">Commercial User</label>
            </div>
          </div> 
          </div> 

          <div className="col">
            <div className="form-group solo right">
              <button className="primary">Register</button>
            </div>
          </div>

  

        </form>
      </div>

    </>
  )
}
