import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';

import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import RequestFormPage from './pages/RequestFormPage'
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/myStyles.scss';
import { CSSTransition } from 'react-transition-group'

import DashboardPage from './pages/DashboardPage';
import ServicesPage from './pages/ServicesPage';
import MainSubcategoryPage from './pages/SubcategoryPages/MainSubcategoryPage';
import CheckoutPage from './pages/CheckoutPage';
import WakeUp from './pages/WakeUp';
import FrontOffice from './pages/FrontOffice';
import RequestMain from './pages/RequestPages/RequestMain';

// const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
// const ServicesPage = React.lazy(() => import('pages/ServicesPage'));
// const MainSubcategoryPage = React.lazy(() => import('pages/SubcategoryPages/MainSubcategoryPage'));
// const CheckoutPage = React.lazy(() => import('pages/CheckoutPage'));
// const WakeUp = React.lazy(() => import('pages/WakeUp'));
// const FrontOffice = React.lazy(() => import('pages/FrontOffice'));
// const RequestMain =  React.lazy(() => import('pages/RequestPages/RequestMain'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


const routes = [
  { path:"/dashboard", Component:DashboardPage },
  { path:"/services", Component:ServicesPage },
  { path:"/subcategorypages/mainsubcategorypage" ,Component:MainSubcategoryPage },
  { path:"/checkout",Component:CheckoutPage },
  { path:"/wakeup" ,Component:WakeUp},
  { path:"/frontoffice",Component:FrontOffice},
  { path:"/requestmain" ,Component:RequestMain},
]

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
     
          <Switch>
            <Route exact path="/" component={RequestFormPage} />
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
               <React.Suspense fallback={<PageSpinner />}>
              {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => (
                      <CSSTransition
                        in={match != null}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                      >
                        <div className="page">
                          <Component />
                        </div>
                      </CSSTransition>
                    )}
                  </Route>
                ))}
                {/* <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/services" component={ServicesPage} />
                <Route exact path="/subcategorypages/mainsubcategorypage" component={MainSubcategoryPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/wakeup" component={WakeUp} />
                <Route exact path="/frontoffice" component={FrontOffice} />
                <Route exact path="/requestmain" component={RequestMain} /> */}
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
       
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width > 1024) {
      return { breakpoint: 'md' };
  }

  if (1025 < width && width > 1399) {
    return { breakpoint: 'lg' };
  }

  if (width > 1400) {
    return { breakpoint: 'xl' };
  }

  // old one
  // if (width < 575) {
  //   return { breakpoint: 'xs' };
  // }

  // if (576 < width && width < 767) {
  //   return { breakpoint: 'sm' };
  // }

  // if (768 < width && width < 991) {
  //   return { breakpoint: 'md' };
  // }

  // if (992 < width && width < 1199) {
  //   return { breakpoint: 'lg' };
  // }

  // if (width > 1200) {
  //   return { breakpoint: 'xl' };
  // }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);