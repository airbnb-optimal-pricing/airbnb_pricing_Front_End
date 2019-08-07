import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { LogIn } from '../../Actions/index';
import NavBar from '../Navbar';
import FullInputs from '../FullInputs';
import styled from 'styled-components';
const StyledTopBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 10em;
`;
const StyledFullInputsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding: 2px;
    background-color: rgb(255,218,185);
`;
const StyledTestingBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(255,228,225);
`;
const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(255,240,245);
`;
const StyledPage2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(250,240,230);
`;
const StyledPage3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(253,245,230);
`;
const StyledPage4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(255,239,213);
`;
const StyledPage5 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    height: 300px;
    font-size: 1.5em; 
    padding-top: 50px;
    padding-right: 200px;
    padding-bottom: 50px;
    padding-left: 200px;
    background-color: rgb(255,245,238);
`;
// const StyledPage6 = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: 2px solid black;    
//     font-size: 1.5em; 
//     padding-top: 50px;
//     padding-right: 200px;
//     padding-bottom: 50px;
//     padding-left: 200px;
//     background-color: rgb(255,245,238);
// `;
// const StyledPage7 = styled.div`
//     display: flex;
//     align-content: stretch; 
//     p{font-size: 1.2rem}
// `;

class LoginPage extends React.Component {
    state = {
        auth: {
            username: '',
            password: '',
        }
    };
    handleChanges = event => {
        this.setState({
            auth: {
                ...this.state.auth,
                [event.target.name]: event.target.value
            }
        });
    };
    login = event => {
        event.preventDefault();
        // check auth for proper info
        console.log(this.state.auth);  // No console
        this.props.LogIn(this.state.auth).then(() => {
            this.props.history.push('/');
        })
    };
    
