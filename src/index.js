import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import App from './App';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi) // passes i18n down to react-i18next
    .init({
        supportedLngs: ['en', 'ar'],
        fallbackLng: 'en',
        detection: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
        backend: {
            loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
        },
    });

const loadMarkUp = (
    <div
        className="text-center bg-dark"
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);

ReactDOM.render(
    <Suspense fallback={loadMarkUp}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);
