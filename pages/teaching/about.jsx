import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import styles from "../../styles/aboutpage.module.css"
import LastBanner from "../../components/LastBanner"
class AboutPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.About_Page_Gaiyou}>
            <div className={styles.innerkun24}>
            情報教育班について
            </div>
          </div>
          <div>
            <center>
              <h1  className={styles.mmidasi}>情報教育班とは?</h1>
            </center>
            <div className={styles.Hangaiyou}>
            情報班にある班です。<br />
            普段はタブレットPC室で元気に活動しています。
            おもに教育的なことを行っています。
            </div>
          </div>
        </div>
        <div style={{
          marginTop:"15vw"
        }} />
        <LastBanner />
      </>
    )
  }
}
export default AboutPage