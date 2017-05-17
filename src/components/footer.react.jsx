import React from 'react';

import style from '../style/footer.css';

const Footer = (props) => {
  return (
    <div className={style.footer}>
      <p>Code for Baltimore &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer;