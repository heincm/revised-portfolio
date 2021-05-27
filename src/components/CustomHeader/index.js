import React from 'react';
import 'antd/dist/antd.css';
import './CustomHeaderStyle.css';
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { MailOutlined, HomeOutlined, MenuOutlined, LaptopOutlined, ToolOutlined } from '@ant-design/icons';
const { SubMenu } = Menu


class CustomHeader extends React.Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    render() {

        const menuItems = [
            {
                name: "Home",
                link: "/index",
                icon: <HomeOutlined />,
            },
            {
                name: "Portfolio",
                link: "/portfolio",
                icon: <LaptopOutlined />
            },
            {
                name: "Technologies",
                link: "/languages",
                icon: <ToolOutlined />
            },
            {
                name: "Hire Me",
                link: "/hireme",
                icon: <MailOutlined />
            },
            {
                name: "Contact",
                link: "/contact",
                icon: <MailOutlined />
            }
        ]

        const menuies = menuItems.map(e => {
            return (
                <Menu.Item className="menu_item" key={e.name}>
                    <Link to={e.link} className="menu_item_two">
                        {e.icon}{e.name}
                    </Link>
                </Menu.Item>)
        })

        const { current } = this.state;

        return (
            <>
                <nav className="nav" role="navigation">
                    <div className="nav-wrapper container">
                        <Menu onClick={this.handleClick} mode="inline" className="mobile-nav">
                            <SubMenu key="sub1" icon={<MenuOutlined />} title="Menu">
                                {menuies}
                            </SubMenu>
                        </Menu>
                        <Menu mode="horizontal" className="large-nav">
                            {menuies}
                        </Menu>
                    </div>
                </nav>
            </>
        )
    }
}

export default CustomHeader;