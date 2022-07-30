import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import images here for now
import drinks_img from '../../assets/main-menu/drinks.jpg';
import beef_burger_img from '../../assets/stories/burger.png';
import chicken_burger_img from '../../assets/stories/chicken-burger.png';
import meat_saj_img from '../../assets/stories/meat-tantuni.png';


const AboutInformationSplit = () => 
{
    return(
        <>
            <Col lg={12}>
                <h6 id='info-id'>Inspired by the Add Inspiration thing Here.</h6>
            </Col>
            <Col lg={12}>
                <h6 id='info-id'>Built on the principle that food tastes better when shared.</h6>
            </Col>
            <Col lg={12}>
                <h6 id='info-id'>For the vibrant community of Area Name.</h6>
            </Col>
        </>
    );
}

const FirstCardCombo = (props) =>
{
    return(
        <>
        <Col lg={6} id='left-first' style={{backgroundImage: `url(${props.story.image})`}}><Link to='/mainmenu' id='menu-as-link'>Menu</Link></Col>
        <Col lg={6} id='right-img-first'>
            <Row className='text-start mx-5 fw-bold'>
                <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start' id='body-section'>{props.story.body}</Col>
                <Col xs={12} sm={12} md={12} lg={12} className='mt-4 d-flex justify-content-start'><Link to='/mainmenu' id='link-as-button'>{props.story.navDescription}</Link></Col>
            </Row>
        </Col>
        </>
    );
}

const SecondCardCombo = (props) => 
{
    return(
        <>
        <Col lg={6} id='right-img-first' style={{backgroundColor: '#FCDFA0'}}>
            <Row className='text-start mx-5 fw-bold'>
                <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start' id='body-section'>{props.story.body}</Col>
                <Col xs={12} sm={12} md={12} lg={12} className='mt-4 d-flex justify-content-start'><Link to='/mainmenu' id='link-as-button'>{props.story.navDescription}</Link></Col>
            </Row>
        </Col>
        <Col lg={6} id='left-first' style={{backgroundImage: `url(${props.story.image})`}}><Link to='/mainmenu' id='menu-as-link'>Menu</Link></Col>
        </>
    );
}

const CreateHomepageStories = (props) => {
    return(
        <>
        {props.stories.map(function(storyIdx, storyIndex){
            if(storyIndex % 2 == 0){
                return <Row key={storyIdx.body} className='text-center'><FirstCardCombo story={storyIdx} /></Row>;
            }
            else {
                return <Row key={storyIdx.body} className='text-center'><SecondCardCombo story={storyIdx} /></Row>;
            }
        })}
        </>
    )
}

const Home = () => {
    // The First two cards won't change
    // for aesthetic reasons.
    // All subsequent cards must be dynamic and functional
    return(
        <>
        <Container fluid id='main-home-page'>
            <Row>
                <h1 id='main-img'>Lava Rest</h1>
            </Row>
            <Row id='information-section' className='my-5'>
                <AboutInformationSplit />
            </Row>
            {/* Create the first two Static Stories */}
            <CreateHomepageStories stories={storiesStatic} />
            <CreateHomepageStories stories={storiesData} />
        </Container>
        </>
    );
};

export default Home;


// Ill put StoriesData here for now
// until Firebase backend connection is established.
const storiesStatic = [
    {
        body: 'Enjoy our current offering of delicious dishes, made with fresh ingredients.',
        navDescription: 'View our Menu',
        image: drinks_img,
    },
    {
        body: 'Introducing our new menu item, the Big Burger!',
        navDescription: 'Learn More',
        image: drinks_img,
    }
];


const storiesData = [
    {
        body: 'Introducing our new menu item, the Big Burger!',
        navDescription: 'Learn More',
        image: beef_burger_img,
    },
    {
        body: 'Introducing our new menu item, the Big Burger!',
        navDescription: 'Learn More',
        image: chicken_burger_img,
    },
    {
        body: 'Introducing our new menu item, the Big Burger!',
        navDescription: 'Learn More',
        image: meat_saj_img,
    },
]