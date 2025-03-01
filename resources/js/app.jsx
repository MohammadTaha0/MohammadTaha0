import '../css/app.css';
import './bootstrap';
import 'antd/dist/reset.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

const appName = import.meta.env.VITE_APP_NAME || 'Muhammad Taha';

const antdTheme = {
    token: {
        colorPrimary: '#1677ff',
        borderRadius: 6,
    },
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ConfigProvider theme={antdTheme}>
                <App {...props} />
            </ConfigProvider>
        );
    },
    progress: {
        color: '#1677ff',
    },
});
