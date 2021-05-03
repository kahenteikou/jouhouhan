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
              <div>
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
class IndexPage extends React.Component{
  render(){
    return(
      <>
        <Header />
        <div>
          <div className={styles.Index_Page_Gaiyou}>
              情報班公式<br />ホームページ
          </div>
          <div className={styles.content}>
            <div  className={styles.siteitiran}>
              <h1>
                サイト一覧
              </h1>
            </div>
            <div id="pagels">
              <div className={styles.innerkun}>
                  <Cardkun title="情報班について" href="/about">
                    <div className={styles.PageCont}>
                      情報班についての内容が載っています。
                    </div>
                  </Cardkun>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default IndexPage