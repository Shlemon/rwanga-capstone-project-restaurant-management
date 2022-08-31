import './Home.css';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomepageFooter = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={12} id='cards-footer'>Temp Pic</Col>
            </Row>
        </React.Fragment>
    );
}

const AboutInformationSplit = () => 
{
    return(
        <React.Fragment>
            <Col lg={12}>
                Fast Food
            </Col>
            <Col lg={12}>
                Crafted With Elegance
            </Col>
        </React.Fragment>
    );
}

const FirstCardCombo = (props) =>
{
    return(
        <React.Fragment>
        <Col lg={6} id='left-first' style={{backgroundImage: `url(${props.story.image})`}}><Link to='/mainmenu' id='menu-as-link'>{props.story.item_title}</Link></Col>
        <Col lg={6} id='right-img-first'>
            <Row className='text-start ms-3 fw-bold'>
                <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start' id='body-section'>{props.story.body}</Col>
                <Col xs={12} sm={12} md={12} lg={12} className='mt-4 d-flex justify-content-start'><Link to='/mainmenu' id='link-as-button'>{props.story.button_title}</Link></Col>
            </Row>
        </Col>
        </React.Fragment>
    );
}

const SecondCardCombo = (props) => 
{
    return(
        <React.Fragment>
        <Col lg={6} id='right-img-first' style={{backgroundColor: '#FCDFA0'}}>
            <Row className='text-start ms-3 fw-bold'>
                <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-start' id='body-section'>{props.story.body}</Col>
                <Col xs={12} sm={12} md={12} lg={12} className='mt-4 d-flex justify-content-start'><Link to='/mainmenu' id='link-as-button'>{props.story.button_title}</Link></Col>
            </Row>
        </Col>
        <Col lg={6} id='left-first' style={{backgroundImage: `url(${props.story.image})`}}><Link to='/mainmenu' id='menu-as-link'>{props.story.item_title}</Link></Col>
        </React.Fragment>
    );
}

const CreateHomepageStories = (stories) => {
    /* Setting Media Queries Programatically
       To change layout when breakpoint is hit */
    const matchVal = window.matchMedia('(max-width: 991.5px)');
    const [isMatch, setMatch] = React.useState(false);

    matchVal.addListener((x) => {
        if(x.matches) {
            setMatch(true)
        } else {
            setMatch(false);
        }
    });
    return(
        <React.Fragment>
        {Object.entries(stories).map((storyIdx, storyIndex) => {
            storyIdx = storyIdx[1];
            if(isMatch || window.innerWidth <= 991.5){
                return <Row key={storyIndex} className='text-center'><FirstCardCombo story={storyIdx} /></Row>;
            } else{
                if(storyIndex % 2 === 0){
                    return <Row key={storyIndex} className='text-center'><FirstCardCombo story={storyIdx} /></Row>;
                }
                else {
                    return <Row key={storyIndex} className='text-center'><SecondCardCombo story={storyIdx} /></Row>;
                }
            }
        })}
        </React.Fragment>
    )
}

const Home = () => {
    // The First two cards won't change
    // for aesthetic reasons.
    // All subsequent cards must be dynamic and functional
    const storiesData = useSelector((state) => state.homePages.pages);
    console.log('Stories data: ', storiesData);
    return(
        <React.Fragment>
            <Container fluid id='main-home-page'>
                <Row>
                    <h1 id='main-img'>Lava Rest</h1>
                </Row>
                <Row id='information-section' className='my-5'>
                    <AboutInformationSplit />
                </Row>
                {/* Create the first two Static Stories */}
                <CreateHomepageStories {...storiesData} />
                {/* The Footer for displaying idk */}
                <HomepageFooter />
            </Container>
        </React.Fragment>
    );
};

export default Home;