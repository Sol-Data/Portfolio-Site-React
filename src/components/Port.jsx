import React from "react";

import port01 from "../assets/img/PoFol01.jpg";
import port02 from "../assets/img/PoFol02.jpg";
import port03 from "../assets/img/PoFol03.jpg";
import port04 from "../assets/img/PoFol04.jpg";
import port05 from "../assets/img/PoFol05.jpg";
import port06 from "../assets/img/PoFol06.jpg";
import port07 from "../assets/img/PoFol07.jpg";
import port08 from "../assets/img/PoFol08.jpg";
import port09 from "../assets/img/PoFol09.jpg";
import port10 from "../assets/img/PoFol10.jpg";

const portText = [
   {
      num: "01",
      title: "Front-End Projects",
      desc: "Work In Progress & Comming Soon",
      img: port01,
      code: "https://github.com/Sol-Data/Portfolio-Site-React.git",
      view: "https://github.com/Sol-Data/Portfolio-Site-React.git",
      name: "Front-End projects",
  },
  {
   num: "02",
   title: "Backend Projects",
   desc: "Work In Progress & Comming Soon",
   img: port02,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Backend Projects",
},
{
   num: "03",
   title: "Java Projects",
   desc: "Work In Progress & Comming Soon",
   img: port03,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Java Projects",
},
{
   num: "04",
   title: "Kotlin Projects",
   desc: "Work In Progress & Comming Soon",
   img: port04,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Kotlin Projects",
},
{
   num: "05",
   title: "Python Projects",
   desc: "Work In Progress & Comming Soon",
   img: port05,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Python Projects",
},
{
   num: "06",
   title: "DataBase Projects",
   desc: "Work In Progress & Comming Soon",
   img: port06,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "DataBase Projects",
},
{
   num: "07",
   title: "Data Engineering ProjectsJava Projects",
   desc: "Work In Progress & Comming Soon",
   img: port07,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Data Engineering Projects",
},
{
   num: "08",
   title: "Data Science & Data Analysis Projects",
   desc: "Work In Progress & Comming Soon",
   img: port08,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Data Science & Data Analysis Projects",
},
{
   num: "09",
   title: "Big Data Projects",
   desc: "Work In Progress & Comming Soon",
   img: port09,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Big Data Projects",
},
{
   num: "10",
   title: "Artificial Intelligence Projects",
   desc: "Work In Progress & Comming Soon",
   img: port10,
   code: "https://github.com/Sol-Data",
   view: "https://github.com/Sol-Data",
   name: "Artificial Intelligence Projects",
},
]

const Port = () => {
    return (
      <section id="port">
         <div className="port__inner">
            <div className="port__title">
               My Projects<em>My Works by Field</em>
            </div>
            <div className="port__warp">
               {portText.map((port, key) => (
                  <article className={`port__item p${key + 1}`} key={key}>
                     <span className="num">{port.num}.</span>
                     <a href={port.code} target="_blank" className="img" rel="noreferrer">
                        <img src={port.img} alt={port.name} />
                     </a>
                     <h3 className="title">{port.title}</h3>
                     <p className="desc">{port.desc}</p>
                     <a href={port.view} target="_blank" className="site" rel="noreferrer">View Portfolio</a>   
                  </article>
               ))}
            </div>
         </div>
      </section>
    );
   };     

export default Port;