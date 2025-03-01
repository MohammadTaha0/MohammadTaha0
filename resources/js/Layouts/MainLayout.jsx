import { Layout } from 'antd';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from '@/Components/Navbar';
import { ThemeContext } from '@/Contexts/ThemeContext';

const { Content } = Layout;

// Theme colors configuration
const themeColors = {
    primary: {
        light: '#FF6B6B',
        dark: '#FF4757'
    },
    secondary: {
        light: '#845EC2',
        dark: '#7B2CBF'
    },
    text: {
        light: '#1f2937',
        dark: '#ffffff'
    },
    border: {
        light: 'rgba(255, 107, 107, 0.1)',
        dark: 'rgba(255, 71, 87, 0.2)'
    },
    background: {
        light: {
            primary: 'rgba(255, 255, 255, 0.8)',
            secondary: 'rgba(243, 244, 246, 0.8)'
        },
        dark: {
            primary: 'rgba(17, 24, 39, 0.8)',
            secondary: 'rgba(31, 41, 55, 0.8)'
        }
    },
    particles: {
        light: ["#FF9A9E", "#A18CD1", "#FBC2EB"],
        dark: ["#FF6B6B", "#845EC2", "#FF4757"]
    },
    link: {
        light: {
            color: '#FF6B6B',
            hover: '#FF4757'
        },
        dark: {
            color: '#FF6B6B',
            hover: '#FF8787'
        }
    }
};

