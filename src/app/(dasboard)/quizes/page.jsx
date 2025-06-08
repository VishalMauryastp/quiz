'use client'
import React from 'react';
import { Layout, Menu, Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import QuizCard from '@/components/quiz-card';
const { Header, Content, Footer } = Layout;

const Quizes = () => {
    const recentQuizzes = [
        {
            id: 'q1',
            title: 'General Knowledge Quiz',
            description: 'Test your knowledge on various topics.',
            dateModified: '2025-06-05',
            responses: 125,
            status: 'Published',
        },
        {
            id: 'q2',
            title: 'Science Aptitude Test',
            description: 'Quiz for science enthusiasts.',
            dateModified: '2025-06-03',
            responses: 80,
            status: 'Draft',
        },
        {
            id: 'q3',
            title: 'History of India',
            description: 'A comprehensive quiz on Indian history.',
            dateModified: '2025-06-01',
            responses: 200,
            status: 'Published',
        },
    ];

    return (
        <Layout className="min-h-screen bg-gray-100">
            <Header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
                <div className="text-2xl font-bold text-gray-800">Quiz Dashboard</div>
                <div className="flex items-center space-x-4">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        className="bg-primary hover:bg-primary-dark" // Assuming 'primary' is defined in tailwind.config.js
                    >
                        Create New Quiz
                    </Button>
                    {/* User profile/avatar can go here */}
                </div>
            </Header>
            <Content className="p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Recent Quizzes Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Recent Quizzes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentQuizzes.map((quiz) => (
                                <QuizCard key={quiz.id} quiz={quiz} />
                            ))}
                        </div>
                    </section>

                    {/* You can add All Quizzes, Search, and Filters here */}
                    <section>
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">All Quizzes</h2>
                        {/* Implement search, filter, and a list of all quizzes here */}
                        <div className="text-gray-600">
                            (This section would list all quizzes, potentially with pagination, search, and filters)
                        </div>
                    </section>
                </div>
            </Content>
            <Footer className="text-center text-gray-600 py-4 bg-white shadow-inner">
                Quiz Platform ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default Quizes;