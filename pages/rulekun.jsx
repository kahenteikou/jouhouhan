import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Header from '../components/Header'
import BlinkObj from "../components/BlinkObj"
import styles from "../styles/rulekun.module.css"
import LastBanner from "../components/LastBanner"
class KokoroeList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={this.props.className}>
                <ul>
                    {

                        this.props.lists.map(objkun => (
                            <>
                                <li>{objkun}</li>
                                <div className={styles.kokoroe_blank} />
                            </>
                        )
                    )
                    }
                </ul>
            </div>
        )
    }
}
class RulePage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const kokoroe_ls=["情報班内で知識共有をする","他人のパソコン/スマホに許可なく触らない","部活内での私的な活動は慎む","挨拶は必ずしなければならない"]
        return(
            <>
                <Header />
                <div> 
                    <div className={styles.RuleKunPage}>
                        <BlinkObj intervalkun="700">
                            <div className={styles.innerkun24}>
                                情報班の心得
                            </div>
                        </BlinkObj>
                    </div>
                    <div>
                        <center>
                            <div className={styles.innerkun27}>
                                情報班の心得
                            </div>
                            <KokoroeList className={styles.kokoroekun} lists={kokoroe_ls}>
                                
                            </KokoroeList>
                            <img src="/kokoroe/1.jpg" className={styles.kokoroeimg}>
                            </img>
                        </center>
                    </div>
                </div>
                <LastBanner />
            </>
        )
    }
}
export default RulePage