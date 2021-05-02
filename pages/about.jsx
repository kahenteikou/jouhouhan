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
          <div>
            <center>
              <h1>情報班とは?</h1>
            </center>
            <div className={styles.Hangaiyou}>
            情報班はSS部にある班です。<br />
            普段はタブレットPC室で元気に活動しています。
            </div>
            <center>
              <h1>情報班の成り立ち</h1>
            </center>
            <div className={styles.Hangaiyou}>
              元々は掲示板を作ろうとして立ち上がった班だそうです(先輩談)<br />
              その後計画が挫折しましたがIT関係は残そうということでこのようになったらしいです(先輩談)
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
export default AboutPage