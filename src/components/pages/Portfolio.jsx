import Accordion from 'react-bootstrap/Accordion';
import { VscGithubAlt } from "react-icons/vsc";
import { TbWorldWww } from "react-icons/tb"

import novelista from '../../assets/images/novelista.png';
import edurater from '../../assets/images/edurater.png';
import mvmnt from '../../assets/images/mvmnt.png';
import filmify from '../../assets/images/filmify.png';


export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            &nbsp;
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>NOVELISTA</Accordion.Header>
                <Accordion.Body>
                <a href="https://github.com/eliasjrivera/Novelista" target="_blank">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                </a> &nbsp;
                <a href="https://github.com/eliasjrivera/Novelista" target="_blank">
                    <li className="logo">
                        <TbWorldWww />
                    </li>
                </a>
                <ul>
                    <li>Summary: Full stack web application and an online bookstore for books, powered by the Google Books API.</li>
                    <li>Role: Developer</li>
                    <li>Tools: React.js, Vite, Express.js, Node.js, HTML, CSS, JavaScript, JSON Web Token, CRUD, REST, Google Fonts, SQL, MySQL, Sequelize, Bcrypt, Dotenv, nodemon, Bootstrap, Heroku, React Icons, npm</li>
                </ul>
                <img src={novelista} alt='novelista'className="novelista"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>EduRATEr</Accordion.Header>
                <Accordion.Body>
                <a href="https://github.com/Pinto006/rate-my-educator" target="_blank">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                </a> &nbsp;
                <a href="https://damp-wildwood-31060-690d212e58d9.herokuapp.com/" target="_blank">
                    <li className="logo">
                        <TbWorldWww />
                    </li>
                </a>
                <ul>
                    <li>Summary: Full stack web application that provides a place for students to review, rate, and research their teachers and principals.</li>
                    <li>Role: Developer</li>
                    <li>Tools: React.js, Vite, Express.js, Node.js, HTML, CSS, JavaScript, MondoDB, Mongoose, NoSQL, Apollo, Apollo GraphQL, JWT, Bootstrap, Heroku, React Icons, npm</li>
                </ul>
                <img src={edurater} alt='edurater'className="edurater"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>mvmnt</Accordion.Header>
                <Accordion.Body>
                <a href="https://github.com/mslzbry/mvmnt" target="_blank">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                </a> &nbsp;
                <a href="https://mvmnt-7c803b2e2b8c.herokuapp.com/" target="_blank">
                    <li className="logo">
                        <TbWorldWww />
                    </li>
                </a>
                <ul>
                    <li>Summary: Full stack web application that helps keep track of your run stats: geolocation, name of run, time ran, and distance ran.</li>
                    <li>Role: Developer</li>
                    <li>Tools: Express.js, Node.js, HTML, CSS, JavaScript, Handlebars.js, MySQL, Sequelize ORM, GET/POST routes, Font Awesome, Bootstrap, Heroku, Insomnia, npm, Google Map JS API</li>
                </ul>
                <img src={mvmnt} alt='mvmnt'className="mvmnt"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Filmify</Accordion.Header>
                <Accordion.Body>
                <a href="https://github.com/eliasjrivera/Filmify" target="_blank">
                    <li className="logo">
                        <VscGithubAlt />
                    </li>
                </a> &nbsp;
                <a href="https://eliasjrivera.github.io/Filmify/" target="_blank">
                    <li className="logo">
                        <TbWorldWww />
                    </li>
                </a>
                <ul>
                    <li>Summary: Interactive front-end application that searches for your favorite movies, displays rating score and plot information.</li>
                    <li>Role: Developer</li>
                    <li>Tools: Server-Side APIs – OMDB (Open Movie Database) API and TMDB (The Movie Database) API, Bulma, HTML, CSS, JavaScript, GitHub, client-side storage</li>
                </ul>
                <img src={filmify} alt='filmify'className="filmify"/>   
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
}
