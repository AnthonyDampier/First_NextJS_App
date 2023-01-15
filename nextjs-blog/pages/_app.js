// pages/_app.js
import styles from '../styles/global.css';
import variables from '../styles/variables.module.scss'

export default function MyApp({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
    )
}