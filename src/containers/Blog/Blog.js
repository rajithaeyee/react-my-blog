import React, {Component} from 'react';
import { Layout } from 'antd';
import axios from  'axios';

const {
     Content,
  } = Layout;

class Blog extends Component{
    componentDidMount(){
        axios.get('http://localhost:3001/posts').then(result=>{
            console.log(result.data);
        });
    }
    render(){
        return(
            <h1>Blog</h1>
        );
    }
}

export default Blog;



