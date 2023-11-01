import Accordion from 'react-bootstrap/Accordion';

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
                <a className='a-novelista' href="https://github.com/mslzbry/mvmnt">novelista GitHub Repository</a>
                <a className='a-novelista' href="https://fast-scrubland-44894-b727f94b7e1a.herokuapp.com/">novelista Deployed Site</a>
                <img src={novelista} alt='novelista'className="novelista"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>EduRATEr</Accordion.Header>
                <Accordion.Body>
                <a className='a-edurater' href="https://github.com/mslzbry/mvmnt">mvmnt GitHub Repository</a>
                <a className='a-edurater' href="https://fast-scrubland-44894-b727f94b7e1a.herokuapp.com/">mvmnt Deployed Site</a>
                <img src={edurater} alt='mvmnt'className="mvmnt"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>mvmnt</Accordion.Header>
                <Accordion.Body>
                <a className='a-mvmnt' href="https://github.com/mslzbry/mvmnt">mvmnt GitHub Repository</a>
                <a className='a-mvmnt' href="https://fast-scrubland-44894-b727f94b7e1a.herokuapp.com/">mvmnt Deployed Site</a>
                <img src={mvmnt} alt='mvmnt'className="mvmnt"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Filmify</Accordion.Header>
                <Accordion.Body>
                <a className='a-filmify' href="https://github.com/eliasjrivera/Filmify">Filmify GitHub Repository</a>
                <a className='a-filmify' href="https://eliasjrivera.github.io/Filmify/">Filmify Deployed Site</a>
                <img src={filmify} alt='filmify'className="filmify"/>   
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    );
}
