import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from "../styles/lastbanner.module.css"
class LastBanner extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
                <div className={styles.lastbannertop}>
                    <div className={styles.powered}>
                    <marquee behavior="scroll" scrolldelay="50" > 
                        このサイトはNext.JSおよびReact.JSによって作成されています。
                    </marquee>
                    </div>
                </div>
            </>
        )
    }
}
export default LastBanner