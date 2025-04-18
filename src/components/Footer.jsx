import React from "react";

const footerText = [
    {
        title: "Front-End Projects",
        desc: "You can see projects related to the Front-End",
        link: "https://github.com/Sol-Data/Portfolio-Site-Vite.git",
    },
    {
        title: "Backend Projects",
        desc: "You can see projects related to the Backend",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Java Projects",
        desc: "You can see projects related to the Java",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Kotlin Projects",
        desc: "You can see projects related to the Kotlin",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Python Projects",
        desc: "You can see projects related to the Python",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Database Projects",
        desc: "You can see projects related to the Database",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Data Engineering Projects",
        desc: "You can see projects related to the Data Engineering",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Data Science and Data Analysis Projects",
        desc: "You can see projects related to the Data Science and Data Analysis",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Big Data Projects",
        desc: "You can see projects related to the Big Data",
        link: "https://github.com/Sol-Data",
    },
    {
        title: "Artificial Intelligence Projects",
        desc: "You can see projects related to the Artificial Intelligence",
        link: "https://github.com/Sol-Data",
    },
];

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
                        <a href="#">Sign Up</a>
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