import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, Form, Input, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainLayout from '@/Layouts/MainLayout';

const { Title, Text } = Typography;

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = () => {
        post(route('login'));
    };

    return (
        <MainLayout>
            <Head title="Log in" />

            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-lg gradient-card">
                    <div className="text-center mb-8">
                        <Title level={2}>Welcome Back!</Title>
                        <Text type="secondary">Please sign in to your account</Text>
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <Form
                        name="login"
                        initialValues={data}
                        onFinish={submit}
                        layout="vertical"
                        className="space-y-4"
                    >
                        <Form.Item
                            label="Email"
                            validateStatus={errors.email ? 'error' : ''}
                            help={errors.email}
                        >
                            <Input
                                prefix={<UserOutlined />}
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
                                placeholder="Enter your password"
                            />
                        </Form.Item>

                        <div className="flex items-center justify-between">
                            <Checkbox
                                checked={data.remember}
                                onChange={e => setData('remember', e.target.checked)}
                            >
                                Remember me
                            </Checkbox>

                            {canResetPassword && (
                                <Link href={route('password.request')}>
                                    Forgot password?
                                </Link>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="ant-btn ant-btn-primary w-full"
                            disabled={processing}
                        >
                            Log in
                        </button>

                        <div className="text-center mt-4">
                            <Text type="secondary">
                                Don't have an account?{' '}
                                <Link href={route('register')}>
                                    Sign up
                                </Link>
                            </Text>
                        </div>
                    </Form>
                </Card>
            </div>
        </MainLayout>
    );
}
