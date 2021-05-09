import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import LastBanner from "../../components/LastBanner"
import BlinkObj from "../../components/BlinkObj"
import styles from "../../styles/teaching/indexkun.module.css"
class Cardkun extends React.Component{
  constructor(props){
      super(props)
  }
  render(){
      return(
          <>
              <div className={styles.dasaifuti}>
                  <a href={this.props.href}>
                        <h1 className={styles.aboutkun}>
                            【{this.props.title}】
                        </h1>
                        {this.props.children}
                  </a>
              </div>
          </>
      )
  }
}
class SiteCard extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={styles.innerkun}>
      <center>
        <Cardkun title={this.props.title} href={this.props.href}>
          <div className={styles.PageCont}>
            {this.props.children}
          </div>
        </Cardkun>
      </center>
    </div>
    )
  }
}
class SiteLskun extends React.Component{
  constructor(props){
    super(props)
    
    this.state={Pagels:[
      {t:"授業",u:"/teaching/study",c:"授業について"},
      {t:"情報教育班について",u:"/teaching/about",c:"情報教育班についての内容が載っています。"}
    ]}
  }
  render(){
    return(
      <div>
      {
        this.state.Pagels.map(e => (
          <>
            <SiteCard title={e.t} href={e.u}>
              {e.c}
            </SiteCard>
          </>
        ))
      }
      </div>
    )
  }
}
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
                  <SiteLskun />
              </div>
            </div>
          </div>
          <LastBanner />
        </>
      )
    }
  }
  export default TeachingIndexPage