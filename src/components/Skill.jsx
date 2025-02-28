import React from "react";

const skillText = [
    {
        title: "I design a dream.",
        desc: "I like to turn my own ideas into reality. I try to develop myself for that without settling for reality. I wish just one person would be inspired by what I made or would move my mind. I think it's a huge attraction for developers to be able to make their own thoughts to their heart's content. I want to design and develop my own ideas in the corner of the world and live in the future.",
    },
    {
        title: "With hard work comes opportunity.",
        desc: "Opportunity only comes to those who are prepared. If I want to progress, I have to put into action what I believe in. I dream of making an impact on the world beyond different cultures and languages. To create opportunities, I need to immerse myself in what I want to do. When you do that, you see the path and you see the direction. Opportunity is something you create for yourself through hard work and effort.",
    },
    {
        title: "Be honest with me",
        desc: "Honesty should mean more to me than to others. If you're not honest, you can't passionately push ahead with what you really want. You have to do what comes from your heart to be honest and know how to enjoy life more.",
    }
]

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    About Me <em>My Challenge</em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>            
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill;