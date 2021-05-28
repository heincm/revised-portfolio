import React from 'react';
import 'antd/dist/antd.css';
import './CustomHeaderStyle.css';
import { Link } from 'react-router-dom';
import { Menu} from 'antd';
import { MailOutlined, HomeOutlined, MenuOutlined, LaptopOutlined, ToolOutlined, IdcardOutlined } from '@ant-design/icons';
const { SubMenu } = Menu


class CustomHeader extends React.Component {

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
                icon: <LaptopOutlined />,
            },
            {
                name: "Technologies",
                link: "/languages",
                icon: <ToolOutlined />,
            },
            {
                name: "Hire Me",
                link: "/hireme",
                icon: <IdcardOutlined />,
                // disabled: true
            },
            {
                name: "Contact",
                link: "/contact",
                icon: <MailOutlined />,
            }
        ]

        const menuies = menuItems.map(e => {
            return (
                <Menu.Item className="menu_item" key={e.name} disabled={e.disabled ? true : false}>
                    <Link to={e.link} className="menu_item_two">
                        {e.icon}{e.name}
                    </Link>
                </Menu.Item>)
        })

        return (
            <>
                <nav className="nav" role="navigation">
                    <div className="nav-wrapper container">
                        <Menu mode="inline" className="mobile-nav">
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