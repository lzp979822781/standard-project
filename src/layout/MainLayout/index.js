import React, {Component} from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';
import classNames from 'classnames';

import './index.less';

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }

    componentDidMount() {
        
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {

        let {collapsed} = this.state;
        let fontClass = classNames('icon-font', {
           hide : collapsed,
        });

        return (
            <Layout className="main-layout">
                <Layout.Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <span className= {`${fontClass}`}>汉正德艺</span>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>

                <Layout>
                    <Layout.Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Layout.Header>
                    <Layout.Content
                        style={{
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Layout.Content>
                </Layout>

            </Layout>
            
        )
    }
}

export default MainLayout;
