import { Head, Link, useForm } from '@inertiajs/react';
import { Card, Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import MainLayout from '@/Layouts/MainLayout';

const { Title, Text } = Typography;

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = () => {
        post(route('register'));
    };

    return (
        <MainLayout>
            <Head title="Register" />

            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-lg gradient-card">
                    <div className="text-center mb-8">
                        <Title level={2}>Create Account</Title>
                        <Text type="secondary">Sign up for a new account</Text>
                    </div>

                    <Form
                        name="register"
                        initialValues={data}
                        onFinish={submit}
                        layout="vertical"
                        className="space-y-4"
                    >
                        <Form.Item
                            label="Name"
                            validateStatus={errors.name ? 'error' : ''}
                            help={errors.name}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="Enter your name"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            validateStatus={errors.email ? 'error' : ''}
                            help={errors.email}
                        >
                            <Input
                                prefix={<MailOutlined />}
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                placeholder="Enter your email"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            validateStatus={errors.password ? 'error' : ''}
                            help={errors.password}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                placeholder="Create a password"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            validateStatus={errors.password_confirmation ? 'error' : ''}
                            help={errors.password_confirmation}
                        >
                            <Input.Password
                                prefix={<LockOutlined />}
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                placeholder="Confirm your password"
                            />
                        </Form.Item>

                        <button
                            type="submit"
                            className="ant-btn ant-btn-primary w-full"
                            disabled={processing}
                        >
                            Register
                        </button>

                        <div className="text-center mt-4">
                            <Text type="secondary">
                                Already have an account?{' '}
                                <Link href={route('login')}>
                                    Log in
                                </Link>
                            </Text>
                        </div>
                    </Form>
                </Card>
            </div>
        </MainLayout>
    );
}
