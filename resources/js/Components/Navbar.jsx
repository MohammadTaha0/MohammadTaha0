import { Link } from '@inertiajs/react';
import { Layout, Button, Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { ThemeContext } from '@/Contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const { Header } = Layout;

export default function Navbar() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const iconVariants = {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        exit: { scale: 0, rotate: 180 }
    };

    return (
        <Header className="site-header w-full">
            <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-6">
                <Link href="/" className="text-xl font-bold gradient-text">
                    Portfolio
                </Link>

                <div className="flex items-center space-x-6">
                    <Link href="/" className="gradient-link">
                        Home
                    </Link>
                    <Link href="/login" className="gradient-link">
                        Login
                    </Link>
                    <Link href="/register" className="gradient-link">
                        Register
                    </Link>
                    
                    <div className="relative">
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className="gradient-switch"
                            checkedChildren={
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key="moon"
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <MoonOutlined style={{ fontSize: '12px' }} />
                                    </motion.span>
                                </AnimatePresence>
                            }
                            unCheckedChildren={
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key="sun"
                                        variants={iconVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                    >
                                        <SunOutlined style={{ fontSize: '12px' }} />
                                    </motion.span>
                                </AnimatePresence>
                            }
                        />
                    </div>
                </div>
            </div>
        </Header>
    );
} 