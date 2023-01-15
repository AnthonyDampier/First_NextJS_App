// pages/_app.js
import styles from '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}