import componentImg from '../assets/img/bg/component.png'
// import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
// import SourceLink from 'components/SourceLink';
import React from 'react';
// import { FaCloud } from 'react-icons/fa';
import {
  MdDashboard,
  // MdKeyboardArrowDown,
  MdPages,
  MdSettingsPower,
  MdTimer,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const navRequest =[
  {  to: '/requestmain', name: 'Request', exact: false, Icon: MdTimer  },
];

const pageContents = [
  {  to: '/', name: 'Logout', exact: false, Icon: MdSettingsPower  }
];

const navItems = [
  { to: '/dashboard', name: 'Service', exact: false, Icon: MdDashboard },
];

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

  // handleSidebarControlButton = event => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--close');
  // };

  render() {
    return (
      <aside className={bem.b()} data-image="" >
        <div className={bem.e('background')} />
        <div className={bem.e('content')}>
          {/* <Button className="CloseBtn btn-outline-info btn-info"  onClick={this.handleSidebarControlButton}>
            <MdClose size={25} />
          </Button> */}
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
                  className=""
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="sidebar-text">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            {/* Request part */}
            {navRequest.map(({ to, name, exact}, index) => (
             <NavItem
              className={bem.e('nav-item')} key={index}
              onClick={this.handleClick('Pages')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}  
               id={`navItem-${name}-${index}`}
               tag={NavLink}
               to={to}
               activeClassName="active"
               exact={exact}
              >
                <div className="d-flex">
                  <MdPages className={bem.e('nav-item-icon')} />
                  <span className="sidebar-text">My Request</span>
                </div>
               </BSNavLink>
            </NavItem>
             ))}

          {/* Logout part */}
           {pageContents.map(({ to, name, exact, Icon }, index) => (
            <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className=""
                    tag={NavLink}
                    to={to}
                    activeClassName="active"
                    exact={exact}
                  >
                     <Icon className={bem.e('nav-item-icon')} />
                    <span className="sidebar-text">{name}</span>
                   </BSNavLink>
                </NavItem>
            ))} 
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
