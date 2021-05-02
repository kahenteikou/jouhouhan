import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from "../styles/Header.module.css"
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className={styles.Headerkun} >
                    <div className={styles.official_button}>
                        <a className={styles.official_button_a} href="/">
                            <div className={styles.headerbig}>福島高校SS部情報班</div>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}
export default Header