import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
           <div className="footer__inner">
              <h2 className="footer__text">
                 <div>Portfolio-Project</div>
                 <div>From IT Developer</div>
              </h2>
              <div className="footer__info">
                 <div className="left">
                    <div className="title">
                        <a href="/">Sign Up</a>
                    </div>
                    <p className="desc">If you sign up for membership, you can use the board and comment function.</p>
                 </div>   
                 <div className="right">
                    <h3>Portfolio Review</h3>
                    <ul>
                        {footerText.map((footer, key) => (
                            <li key={key}>
                                <a href={footer.link}>{footer.title}</a>
                                <em>{footer.desc}</em>
                            </li>
                        ))}
                     </ul>
                </div>
              </div> 
              <div className="footer__right">
                &copy; 2025 IT Developer<br />
                This site was created using React
              </div>
            </div>
        </footer>
    );
};

export default Footer;