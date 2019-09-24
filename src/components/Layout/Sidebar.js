import componentImg from '../assets/img/bg/component.png'
// import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
// import SourceLink from 'components/SourceLink';
import React from 'react';
// import { FaCloud } from 'react-icons/fa';
import {
  MdDashboard,
  MdKeyboardArrowDown,
  MdPages,
  MdSettingsPower,
  MdTimer
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  // Collapse,
  Nav,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

// const sidebarBackground = {
//   backgroundImage: `url("${sidebarBgImage}")`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

// const navComponents = [
//   {  to: '/subcategorypages/mainsubcategorypage', name: 'Sub-Services', exact: false, Icon: MdFreeBreakfast  },
// ];

// const navCarts = [
//   { to: '/checkout', name: 'Checkout', exact: false, Icon: MdCheckBoxOutlineBlank },
//   {  to: '/frontoffice', name: 'FrontOffice', exact: false, Icon: MdTimer  },
//   {  to: '/requestmain', name: 'RequestMain', exact: false, Icon: MdTimer  },
// ];

const navRequest =[
  {  to: '/wakeup', name: 'WakeUp', exact: false, Icon: MdTimer  },
];

const pageContents = [
  {  to: '/logout', name: 'logout', exact: false, Icon: MdSettingsPower  }
];

const navItems = [
  { to: '/dashboard', name: 'Service', exact: true, Icon: MdDashboard },
];

// const navService = [
//   {  to: '/services', name: 'services', exact: false, Icon: MdPages  },
// ]

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image="" >
        <div className={bem.e('background')} />
        <div className={bem.e('content')}>
          {/* <Navbar> */}
            <div className="sidebarImg-main">
              <img
                src={componentImg}
                className="sidebarImg"
                alt="cmp"
              />
              <span className="text-white">
                Welcome Mr Bansal
              </span>
            </div>
          {/* </Navbar> */}
          <Nav vertical>
            {/* Dashboard Part */}
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            
            {/* Service part */}
            {/* {navService.map(({ to, name, exact}, index) => (
             <NavItem
              className={bem.e('nav-item')} key={index}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse text-uppercase')}  
               id={`navItem-${name}-${index}`}
               tag={NavLink}
               to={to}
               activeClassName="active"
               exact={exact}
              >
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">SERVICES</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
             ))}
            <Collapse isOpen={this.state.isOpenPages}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase sub"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}
            
            {/* Request part */}
            {navRequest.map(({ to, name, exact}, index) => (
             <NavItem
              className={bem.e('nav-item')} key={index}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse text-uppercase')}  
               id={`navItem-${name}-${index}`}
               tag={NavLink}
               to={to}
               activeClassName="active"
               exact={exact}
              >
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="">My Request</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem>
             ))}
            {/* <Collapse isOpen={this.state.isOpenPages}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase sub"
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                    <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                  </BSNavLink>
                </NavItem>
              ))}
            </Collapse> */}

               {pageContents.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                   activeClassName="active"
                    exact={exact}
                  >
                     <Icon className={bem.e('nav-item-icon')} />
                    <span className="">{name}</span>
                   </BSNavLink>
                </NavItem>
              ))} 
              
              {/* Cart part */}
              {/* {navCarts.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))} */}
           
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
