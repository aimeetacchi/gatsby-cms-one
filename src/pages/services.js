import React from "react"

import styles from "./services-css-modules.module.css"

import Header from "../components/header"
import Footer from "../components/footer"
import Container from "../components/container"

// console.log(styles)


export default () => (
    <Container>
        <Header />
        <h2>Services Page</h2>
        <p>Cool Huh!!</p>
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src="https://images.fineartamerica.com/images-medium-large/elephant-leaf-teal-abstract-bonnie-bruno.jpg" alt="icon" />
            </div>
            <div className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea esse unde doloribus molestiae quaerat obcaecati, eveniet animi corporis, sequi ipsam ex nam nihil amet dignissimos ratione voluptatibus voluptatum natus.</div>
        </div>
        <Footer />
    </Container>
)