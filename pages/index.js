import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import LastBanner from "../components/LastBanner"
import BlinkObj from "../components/BlinkObj"
import styles from "../styles/indexkun.module.css"

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
      {t:"情報班について",u:"/about",c:"情報班についての内容が載っています。"},
      {t:"このサイトについて",u:"/aboutsite",c:"どのようにしてこのサイトが作られているのかが簡潔に載っています"},
      {t:"情報班の心得",u:"/rulekun",c:"守る事が載っているはずです"},
      {t:"情報教育班",u:"/teaching",c:"情報教育班の新公式ページ(工事中)"},
      {t:"現情報教育班",u:"https://sites.google.com/view/fukushimajouhouhan2021",c:"旧ページ"}
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
class IndexPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.Index_Page_Gaiyou}>
              <div className={styles.innerkun24}>
                <BlinkObj intervalkun="700">
                  情報班公式<br />ホームページ
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
export default IndexPage