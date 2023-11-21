// switch name to About after website functions
// Home = About
import avatar from '../../assets/images/avatar.jpg';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            &nbsp;
            <p>Recent Full Stack Software Engineer graduate from UC San Diego's Extended Studies Coding Bootcamp. Proficient in a wide range of web technologies and frameworks, with an ability to quickly adapt to new technology stacks.</p>
            <p>With a diverse background in hospitality, public health, and research, I'm dedicated to creating a significant contribution. These roles have ensured me with the skills to contribute innovate solutions to dynamic problems. My tenure has strengthened my analytical abilities, research acumen, and capacity to carry out complex activities smoothly and adaptively.</p>
            <p>I'm now eager to leverage my coding skills and multifaceted background to contribute meaningfully to innovative projects. Let's connect and explore how I can be a valuable asset to your team!</p>
            <img src={avatar} alt='Avatar' className='avatar'/>
        </div>
    );
}
