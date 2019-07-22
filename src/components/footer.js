import React from 'react'
import { Link } from 'gatsby'

import github from '../images/icon-github.svg'
import mail from '../images/icon-mail.svg'
import telegram from '../images/icon-telegram.svg'

const Footer = (props) => (
  <footer>
    <span>© {new Date().getFullYear()} - Vincent Thiele - <Link to="/imprint">Impressum</Link></span>
    <a class="social" aria-label="Github Profile" href="https://www.github.com/vvvt"><img class="social-img" role="presentation" alt="Github Icon" src={github} /></a>
    <a class="social" aria-label="Telegram Contact" href="https://t.me/thielegram"><img class="social-img" role="presentation" alt="Telegram Icon" src={telegram} /></a>
    <a class="social" aria-label="Mail Contact" href="mailto:hey@thielegram.de"><img class="social-img" role="presentation" alt="E-Mail Icon" src={mail} /></a>    
  </footer>
)

export default Footer