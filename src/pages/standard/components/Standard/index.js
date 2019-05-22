import React, {Component} from 'react';
import {actions} from 'mirrorx';
import {Button} from 'antd';
import TrendChart from '../TrendChart';

import './index.less';


class Standard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {

        return (
            <div >
               <Button type="primary">Primary</Button>
               <TrendChart />
            </div>
        )
    }
}

export default Standard;
