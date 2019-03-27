import React from 'react';

import { Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import NavBar from './../../containers/NavBar/NavBar';
import Blog from './../../containers/Blog/Blog';
import NewPost from './../../containers/NewPost/NewPost';

const layout = (props)=>{
    return (
        <div>
            <Row>
                <Col span={12}><NavBar /></Col>
                <Col span={12}> <Route path="/" exact component={Blog}/></Col>
                <Col span={12}><Route path="/new" exact component={NewPost}/></Col>
            </Row>
            
        </div>
    );

}

export default layout;