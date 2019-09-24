import React,{Component} from 'react';
// import {Button} from 'reactstrap';

export class Tabs extends React.Component{
    constructor(){
        super();
        this.state = {
            activeTabIndex: 1
        }
    }

    render() {
        const {children} = this.props;
        return (
            <div>
            <nav>
                {/*the parameter el is our array entity, i a the index of the Iteration (starting at 0)*/}
                {children.map((el,i) => 
                <span key={i} className={this.state.activeTabIndex === el.props.tab ? 'active btnTab' : 'btnTab'} 
                onClick={() => this.setState({activeTabIndex: parseInt(el.props.tab,10)})}> Breakfast {el.props.tab} </span>)}
            </nav>
            <div className="divider"></div>
            <div>{children[this.state.activeTabIndex-1]}</div>
            </div>
        );
    }
}

// Content is coming from TabList.js 
export class TabPane extends Component {
    render() {
        return (
            <div className='tabContent'>
                {this.props.children}
            </div>
        );
    }
}