    render() {
        return (
            <div style={{height: "100%", background: 'linear-gradient(to bottom, #ffafbd , #ffc3a0)'}} >
                <NavBar />
                <StyledTopBar>
                    <h1>Welcome to AirBnB Price Navigator</h1>
                    <h3>Know the value of your property</h3>
                    <h3>Enter your information below:</h3>
                </StyledTopBar>
                <StyledFullInputsDiv>
                    <FullInputs />
                </StyledFullInputsDiv>
                <StyledTestingBox>
                    <h1>Amenities</h1>
                    <p>Did you know amenities are a necessary part
                       of any valuable Airbnb listing, we’ve found that,
                       on average, homes that have more than 85 amenities
                       list for an additional 100% price increase than homes with 28 or fewer amenities.
                       Essential amenities include towels, toilet paper, soap, pillow and bed linings. 
                    </p>
                </StyledTestingBox>
                <StyledPage>
                    <h1>Bed Types</h1>
                    <p>Did you know bed types can have a notable influence on your daily listing price? We’ve found that, on average, real beds go for an 80% price increase as compared to airbeds.</p>
                </StyledPage>
                <StyledPage2>
                    <h1>Instant Bookable</h1>
                    <p>There is an option on Airbnb that enables for a home to be instantly bookable; interestingly enough we’ve found that on average, homes that are instant bookable will have a lower listing price.</p>
                </StyledPage2>
                <StyledPage3>
                    <h1>Reviews</h1>
                    <p>While it may be intuitive that having high review score ratings can increase your daily listing price, having at least 60 reviews will get you, on average, an increase in listing price of 20% as compared to people who have received 20 to 60 reviews.</p>
                </StyledPage3>
                <StyledPage4>
                    <h1>Build Trust</h1>
                    <p>It is important to build an image of trust with your customers; don’t forget to upload a profile picture with your listing, as listings whose owners have profile pictures have daily listing prices of 30% greater than listings with no accompanying profile picture.</p>
                </StyledPage4>
                <StyledPage5>
                    <h1>Identity</h1>
                    <p>Also, don’t forget to add your identity! Users who have their identity verifies we’ll see a 5% increase in their listing prices.</p>
                </StyledPage5>
                <Container>
                    <h2>Meet The Team</h2>

                        <Row>
                            <Col xs="6" sm="4">

                            <div class = "albert">
                                <div>
                                    <a href="https://github.com/albert-h-wong">
                                        <img class= "a-img" src="/Images/albert.png" alt = "albert"></img>
                                    </a>
                                </div>
                                <div class = "a-content">
                                    <h3>Albert Wong</h3> 
                                    <h4>Team Lead</h4>               
                                    <p>Project scrum master responsible for facilitating overall team execution.</p>
                                </div>
                            </div>
                            </Col>
                            
                            <Col xs="6" sm="4">
                            <div class = "connor">
                                <div>
                                    <a href="https://github.com/connorpheraty">
                                        <img class= "a-img" src="/Images/connor.png" alt = "connor"></img>
                                    </a>
                                </div>
                                <div class = "connor-content">                
                                    <h3>Connor Heraty</h3>
                                    <p>Product Owner. Responsible for model implementation and flask deployment.</p>
                                </div>
                            </div>
                            </Col>
                            
                            <Col xs="6" sm="4">
                            <div class = "tomas">
                                <div>
                                    <a href="https://github.com/tomfox1">
                                        <img class= "a-img" src="/Images/tomasfox.png" alt = "tomas"></img>
                                    </a>
                                </div>
                                <div class ="t-content">
                                    <h3>Tomas Fox</h3>
                                    <p>Responsible for benchmarking our Airbnb 
                                        predictor app against Tree Ensemble ML 
                                        models. Created visualizations and 
                                        liaised with the Web Development team to 
                                        work on layout and styling.</p>
                                </div>
                            </div>
                            </Col>
                        </Row>

                    <Row>
                        <Col xs="6" sm="4">
                            <div class = "shreyas">
                                <div>
                                    <a href="https://github.com/ShreyasJothish">
                                        <img class= "a-img" src="/Images/tomasfox.png" alt = "shreyas"></img>
                                    </a>
                                </div>
                                <div class = "sh-content">
                                    <h3>Shreyas</h3>
                                    <p>Worked on Data Wrangling, 
                                        Feature Engineering, and Data Modeling 
                                        of Seasonal information Los Angels Air 
                                        BnB dataset.</p>
                                </div>
                            </div>
                        </Col>


                    <Col xs="6" sm="4">
                    <div class = "chris">
                        <div>
                        <a href="https://github.com/ChrisJCarter91">
                            <img class= "a-img" src="/Images/tomasfox.png" alt = "chris"></img>
                        </a>
                        </div>
                        <div class = "ch-content">
                            <h3>Chris Carter</h3>
                            <p>Responsible for the Front End of the project 
                            while partnering with the UI Developers and 
                            Back End Architect to ensure full 
                            functionality of React components.</p>
                        </div>
                    </div>
                
                    </Col>

                <Col xs="6" sm="4">
                    <div class = "sam">
                        <div>
                            <a href="https://github.com/samjeffcoat">
                                <img class= "a-img" src="/Images/tomasfox.png" alt = "sam"></img>
                            </a>
                        </div>
                    <div class = "s-content">                
                        <h3>Sam Jeffcoat</h3>
                        <p>Created BackEnd API for our AirBnB predictor 
                            App using NodeJS/Express. Built database 
                            to store user information as well as 
                            property information. Ccollaborated with 
                            Data Science and Front End Team to build a 
                            Restful API.</p>
                    </div>
                    </div>
                    </Col>
                    </Row>

                <Row>
                    <Col xs="6" sm="4"> 
                    <div class = "kelly">
                        <div>
                            <a href="https://github.com/misskellymore">
                                <img class= "a-img" src="/Images/tomasfox.png" alt = "kelly"></img>
                            </a>
                        </div>
                        <div class = "k-content">
                            <h3>Kelly Moreira</h3>
                            <p>Responsible for creating the multi-page 
                                marketing website and making it 
                                responsive to mobile and desktop screen 
                                widths. Creating a call to action that 
                                links the user to the React Application. 
                                Partnered with other UI Developers and the 
                                Front End Architect.</p>
                        </div>
                    </div>
                    </Col>

                    <Col xs="6" sm="4"> 
                    <div class = "fnu">
                        <div>
                            <a href="https://github.com/bharti3bk">
                                <img class= "a-img" src="/Images/tomasfox.png" alt = "fnu"></img>
                            </a>
                        </div>
                        <div class = "f-content">
                            <h3>Fnu Bharti</h3>
                            <p>Responsible for creating the multi-page 
                                marketing website and making it 
                                responsive to mobile and desktop screen 
                                widths. Creating a call to action that 
                                links the user to the React Application. 
                                Partnered with other UI Developers and the 
                                Front End Architect.</p>
                        </div>
                    </div>
                    </Col>

                    <Col xs="6" sm="4"> 
                    <div class = "noor">
                        <div>
                            <a href="https://github.com/nooraldarraji">
                                <img class= "a-img" src="/Images/tomasfox.png" alt = "noor"></img>
                            </a>
                        </div>
                        <div class = "n-content">
                            <h3>Noor Al Darraji</h3>
                            <p>Responsible for creating the multi-page 
                                    marketing website and making it 
                                    responsive to mobile and desktop screen 
                                    widths. Creating a call to action that 
                                    links the user to the React Application. 
                                    Partnered with other UI Developers and the 
                                    Front End Architect.</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </div>
        )};
}
const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});
export default connect(mapStateToProps, { LogIn })(LoginPage);