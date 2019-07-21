import React from 'react'
import { Link } from 'gatsby'

import github from '../images/icon-github.svg'
import mail from '../images/icon-mail.svg'
import telegram from '../images/icon-telegram.svg'

const Footer = (props) => (
  <footer>
    <span>© {new Date().getFullYear()} - Vincent Thiele - <Link to="/imprint">Impressum</Link></span>
    <a class="social" aria-label="Find me on Github" href="https://www.github.com/vvvt"><img class="social-img" alt="Github Icon" src={github} /></a>
    <a class="social" aria-label="Contact me on Telegram" href="https://t.me/thielegram"><img class="social-img" alt="Telegram Icon" src={telegram} /></a>
    <a class="social" aria-label="Send me an E-Mail" href="mailto:hey@thielegram.de"><img class="social-img" alt="E-Mail Icon" src={mail} /></a>    
  </footer>
)

export default Footer