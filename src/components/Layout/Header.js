// import Avatar from '../Avatar';
// import { UserCard } from 'components/Card';
// import Notifications from 'components/Notifications';
// import SearchInput from 'components/SearchInput';
// import { notificationsData } from 'demos/header';
// import withBadge from 'hocs/withBadge';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import componentImg from '../assets/img/bg/component.png'

// import {MdClearAll, MdClose} from 'react-icons/md';
// import {Button, 
  // NavbarToggler,
  // Nav,
  // Navbar,
  // NavItem,
  // NavLink,
  // Popover,
  // PopoverBody,
  // ListGroupItem,
  // ListGroup
// } from 'reactstrap';
// import bn from 'utils/bemnames';
// import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


// const bem = bn.create('header');

// const MdNotificationsActiveWithBadge = withBadge({
//   size: 'md',
//   color: 'primary',
//   style: {
//     top: -10,
//     right: -10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   children: <small>5</small>,
// })(MdNotificationsActive);

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
  <>
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

    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/services">
        {['Service'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>

      </List>
      {/* <Divider /> */}
      <List>
      <Link to="/myrequest">
        {['My Request'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>
      </List>
      <List>
      <Link to="/logout">
        {['Logout'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
        </Link>
      </List>
    </div>
    </>
  );

  // const fullList = side => (
  //   <div
  //     className={classes.fullList}
  //     role="presentation"
  //     onClick={toggleDrawer(side, false)}
  //     onKeyDown={toggleDrawer(side, false)}
  //   >
  //         <div className="sidebarImg-main">
  //             <img
  //               src={componentImg}
  //               className="sidebarImg"
  //               alt="cmp"
  //             />
  //             <span className="text-white">
  //               Welcome Mr Bansal
  //             </span>
  //           </div>
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}></Button> */}
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            // edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleOutsideClick = this.handleOutsideClick.bind(this);

//     this.state = {
//       popupVisible: false,
//       toggle: false
//     };
//   }

//   handleClick() {
//     if (!this.state.popupVisible) {
//       // attach/remove event handler
//       document.addEventListener('click', this.handleOutsideClick, false);
//     } else {
//       document.removeEventListener('click', this.handleOutsideClick, false);
//     }

//     this.setState(prevState => ({
//       popupVisible: !prevState.popupVisible,
//     }));
//   }

//   handleOutsideClick(e) {
//     // ignore clicks on the component itself
//     // if (this.node.contains(e.target)) {
//     //   return;
//     // }
//     console.log(this.state.toggle, 'OOOOOOOOOOOPPPPPPPPPPPEEEEEEEE')
//     this.setState({
//       toggle: false
//     }, console.log(this.state.toggle, 'IIIIIIIIIIIIIII'))

//     this.handleClick();
//   }
//   // state = {
//   // isOpenNotificationPopover: false,
//   // isNotificationConfirmed: false,
//   // isOpenUserCardPopover: false,
//   // toggle: false
//   // };

//   // toggleNotificationPopover = () => {
//   //   this.setState({
//   //     isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
//   //   });

//   //   if (!this.state.isNotificationConfirmed) {
//   //     this.setState({ isNotificationConfirmed: true });
//   //   }
//   // };

//   // toggleUserCardPopover = () => {
//   //   this.setState({
//   //     isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
//   //   });
//   // };

//   handleSidebarControlButton = event => {
//     event.preventDefault();
//     event.stopPropagation();
//     document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
//     if (!this.state.toggle) {
//       // attach/remove event handler
//       document.addEventListener('click', this.handleOutsideClick, false);
//     } else {
//       document.removeEventListener('click', this.handleOutsideClick, false);
//     }

//     this.setState(prevState => ({
//       toggle: true,
//     }), () => console.log(this.state.toggle, 'QQQQQQ'));
//     console.log(this.state.toggle, 'QQQQQQQWWWWWWWWWWWWEEEEEEERRRRRRRRR')
//     //  this.setState({
//     //    toggle: !this.state.toggle
//     //  })
//   };

//   render() {
//     // const { isNotificationConfirmed } = this.state;

//     return (
//       <Navbar expand navbar-inverse className={bem.b('bgNav')} ref={node => { this.node = node; }}>
//         <Nav navbar navbar-fixed-top className="mr-2">
//           {!this.state.toggle ?
//             <Button className="ToggleBtn btn-outline-info btn btn-info" onClick={this.handleSidebarControlButton}>
//               <MdClearAll size={25} />
//             </Button> : <div></div>}
//           {/* <Button className="ToggleBtn btn-outline-info btn btn-info" onClick={this.handleSidebarControlButton}>
//             <MdClose size={25} />
//           </Button>} */}

//         </Nav>
//         <Nav className="Nav-Name">
//           Welcome Mr.Bansal
//         </Nav>

//         <Nav navbar className={bem.e('nav-right')}>
//           <NavItem className="d-inline-flex">
//             {/* <NavLink id="Popover1" className="position-relative">
//               {isNotificationConfirmed ? (
//                 <MdNotificationsNone
//                   size={25}
//                   className="text-secondary can-click"
//                   onClick={this.toggleNotificationPopover}
//                 />
//               ) : (
//                 <MdNotificationsActiveWithBadge
//                   size={25}
//                   className="text-secondary can-click animated swing infinite"
//                   onClick={this.toggleNotificationPopover}
//                 />
//               )}
//             </NavLink> */}
//             {/* <Popover
//               placement="bottom"
//               isOpen={this.state.isOpenNotificationPopover}
//               toggle={this.toggleNotificationPopover}
//               target="Popover1"
//             >
//               <PopoverBody>
//                 <Notifications notificationsData={notificationsData} />
//               </PopoverBody>
//             </Popover> */}
//             <Link to="/checkout"><span> <FaShoppingCart size={25} style={{ color: '#fff' }} /></span></Link>
//           </NavItem>

//           {/* <NavItem>
//             <NavLink id="Popover2">
//               <Avatar
//                 onClick={this.toggleUserCardPopover}
//                 className="can-click"
//               />
//             </NavLink>
//             <Popover
//               placement="bottom-end"
//               isOpen={this.state.isOpenUserCardPopover}
//               toggle={this.toggleUserCardPopover}
//               target="Popover2"
//               className="p-0 border-0"
//               style={{ minWidth: 250 }}
//             >
//               <PopoverBody className="p-0 border-light">
//                 <UserCard
//                   title="Test"
//                   subtitle="test@test.com"
//                   text="Last updated 3 mins ago"
//                   className="border-light"
//                 >
//                   <ListGroup flush>
//                     <ListGroupItem tag="button" action className="border-light">
//                       <MdPersonPin /> Profile
//                     </ListGroupItem>

//                     <ListGroupItem tag="button" action className="border-light">
//                       <MdSettingsApplications /> Settings
//                     </ListGroupItem>
                
//                     <ListGroupItem tag="button" action className="border-light">
//                       <MdExitToApp /> Signout
//                     </ListGroupItem>
//                   </ListGroup>
//                 </UserCard>
//               </PopoverBody>
//             </Popover>
//           </NavItem> */}
//         </Nav>
//       </Navbar>
//     );
//   }
// }

// export default Header;
