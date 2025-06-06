'use client'
import React from 'react';
import { Button, Form, Input, Checkbox, Typography, ConfigProvider, Divider } from 'antd';
import { MailOutlined, LockOutlined, GoogleCircleFilled } from '@ant-design/icons';
import { Award } from 'lucide-react';

const { Title, Text, Link } = Typography;




// --- Main Login Page Component ---
export default function LoginPage() {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        // Handle login logic here
    };

    return (

        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                    <div className="flex justify-center items-center space-x-2 mb-2">
                        <Award size={36} className="text-[#ed4192]" />
                        <Title level={2} className="!mb-0 !text-3xl font-bold text-gray-800">QuizMaster</Title>
                    </div>
                    <Text type="secondary">Welcome back! Please sign in to your account.</Text>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    size="large"
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, type: 'email', message: 'Please input a valid Email!' }]}
                    >
                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div className="flex justify-between items-center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Link href="#">
                                Forgot password?
                            </Link>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full !font-semibold">
                            Log in
                        </Button>
                    </Form.Item>

                    <Divider>Or</Divider>

                    <Form.Item>
                        <Button  className="w-full !font-semibold !flex items-center justify-center">
                            <GoogleCircleFilled color='ed4192' />                            Sign in with Google
                        </Button>
                    </Form.Item>

                    <Text type="secondary" className="text-center block">
                        Don't have an account? <Link href="#">Sign up now</Link>
                    </Text>
                </Form>
            </div>
        </div>
    );
}
