import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Layout } from 'antd';

const { Content } = Layout;

export default function GuestLayout({ children }) {
    return (
        <Layout className="min-h-screen bg-gray-50">
            <Content>
                <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
                    <div className="mb-4">
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                        </Link>
                    </div>
                    {children}
                </div>
            </Content>
        </Layout>
    );
}