// Define all global styles here
const getGlobalStyles = (isDarkMode) => `
    /* Typography */
    .dark-mode .ant-typography,
    .dark-mode h1,
    .dark-mode h2,
    .dark-mode h3,
    .dark-mode h4,
    .dark-mode p,
    .dark-mode .ant-form-item-label > label,
    .dark-mode .ant-checkbox + span {
        color: ${themeColors.text.dark} !important;
    }

    .dark-mode .ant-typography.ant-typography-secondary {
        color: #94a3b8 !important;
    }

    /* Card Styles */
    .dark-mode .ant-card {
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid ${themeColors.border.dark};
    }

    .gradient-card {
        backdrop-filter: blur(12px);
        transition: all 0.4s ease;
        border-radius: 12px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .dark-mode .gradient-card {
        background: rgba(30, 41, 59, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .gradient-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 32px ${isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.2)'};
    }

    /* Form Styles */
    .dark-mode .ant-input-affix-wrapper,
    .dark-mode .ant-input-affix-wrapper-status-error {
        background: rgba(30, 41, 59, 0.8) !important;
        border-color: ${themeColors.border.dark};
    }

    .dark-mode .ant-input,
    .dark-mode .ant-input-status-error {
        background: transparent !important;
        color: ${themeColors.text.dark} !important;
    }

    .dark-mode .ant-input::placeholder,
    .dark-mode .ant-input-status-error::placeholder {
        color: rgba(255, 255, 255, 0.5) !important;
    }

    .dark-mode .ant-input-affix-wrapper .anticon,
    .dark-mode .ant-input-affix-wrapper-status-error .anticon {
        color: rgba(255, 255, 255, 0.7);
    }

    .dark-mode .ant-input-affix-wrapper:hover,
    .dark-mode .ant-input-affix-wrapper:focus,
    .dark-mode .ant-input-affix-wrapper-focused {
        border-color: ${themeColors.primary.dark} !important;
        box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2) !important;
    }

    /* Button Styles */
    .ant-btn {
        border: none !important;
        height: auto !important;
        padding: 8px 24px !important;
        transition: all 0.4s ease !important;
        font-weight: 500 !important;
        border-radius: 9999px !important;
    }

    .ant-btn-primary {
        background: ${isDarkMode
            ? `linear-gradient(135deg, ${themeColors.primary.dark}, ${themeColors.secondary.dark}) !important`
            : `linear-gradient(135deg, ${themeColors.primary.light}, ${themeColors.secondary.light}) !important`};
        color: white !important;
        border: none !important;
        text-shadow: none !important;
    }

    .ant-btn-default {
        background: ${isDarkMode
            ? 'rgba(99, 102, 241, 0.1) !important'
            : 'rgba(79, 70, 229, 0.1) !important'};
        color: ${isDarkMode ? themeColors.primary.dark : themeColors.primary.light} !important;
        border: 1px solid ${isDarkMode 
            ? 'rgba(99, 102, 241, 0.2) !important' 
            : 'rgba(79, 70, 229, 0.2) !important'};
    }

    .ant-btn:hover {
        transform: translateY(-2px);
        filter: brightness(110%);
        box-shadow: 0 10px 20px -10px ${isDarkMode 
            ? 'rgba(99, 102, 241, 0.5)' 
            : 'rgba(79, 70, 229, 0.5)'};
    }

    /* Link Styles */
    .dark-mode a {
        color: ${themeColors.link.dark.color};
    }

    .dark-mode a:hover {
        color: ${themeColors.link.dark.hover};
    }

    a {
        color: ${themeColors.link.light.color};
    }

    a:hover {
        color: ${themeColors.link.light.hover};
    }

    /* Form Error Styles */
    .dark-mode .ant-form-item-explain-error {
        color: #ff4d4f !important;
    }

    /* Checkbox Styles */
    .dark-mode .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${themeColors.primary.dark};
        border-color: ${themeColors.primary.dark};
    }

    .dark-mode .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .dark-mode .ant-checkbox:hover .ant-checkbox-inner {
        border-color: ${themeColors.primary.dark};
    }

    /* Animation */
    @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }

    /* Switch Styles */
    .dark-mode .ant-switch {
        background: rgba(99, 102, 241, 0.3);
    }

    .dark-mode .ant-switch-checked {
        background: ${themeColors.primary.dark};
    }

    /* Alert Styles */
    .dark-mode .ant-alert {
        background: rgba(99, 102, 241, 0.1);
        border-color: rgba(99, 102, 241, 0.2);
    }

    .dark-mode .ant-alert-message {
        color: ${themeColors.text.dark};
    }

    /* Icon Colors */
    .dark-mode .anticon {
        color: ${themeColors.primary.dark} !important;
        background: linear-gradient(135deg, #FF6B6B, #845EC2);
        -webkit-background-clip: text;
        background-clip: text;
    }
    
    .anticon {
        color: ${themeColors.primary.light} !important;
        background: linear-gradient(135deg, #FF9A9E, #A18CD1);
        -webkit-background-clip: text;
        background-clip: text;
    }

    /* Navbar Styles */
    .site-header {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 1000 !important;
        background: ${isDarkMode 
            ? 'rgba(17, 24, 39, 0.85)' 
            : 'rgba(255, 255, 255, 0.85)'} !important;
        backdrop-filter: blur(10px) !important;
        -webkit-backdrop-filter: blur(10px) !important;
        border: none !important;
        border-radius: 0 !important;
        transition: background-color 0.3s ease, backdrop-filter 0.3s ease !important;
        box-shadow: 0 1px 3px ${isDarkMode 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(0, 0, 0, 0.1)'} !important;
    }

    .site-header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: ${isDarkMode
            ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent)'};
    }

    /* Add padding to body to prevent content from hiding under fixed navbar */
    body {
        padding-top: 64px !important;
    }

    /* Card Styles */
    .gradient-card {
        background: ${isDarkMode
            ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.85), rgba(31, 41, 55, 0.85))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(243, 244, 246, 0.85))'};
        backdrop-filter: blur(10px);
        transition: all 0.4s ease;
        border: 1px solid ${isDarkMode 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 107, 107, 0.1)'};
    }

    .gradient-card:hover {
        transform: translateY(-5px);
        border-color: ${isDarkMode 
            ? 'rgba(255, 107, 107, 0.3)' 
            : 'rgba(255, 107, 107, 0.2)'};
        box-shadow: 0 8px 32px ${isDarkMode 
            ? 'rgba(255, 71, 87, 0.2)' 
            : 'rgba(255, 107, 107, 0.2)'};
    }

    /* Button Styles */
    .ant-btn-primary {
        background: ${isDarkMode
            ? 'linear-gradient(135deg, #FF6B6B, #845EC2) !important'
            : 'linear-gradient(135deg, #FF9A9E, #A18CD1) !important'};
    }

    .ant-btn-default {
        background: ${isDarkMode
            ? 'rgba(255, 107, 107, 0.1) !important'
            : 'rgba(255, 154, 158, 0.1) !important'};
        color: ${isDarkMode ? '#FF6B6B !important' : '#FF9A9E !important'};
        border: 1px solid ${isDarkMode 
            ? 'rgba(255, 107, 107, 0.2) !important' 
            : 'rgba(255, 154, 158, 0.2) !important'};
    }

    /* Gradient Text */
    .gradient-text {
        background: ${isDarkMode
            ? 'linear-gradient(135deg, #FF6B6B, #845EC2)'
            : 'linear-gradient(135deg, #FF9A9E, #A18CD1)'};
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    /* Progress Bar */
    .gradient-progress .ant-progress-bg {
        background: ${isDarkMode
            ? 'linear-gradient(to right, #FF6B6B, #845EC2) !important'
            : 'linear-gradient(to right, #FF9A9E, #A18CD1) !important'};
    }

    /* Switch Styles */
    .gradient-switch.ant-switch {
        background: ${isDarkMode
            ? 'rgba(255, 107, 107, 0.3)'
            : 'rgba(255, 154, 158, 0.3)'} !important;
        min-width: 50px !important;
        height: 26px !important;
        padding: 0 !important;
        border-radius: 30px !important;
        backdrop-filter: blur(8px) !important;
        border: 1px solid ${isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'} !important;
        box-shadow: 0 4px 12px ${isDarkMode
            ? 'rgba(255, 107, 107, 0.2)'
            : 'rgba(255, 154, 158, 0.2)'} !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .gradient-switch.ant-switch:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px ${isDarkMode
            ? 'rgba(255, 107, 107, 0.3)'
            : 'rgba(255, 154, 158, 0.3)'} !important;
    }

    .gradient-switch.ant-switch .ant-switch-handle {
        width: 22px !important;
        height: 22px !important;
        top: 1px !important;
        inset-inline-start: 1px !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .gradient-switch.ant-switch .ant-switch-handle::before {
        border-radius: 50% !important;
        background: ${isDarkMode
            ? 'linear-gradient(135deg, #FF6B6B, #845EC2)'
            : 'linear-gradient(135deg, #FF9A9E, #A18CD1)'} !important;
        box-shadow: 0 2px 8px ${isDarkMode
            ? 'rgba(255, 107, 107, 0.4)'
            : 'rgba(255, 154, 158, 0.4)'} !important;
        border: 2px solid ${isDarkMode
            ? 'rgba(255, 255, 255, 0.2)'
            : 'rgba(255, 255, 255, 0.8)'} !important;
    }

    .gradient-switch.ant-switch.ant-switch-checked {
        background: ${isDarkMode
            ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.3), rgba(132, 94, 194, 0.3))'
            : 'linear-gradient(135deg, rgba(255, 154, 158, 0.3), rgba(161, 140, 209, 0.3))'} !important;
    }

    .gradient-switch.ant-switch.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% - 23px) !important;
    }

    .gradient-switch.ant-switch .ant-switch-inner {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        padding: 0 6px !important;
    }

    .gradient-switch.ant-switch .ant-switch-inner .ant-switch-inner-checked,
    .gradient-switch.ant-switch .ant-switch-inner .ant-switch-inner-unchecked {
        font-size: 12px !important;
        color: ${isDarkMode ? '#ffffff' : '#000000'} !important;
        opacity: 0.8 !important;
    }

    .gradient-switch.ant-switch:focus {
        box-shadow: 0 0 0 2px ${isDarkMode
            ? 'rgba(255, 107, 107, 0.2)'
            : 'rgba(255, 154, 158, 0.2)'} !important;
    }

    /* Link Styles */
    .gradient-link {
        color: ${isDarkMode ? '#FF6B6B' : '#FF9A9E'} !important;
        transition: all 0.3s ease;
    }

    .gradient-link:hover {
        color: ${isDarkMode ? '#FF8787' : '#FBC2EB'} !important;
        text-shadow: 0 0 20px ${isDarkMode 
            ? 'rgba(255, 107, 107, 0.5)' 
            : 'rgba(255, 154, 158, 0.5)'};
    }

    /* Section Separator Styles */
    .section-separator {
        position: relative;
        padding: 6rem 0;
        overflow: hidden;
    }

    .section-separator::before,
    .section-separator::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 2px;
        background: ${isDarkMode
            ? 'linear-gradient(90deg, transparent, #FF6B6B, #845EC2, transparent)'
            : 'linear-gradient(90deg, transparent, #FF9A9E, #A18CD1, transparent)'};
        opacity: 0.5;
        filter: blur(1px);
        transition: all 0.3s ease;
    }

    .section-separator::before {
        top: 0;
    }

    .section-separator::after {
        bottom: 0;
    }

    .section-separator:hover::before {
        width: 300px;
        opacity: 0.7;
    }

    .section-separator:hover::after {
        width: 300px;
        opacity: 0.7;
    }

    .section-content {
        position: relative;
        z-index: 1;
        padding: 2rem;
        width: 100%;
        max-width: 85%;
        margin: 0 auto;
    }

    .section-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${isDarkMode
            ? 'linear-gradient(135deg, rgba(17, 24, 39, 0.3), rgba(31, 41, 55, 0.3))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(243, 244, 246, 0.3))'};
        backdrop-filter: blur(5px);
        border-radius: 16px;
        z-index: -1;
    }

    /* Section Title Styles */
    .section-title {
        text-align: center;
        margin-bottom: 4rem !important;
        position: relative;
        padding-bottom: 1rem;
    }

    .section-title::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: ${isDarkMode
            ? 'linear-gradient(90deg, #FF6B6B, #845EC2)'
            : 'linear-gradient(90deg, #FF9A9E, #A18CD1)'};
        border-radius: 3px;
    }

    /* Service Cards Container */
    .services-container {
        padding: 2rem 0;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    /* Contact Section Styles */
    .contact-section {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }

    .contact-section .ant-space {
        justify-content: center;
        margin-top: 2rem;
    }

    /* Card Grid Spacing */
    .card-grid {
        margin-top: 3rem;
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    /* Tag Styles */
    .dark-mode .ant-tag {
        color: ${themeColors.text.dark} !important;
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(132, 94, 194, 0.2)) !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .ant-tag {
        color: ${themeColors.text.light} !important;
        background: linear-gradient(135deg, rgba(255, 154, 158, 0.2), rgba(161, 140, 209, 0.2)) !important;
        border: 1px solid rgba(255, 107, 107, 0.1) !important;
    }

    /* Timeline Card Styles */
    .dark-mode .ant-timeline-item-head {
        background: transparent !important;
    }

    .dark-mode .ant-timeline .ant-card {
        background: rgba(30, 41, 59, 0.8) !important;
    }

    .dark-mode .ant-timeline .gradient-border {
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(132, 94, 194, 0.2));
    }

    .ant-timeline .gradient-border {
        background: linear-gradient(135deg, rgba(255, 154, 158, 0.2), rgba(161, 140, 209, 0.2));
    }
`;

