import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import js from "../assets/icons/js.gif"
import react from "../assets/icons/react.gif"
import python from "../assets/icons/py.gif"
import git from "../assets/icons/git.svg"
import express from "../assets/icons/express.svg"
import postgress from "../assets/icons/FavoritesSvg/postgres.svg"
import node from "../assets/icons/FavoritesSvg/nodejs.svg"
import html from "../assets/icons/FavoritesSvg/html.svg"
import css from "../assets/icons/FavoritesSvg/css.svg"
import mongo from "../assets/icons/FavoritesSvg/mongo.svg"
import mysql from "../assets/icons/FavoritesSvg/mysql.svg"
import django from "../assets/icons/FavoritesSvg/dj.svg"
import aws from "../assets/icons/FavoritesSvg/aws.svg"
import java from "../assets/icons/FavoritesSvg/java.svg"
import spring from "../assets/icons/FavoritesSvg/spring.svg"
import php from "../assets/icons/FavoritesSvg/php.svg"
import laravel from "../assets/icons/FavoritesSvg/laravel.svg"



export const SkillsLenguaje = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Technologies Experience</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel autoPlay={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={postgress} alt="Image" />
                                <h5>Postgres</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>Css</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>Html</h5>
                            </div>
                            <div className="item">
                                <img src={mongo} alt="Image" />
                                <h5>Mongo</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="Image" />
                                <h5>Aws</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={spring} alt="Image" />
                                <h5>Spring</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
