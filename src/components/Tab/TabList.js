import React, { Component } from 'react';
import { Tabs, TabPane } from './Tabs';
import  Subcategory1  from '../../pages/SubcategoryPages/Subcategory1';

class TabList extends Component {
  render() {
    return (
      <div className='Tabmain'>
        <Tabs activeTab='1'>
          <TabPane tab='1'>< Subcategory1/></TabPane>
          <TabPane tab='2'>One</TabPane>
          <TabPane tab='3'>Two</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default TabList;