export default function MainLayout({ children, particlesEnabled = true }) {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDarkMode(savedTheme === 'dark');
        document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', newTheme);
    };

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesConfig = {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: isDarkMode
                    ? themeColors.particles.dark
                    : themeColors.particles.light
            },
            shape: {
                type: ["circle", "triangle"],
                stroke: {
                    width: 0
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: isDarkMode ? themeColors.primary.dark : themeColors.primary.light,
                opacity: 0.3,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 200,
                    size: 6,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                push: {
                    particles_nb: 3
                }
            }
        },
        retina_detect: true
    };

    const gradientStyle = {
        backgroundImage: isDarkMode
            ? `linear-gradient(135deg, rgba(17, 24, 39, 0.97), rgba(31, 41, 55, 0.97))`
            : `linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(249, 250, 251, 0.97))`,
        backgroundSize: '400% 400%',
        backgroundPosition: '0% 50%',
        animation: 'gradientBG 15s ease infinite',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh'
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <Layout style={gradientStyle}>
                <style>{getGlobalStyles(isDarkMode)}</style>

                {/* Particle Background */}
                {particlesEnabled && (
                    <div className="fixed inset-0 z-0 opacity-75">
                        <Particles
                            id="tsparticles"
                            init={particlesInit}
                            options={particlesConfig}
                            className="h-full"
                        />
                    </div>
                )}

                {/* Add floating shapes */}
                <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute animate-float glow opacity-20`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                width: `${Math.random() * 100 + 50}px`,
                                height: `${Math.random() * 100 + 50}px`,
                                background: isDarkMode
                                    ? `rgba(99, 102, 241, ${Math.random() * 0.1})`
                                    : `rgba(79, 70, 229, ${Math.random() * 0.1})`,
                                borderRadius: Math.random() > 0.5 ? '50%' : '0',
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        />
                    ))}
                </div>

                <Navbar />

                <Content className="relative z-10">
                    {children}
                </Content>
            </Layout>
        </ThemeContext.Provider>
    );
} 