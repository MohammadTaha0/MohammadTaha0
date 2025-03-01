import { Head, Link } from '@inertiajs/react';
import { Layout, Typography, Card, Row, Col, Button, Space, Divider, Timeline, Tag, Progress } from 'antd';
import {
    GithubOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    CodeOutlined,
    RocketOutlined,
    TrophyOutlined,
    MailOutlined,
    GlobalOutlined,
    LaptopOutlined,
    CloudOutlined,
    MobileOutlined,
    SecurityScanOutlined,
    TeamOutlined,
    CheckCircleOutlined,
    ThunderboltOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import MainLayout from '@/Layouts/MainLayout';
import { useContext } from 'react';
import { ThemeContext } from '@/Contexts/ThemeContext';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { isDarkMode } = useContext(ThemeContext);
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const cardHoverVariants = {
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online shopping platform built with Laravel and React',
            tags: ['Laravel', 'React', 'MySQL', 'Redis'],
            link: '#',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop'
        },
        {
            title: 'Task Management System',
            description: 'Collaborative project management tool with real-time updates',
            tags: ['Laravel', 'Vue.js', 'WebSockets'],
            link: '#',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop'
        },
        {
            title: 'AI Content Generator',
            description: 'Content generation platform powered by machine learning',
            tags: ['Python', 'Laravel', 'TensorFlow'],
            link: '#',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
        }
    ];

    const skills = [
        { name: 'Laravel', level: 90, icon: <CodeOutlined /> },
        { name: 'React', level: 85, icon: <RocketOutlined /> },
        { name: 'Vue.js', level: 80, icon: <GlobalOutlined /> },
        { name: 'Node.js', level: 75, icon: <TrophyOutlined /> },
        { name: 'Python', level: 70, icon: <CodeOutlined /> }
    ];

    const experience = [
        {
            title: 'Senior Full Stack Developer',
            company: 'Tech Innovators Inc.',
            period: '2021 - Present',
            description: 'Leading development of enterprise applications',
            icon: <RocketOutlined style={{ fontSize: '24px' }} />
        },
        {
            title: 'Backend Developer',
            company: 'Digital Solutions Ltd.',
            period: '2019 - 2021',
            description: 'Developed scalable backend systems',
            icon: <CodeOutlined style={{ fontSize: '24px' }} />
        },
        {
            title: 'Junior Developer',
            company: 'StartUp Hub',
            period: '2018 - 2019',
            description: 'Full stack development of web applications',
            icon: <TrophyOutlined style={{ fontSize: '24px' }} />
        }
    ];

    const stats = [
        {
            icon: <ThunderboltOutlined className="text-2xl" />,
            title: '2+ Years',
            description: 'Professional Experience'
        },
        {
            icon: <CheckCircleOutlined className="text-2xl" />,
            title: '50+ Projects',
            description: 'Successfully Delivered'
        },
        {
            icon: <TeamOutlined className="text-2xl" />,
            title: 'Global Clients',
            description: 'Worldwide Collaboration'
        }
    ];

    const services = [
        {
            icon: <LaptopOutlined className="text-2xl" />,
            title: 'Web Development',
            description: 'Modern and responsive web applications'
        },
        {
            icon: <MobileOutlined className="text-2xl" />,
            title: 'Mobile Apps',
            description: 'Native and cross-platform solutions'
        },
        {
            icon: <CloudOutlined className="text-2xl" />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure'
        },
        {
            icon: <SecurityScanOutlined className="text-2xl" />,
            title: 'Security',
            description: 'Best practices & compliance'
        }
    ];

    const timelineItems = experience.map((exp) => ({
        dot: exp.icon,
        children: (
            <motion.div
                variants={cardHoverVariants}
                whileHover="hover"
            >
                <Card hoverable>
                    <Title level={4}>
                        {exp.title}
                    </Title>
                    <Text type="secondary">
                        {exp.company} | {exp.period}
                    </Text>
                    <Paragraph>
                        {exp.description}
                    </Paragraph>
                </Card>
            </motion.div>
        )
    }));

    return (
        <MainLayout>
            <Head title="Portfolio" />

            <Content className="relative z-10">
                {/* Hero Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="pt-40 pb-32 px-6 md:px-12 text-center relative overflow-hidden"
                >
                    <motion.div
                        variants={itemVariants}
                        className="relative z-10 w-full mx-auto"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden gradient-border relative"
                        >
                            <img
                                src={window.location.origin + '/assets/profile.jfif'}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <Title level={1} className="text-5xl font-bold mb-4">
                            Muhammad Taha
                        </Title>
                        <Title level={3} className="font-normal mb-8">
                            Full Stack Developer & Tech Enthusiast
                        </Title>
                        <Paragraph className="text-lg mb-12">
                            Crafting elegant solutions to complex problems with modern technologies
                        </Paragraph>
                        <Space size="large" className="mb-12">
                            {[
                                { icon: <GithubOutlined />, href: "https://github.com/MohammadTaha0", label: "GitHub", type: "primary" },
                                { icon: <LinkedinOutlined />, href: "https://www.linkedin.com/in/mohammad-taha-k/", label: "LinkedIn", type: "default" },
                                { icon: <TwitterOutlined />, href: "https://twitter.com/1Mohammad_Taha", label: "Twitter", type: "default" },
                                { icon: <MailOutlined />, href: "mailto:dev.tahakhalid@gmail.com", label: "Email", type: "default" }
                            ].map((social, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        type={social.type}
                                        size="large"
                                        icon={social.icon}
                                        href={social.href}
                                        shape="round"
                                    >
                                        {social.label}
                                    </Button>
                                </motion.div>
                            ))}
                        </Space>
                    </motion.div>
                </motion.div>

                {/* Services Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content">
                        <Title level={2} className="section-title">
                            What I Do
                        </Title>
                        <div className="services-container">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardHoverVariants}
                                    whileHover="hover"
                                    className="w-[280px]"
                                >
                                    <Card
                                        className="h-full text-center gradient-card"
                                        hoverable
                                    >
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center gradient-border">
                                            {service.icon}
                                        </div>
                                        <Title level={4}>
                                            {service.title}
                                        </Title>
                                        <Text>
                                            {service.description}
                                        </Text>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* About Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content">
                        <div className="w-full mx-auto">
                            <motion.div variants={itemVariants} className="text-center">
                                <Title level={2} className="text-4xl font-bold mb-12">
                                    About Me
                                </Title>
                                <div className="text-lg leading-relaxed mb-16">
                                    <Paragraph>
                                        I'm a passionate full-stack developer with over 5 years of experience in building web applications.
                                        I specialize in Laravel, React, and Vue.js, and I love creating elegant solutions to complex problems.
                                    </Paragraph>
                                </div>
                                <Row gutter={[32, 32]} className="mt-12">
                                    {stats.map((stat, index) => (
                                        <Col xs={24} md={8} key={index}>
                                            <motion.div
                                                variants={cardHoverVariants}
                                                whileHover="hover"
                                            >
                                                <Card
                                                    className="text-center gradient-card"
                                                    hoverable
                                                >
                                                    <div className="mb-4">{stat.icon}</div>
                                                    <Title level={3} className="!mb-2">
                                                        {stat.title}
                                                    </Title>
                                                    <Text>
                                                        {stat.description}
                                                    </Text>
                                                </Card>
                                            </motion.div>
                                        </Col>
                                    ))}
                                </Row>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content p-3">
                        <Title level={2} className="section-title">
                            Featured Projects
                        </Title>
                        <Row gutter={[32, 32]} className="mx-auto w-full p-3 justify-center" style={{margin: '0 auto'}}>
                            {projects.map((project, index) => (
                                <Col xs={24} md={8} key={index}>
                                    <motion.div
                                        variants={cardHoverVariants}
                                        whileHover="hover"
                                        className="h-full mx-auto"
                                    >
                                        <Card
                                            className="h-full overflow-hidden gradient-card gradient-border transform transition-all duration-300 hover:scale-105"
                                            hoverable
                                            cover={
                                                <div className="relative h-48 overflow-hidden group">
                                                    <div className="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                                                        style={{
                                                            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8))'
                                                        }}
                                                    />
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                                        <Button className="gradient-button" shape="round" icon={<RocketOutlined />}>
                                                            View Project
                                                        </Button>
                                                    </div>
                                                </div>
                                            }
                                        >
                                            <Title level={4} className="mb-4 gradient-text">
                                                {project.title}
                                            </Title>
                                            <Paragraph>
                                                {project.description}
                                            </Paragraph>
                                            <Space wrap className="mt-auto">
                                                {project.tags.map((tag, i) => (
                                                    <Tag
                                                        key={i}
                                                        className="px-3 py-1 rounded-full gradient-card"
                                                    >
                                                        {tag}
                                                    </Tag>
                                                ))}
                                            </Space>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content">
                        <Title level={2} className="section-title">
                            Skills & Expertise
                        </Title>
                        <Row className="w-full mx-auto">
                            <Col span={24}>
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardHoverVariants}
                                        whileHover="hover"
                                        className="mb-8 group"
                                    >
                                        <Card className="gradient-card">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-full gradient-border">
                                                        {skill.icon}
                                                    </div>
                                                    <Text>
                                                        {skill.name}
                                                    </Text>
                                                </div>
                                                <Text>
                                                    {skill.level}%
                                                </Text>
                                            </div>
                                            <Progress
                                                percent={skill.level}
                                                showInfo={false}
                                                className="gradient-progress"
                                            />
                                        </Card>
                                    </motion.div>
                                ))}
                            </Col>
                        </Row>
                    </div>
                </motion.div>

                {/* Experience Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content">
                        <Title level={2} className="section-title">
                            Professional Experience
                        </Title>
                        <div className="w-full mx-auto">
                            <Timeline
                                mode="alternate"
                                items={timelineItems.map((item) => ({
                                    ...item,
                                    dot: (
                                        <div className="p-3 rounded-full gradient-border">
                                            {item.dot}
                                        </div>
                                    )
                                }))}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="section-separator"
                >
                    <div className="section-content">
                        <Title level={2} className="section-title">
                            Let's Connect
                        </Title>
                        <Paragraph className='w-full text-center'>
                            Have a project in mind? Let's work together to create something amazing.
                        </Paragraph>
                        <Space size="large" wrap className="justify-center w-full">
                            {[
                                { icon: <LinkedinOutlined />, text: "Connect on LinkedIn", type: "primary", link: "https://www.linkedin.com/in/mohammad-taha-k/" },
                                { icon: <MailOutlined />, text: "Send Email", type: "default", link: "mailto:dev.tahakhalid@gmail.com" },
                                { icon: <TwitterOutlined />, text: "Follow on Twitter", type: "default", link: "https://twitter.com/1Mohammad_Taha" }
                            ].map((btn, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 rounded-full blur-lg gradient-glow transition-all duration-300" />
                                    <Button
                                        target='_blank'
                                        href={btn.link}
                                        type={btn.type}
                                        size="large"
                                        icon={btn.icon}
                                        shape="round"
                                        className="relative z-10"
                                    >
                                        {btn.text}
                                    </Button>
                                </motion.div>
                            ))}
                        </Space>
                    </div>
                </motion.div>

                {/* Footer */}
                <div className="text-center py-12">
                    <Space split={<Divider type="vertical" />}>
                        <Text type="secondary">
                            Built with Laravel v{laravelVersion}
                        </Text>
                        <Text type="secondary">
                            PHP v{phpVersion}
                        </Text>
                    </Space>
                </div>
            </Content>
        </MainLayout>
    );
}
