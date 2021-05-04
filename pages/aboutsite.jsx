import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import styles from "../styles/aboutsitekun.module.css"
import BlinkObj from "../components/BlinkObj"
class AboutPageSite extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.About_Page_Gaiyou}>
              <BlinkObj intervalkun="700">
                <div className={styles.innerkun24}>
                    このサイトについて
                </div>
            </BlinkObj>
          </div>
          <div>
            <center>
              <h1  className={styles.mmidasi}>どうやって作られているの?</h1>
            </center>
            <div className={styles.Hangaiyou}>
                Next.JSで作られています。<br />
                React.JSがベースになっているため、書きやすく、ページの描画が速い特徴があります。
            </div>
            <center>                 
              <h1>古い技術使ってそう</h1>
            </center>
            <div className={styles.Hangaiyou}>
                そんなことありませんよ。<br/>
                ReactやNext.JSは最近出てきた技術です。<br/>
                ReactはInstagramやFacebookなどで使われていますから。
            </div>
          </div>
        </div>
        <div style={{
          marginTop:"15vw"
        }} />
      </>
    )
  }
}
export default AboutPageSite