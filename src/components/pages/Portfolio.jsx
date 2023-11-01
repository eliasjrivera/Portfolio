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
                <a href="https://github.com/mslzbry/mvmnt" target="_blank">
                    <li className="logo">
                        <TbWorldWww />
                    </li>
                </a>
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
                <img src={filmify} alt='filmify'className="filmify"/>   
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
}
