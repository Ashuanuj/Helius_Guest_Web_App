import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import MainSubcategoryPage from './pages/SubcategoryPages/MainSubcategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import WakeUp from './pages/WakeUp';
import FrontOffice from './pages/FrontOffice';
import RequestMain from './pages/RequestPages/RequestMain';
import RequestFormPage from './pages/RequestFormPage'

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`;

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #e3f2fd;
  font-family: "Open Sans", sans-serif;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    color: #0d47a1;
  }
  p {
    font-size: 1rem;
    max-width: 400px;
    margin: 20px auto;
    color: #37474f;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #4776e6;
    border-radius: 5px;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
  }

  img {
    border-radius: 50%;
  }
`;

const HomePageElm = styled(Page)`
  &.page-enter {
    animation: ${slideInLeft} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.2s forwards;
  }
`;
const DetailsPageElm = styled(Page)`
  background-color: #90caf9;
  &.page-enter {
    animation: ${slideInRight} 0.2s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.2s forwards;
  }
`;




function App() {
    return (
        <Router>
            <Route
                render={({ location }) => {
                    console.log(location, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                    return (
                        // <PageContainer>
                            <TransitionGroup component={null}>
                                <CSSTransition
                                    timeout={300}
                                    classNames=""
                                    key={location.key}
                                >
                                    <Switch location={location}>
                                    <Route exact path="/" component={RequestFormPage} />
                                        <Route exact path="/dashboard" component={DashboardPage} />
                                        {/* <Route exact path="/" component={HomePage} /> */}
                                        <Route exact path="/services" component={ServicesPage} />
                                        <Route exact path="/subcategorypages/mainsubcategorypage" component={MainSubcategoryPage} />
                                        <Route exact path="/checkout" component={CheckoutPage} />
                                        <Route exact path="/wakeup" component={WakeUp} />
                                        <Route exact path="/frontoffice" component={FrontOffice} />
                                        <Route exact path="/requestmain" component={RequestMain} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        // </PageContainer>
                    );
                }}
            />
        </Router>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App
