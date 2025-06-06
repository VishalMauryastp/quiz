'use client'
import React, { useState } from 'react';
import { Button, Card, Avatar, Typography, ConfigProvider } from 'antd';
import { Menu, X, Award, BrainCircuit, Users, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const { Title, Paragraph } = Typography;

// --- Mock Data ---
const features = [
  {
    icon: <BrainCircuit size={48} className="text-primary" />,
    title: 'Diverse Topics',
    description: 'Explore quizzes across a wide range of subjects, from history and science to pop culture and programming.',
  },
  {
    icon: <Users size={48} className="text-primary" />,
    title: 'Compete with Friends',
    description: 'Challenge your friends and see who comes out on top. Track your scores on shared leaderboards.',
  },
  {
    icon: <BarChart2 size={48} className="text-primary" />,
    title: 'Track Your Progress',
    description: 'Monitor your performance over time, identify your strengths, and see where you can improve.',
  },
];

const testimonials = [
  {
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    comment: "This is the best quiz app I've ever used! The variety of topics is amazing.",
  },
  {
    name: 'Samantha Lee',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    comment: "I love competing with my friends. It adds a whole new layer of fun to trivia nights!",
  },
  {
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    comment: 'The progress tracking feature is surprisingly motivating. Highly recommended!',
  },
];

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
      <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
      <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a>
    </>
  );

  return (

    <div className="bg-gray-50 min-h-screen font-sans">
      {/* --- Header --- */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Award size={32} className="text-primary" />
            <Title level={4} className="!mb-0 !text-2xl font-bold text-gray-800">QuizMaster</Title>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Link href='/auth/login'>
              <Button type="primary" size="large">
                Login
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* --- Mobile Menu --- */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <nav className="flex flex-col items-center space-y-4">
              <NavLinks />
              <Button type="primary" size="large" className="w-11/12">Get Started</Button>
            </nav>
          </div>
        )}
      </header>

      {/* --- Main Content --- */}
      <main>
        {/* --- Hero Section --- */}
        <section className="text-center py-20 px-6 bg-white">
          <div className="container mx-auto">
            <Title level={1} className="!text-4xl md:!text-6xl !font-extrabold text-gray-800 !leading-tight">
              Challenge Your Mind, <br />
              <span className="text-primary">One Quiz at a Time.</span>
            </Title>
            <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Dive into a world of knowledge and fun. Test your expertise, challenge friends, and climb the leaderboards with QuizMaster.
            </Paragraph>
            <Button type="primary" size="large" className="mt-8 !h-14 !px-8 !text-lg !font-semibold">
              Start a Quiz Now
            </Button>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <Title level={2} className="text-center !text-3xl md:!text-4xl !font-bold text-gray-800">
              Why You'll Love QuizMaster
            </Title>
            <Paragraph className="text-center text-gray-600 max-w-xl mx-auto mt-4 mb-12">
              We've packed our app with features designed to make learning and competing as enjoyable as possible.
            </Paragraph>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} variant='borderless' className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <Title level={4} className="!font-semibold !text-xl text-gray-800">{feature.title}</Title>
                  <Paragraph className="text-gray-600">{feature.description}</Paragraph>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- How It Works Section --- */}
        <section id="how-it-works" className="py-20 px-6 bg-white">
          <div className="container mx-auto text-center">
            <Title level={2} className="!text-3xl md:!text-4xl !font-bold text-gray-800">
              Get Started in 3 Easy Steps
            </Title>
            <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-16 relative">
              {/* Dotted line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5">
                <svg width="100%" height="100%"><line x1="0" y1="50%" x2="100%" y2="50%" strokeDasharray="5,5" stroke="#d1d5db" strokeWidth="2"></line></svg>
              </div>
              <div className="flex flex-col items-center z-10 bg-white px-4">
                <div className="bg-[#fde7f3] text-primary rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl border-4 border-white">1</div>
                <Title level={4} className="mt-4 !font-semibold">Choose a Quiz</Title>
                <Paragraph className="text-gray-600">Pick from our vast library of categories.</Paragraph>
              </div>
              <div className="flex flex-col items-center z-10 bg-white px-4">
                <div className="bg-[#fde7f3] text-primary rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl border-4 border-white">2</div>
                <Title level={4} className="mt-4 !font-semibold">Answer Questions</Title>
                <Paragraph className="text-gray-600">Put your knowledge to the test and answer quickly.</Paragraph>
              </div>
              <div className="flex flex-col items-center z-10 bg-white px-4">
                <div className="bg-[#fde7f3] text-primary rounded-full w-20 h-20 flex items-center justify-center font-bold text-2xl border-4 border-white">3</div>
                <Title level={4} className="mt-4 !font-semibold">Get Your Score</Title>
                <Paragraph className="text-gray-600">See your results instantly and check the leaderboard.</Paragraph>
              </div>
            </div>
          </div>
        </section>

        {/* --- Testimonials Section --- */}
        <section id="testimonials" className="py-20 px-6">
          <div className="container mx-auto">
            <Title level={2} className="text-center !text-3xl md:!text-4xl !font-bold text-gray-800">
              Loved by Quiz Takers Everywhere
            </Title>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} variant='borderless' className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                  <Card.Meta
                    avatar={<Avatar size={64} src={testimonial.avatar} />}
                    title={<span className="font-semibold text-lg">{testimonial.name}</span>}
                    description={`"${testimonial.comment}"`}
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} QuizMaster. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
