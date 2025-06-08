'use client'
import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const currentPath = usePathname(); // Get current path without query params

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const menuItems = [
        {
            key: 'a',
            label: <div className="demo-logo-vertical flex items-center justify-center h-16">
                <Link href="/dashboard" className="text-white text-xl font-bold">
                    Logo
                </Link>
            </div>
        },
        {
            key: '/dashboard',
            icon: <UserOutlined />,
            label: <Link href="/dashboard">Dashboard</Link>,
        },
        {
            key: '/dashboard/quizes',
            icon: <VideoCameraOutlined />,
            label: <Link href="/dashboard/quizes">Quizes</Link>,
        },

    ];

    return (
        <Layout className='h-svh'>
            <Sider style={{ background: colorBgContainer }} trigger={null} collapsible collapsed={collapsed}>

                {/* Sidebar Menu with Active State */}
                <Menu
                    mode="inline"
                    selectedKeys={[currentPath]}
                    items={menuItems}
                />
            </Sider>

            <Layout>
                {/* Header with Collapse Toggle */}
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>

                {/* Main Content Area */}
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;