import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import LastBanner from "../../components/LastBanner"
import BlinkObj from "../../components/BlinkObj"
import styles from "../../styles/teaching/indexkun.module.css"
class TeachingIndexPage extends React.Component{
    render(){
      return(
        <>
          <Header />
          <div>
            <div className={styles.Index_Page_Gaiyou}>
                <div className={styles.innerkun24}>
                  <BlinkObj intervalkun="700">
                    情報教育班公式ページ(工事中)
                  </BlinkObj>
                </div>
            </div>
            <div className={styles.content}>
              <div  className={styles.siteitiran}>
                <h1 className={styles.mmidasi}>
                  サイト一覧
                </h1>
              </div>
              <div id="pagels">
              </div>
            </div>
          </div>
          <LastBanner />
        </>
      )
    }
  }
  export default TeachingIndexPage