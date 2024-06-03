import React from 'react'
import styles from './navpage.module.css'

const NavPage = () => {
  return (
    <div className={styles.nav}>
        <ul>
            <li>
                <h3>Test Prep</h3>
                <ul>
                    <li><p>IELTS Academics</p></li>
                    <li><p>PTE Academics</p></li>
                    <li><p>TOEFL IBT</p></li>
                </ul>
            </li>
            <li>
                <h3>Admissions</h3>
                <ul>
                    <li><p>Undergrad</p></li>
                    <li><p>Masters (MS)</p></li>
                    <li><p>MBA</p></li>
                    <li><p>PHD</p></li>
                </ul>
            </li>
            <li><h3>Visa Guidance</h3></li>
            <li><h3>Career and Counselling</h3></li>
            <li>
                <h3>Diag Test</h3>
                <ul>
                    <li><p>IELTS</p></li>
                    <li><p>PTE</p></li>
                    <li><p>TOEFL</p></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}

export default NavPage