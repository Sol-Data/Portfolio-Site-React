import React from "react";

const siteText = [
    {
        text: ["Creat", "site with", "vite"],
        title: "Creat site compliant with webstandard",
        code: "https://github.com/Sol-Data/Portfolio-Site-Vite",
        view: "https://sol-data.github.io/Portfolio-Site-Vite/",
        info: [
            "Portfolio",
            "Production period : 2 week",
            "used stack : HTML5/CSS3, CSS Variable, Vite",
        ],
    },
    {
        text: ["Creat", "site with", "react.js"],
        title: "Creat site compliant with webstandard",
        code: "https://github.com/Sol-Data/Portfolio-Site-React",
        view: "https://sol-data.github.io/Portfolio-Site-React/",
        info: [
            "Portfolio",
            "Production period : 2 week",
            "used stack : HTML5/CSS3, CSS Variable, React.js",
        ],
    },
    {
        text: ["Creat", "site with", "vue.js"],
        title: "Creat site compliant with webstandard",
        code: "https://github.com/Sol-Data/Portfolio-Site-Vue",
        view: "https://sol-data.github.io/Portfolio-Site-Vue/",
        info: [
            "Portfolio",
            "Production period : 2 week",
            "used stack : HTML5/CSS3, CSS Variable, Vue.js",
        ],
    },
    {
        text: ["Creat", "site with", "next.js"],
        title: "Creat site compliant with webstandard",
        code: "https://github.com/Sol-Data/Portfolio-Site-Next",
        view: "https://sol-data.github.io/Portfolio-Site-Next/",
        info: [
            "Portfolio",
            "Production period : 2 week",
            "used stack : HTML5/CSS3, CSS Variable, Next.js",
        ],
    },
];

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">Portfolio Projects <em>My Works</em></h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num">{key+1}.</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code}>code</a>
                                <a href={site.view}>view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site;