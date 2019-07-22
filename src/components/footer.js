import React from 'react'
import { Link } from 'gatsby'

import github from '../images/icon-github.svg'
import mail from '../images/icon-mail.svg'
import telegram from '../images/icon-telegram.svg'

const Footer = (props) => (
  <footer>
    <span>© {new Date().getFullYear()} - Vincent Thiele - <Link to="/imprint">Impressum</Link></span>
    <a class="social" href="https://www.github.com/vvvt"><img class="social-img" alt="Github Icon" src={github} /></a>
    <a class="social" href="https://t.me/thielegram"><img class="social-img" alt="Telegram Icon" src={telegram} /></a>
    <a class="social" href="mailto:hey@thielegram.de"><img class="social-img" alt="E-Mail Icon" src={mail} /></a>    
  </footer>
)

export default Footer