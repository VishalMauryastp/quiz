import React from 'react';
import { Card, Button, Tag, Dropdown, Menu, Space } from 'antd';
import { EyeOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const QuizCard = ({ quiz }) => {
    const menu = (
        <Menu>
            <Menu.Item key="share">Share</Menu.Item>
            <Menu.Item key="duplicate">Duplicate</Menu.Item>
            <Menu.Item key="archive">Archive</Menu.Item>
            <Menu.Item key="delete" danger>
                Delete
            </Menu.Item>
        </Menu>
    );

    return (
        <Card
            className="shadow-lg rounded-lg border-t-4 border-primary-500 hover:shadow-xl transition-shadow duration-300" // Using a border with primary color
            title={
                <div className="flex justify-between items-center">
                    <span className="text-xl font-medium text-gray-900">{quiz.title}</span>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <Button type="text" icon={<EllipsisOutlined />} />
                    </Dropdown>
                </div>
            }
            extra={
                <Tag
                    color={quiz.status === 'Published' ? 'green' : 'blue'}
                    className="text-sm px-3 py-1 rounded-full"
                >
                    {quiz.status}
                </Tag>
            }
        >
            <p className="text-gray-600 mb-4 text-base">{quiz.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>Last Modified: {quiz.dateModified}</span>
                <span>Responses: {quiz.responses}</span>
            </div>
            <Space>
                <Button
                    icon={<EyeOutlined />}
                    className="bg-primary text-white hover:bg-primary-dark border-primary hover:border-primary-dark"
                    onClick={() => console.log('View Quiz:', quiz.id)}
                >
                    View Quiz
                </Button>
                <Button
                    icon={<EditOutlined />}
                    className="text-primary border-primary hover:bg-primary-light hover:text-white"
                    onClick={() => console.log('Edit Quiz:', quiz.id)}
                >
                    Edit
                </Button>
            </Space>
        </Card>
    );
};

export default QuizCard;