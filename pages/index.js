import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
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
class IndexPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.Index_Page_Gaiyou}>
              <div className={styles.innerkun24}>
              情報班公式<br />ホームページ</div>
          </div>
          <div className={styles.content}>
            <div  className={styles.siteitiran}>
              <h1 className={styles.mmidasi}>
                サイト一覧
              </h1>
            </div>
            <div id="pagels">
              <SiteCard title="情報班について" href="/about">
                情報班についての内容が載っています。
              </SiteCard>
              <SiteCard title="このサイトについて" href="/aboutsite">
                どのようにしてこのサイトが作られているのかが簡潔に載っています
              </SiteCard>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default IndexPage