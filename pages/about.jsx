import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import styles from "../styles/aboutpage.module.css"
class AboutPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.About_Page_Gaiyou}>
              情報班について
          </div>
        </div>
      </>
    )
  }
}
export default AboutPage