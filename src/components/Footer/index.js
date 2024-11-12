import './Footer.css'

const Footer = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="../image/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="../image/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="../image/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="../image/logo.png" alt="" />
        </section>
        <section>
            <p>
                Developed by Raphael Cunha.
            </p>
        </section>
    </footer>)
}

export default Footer