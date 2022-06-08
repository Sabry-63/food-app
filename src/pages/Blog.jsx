import React from 'react';
import HeaderPage from '../layout/HeaderPage';
import Blog from './../sections/Blog';
import { ScrollToTop } from './../components/ScrollToTop';

const BlogPage = () => {
    ScrollToTop();

    return (
        <div>
            <HeaderPage title="Blog" link="Blog" />
            <Blog />
        </div>
    );
};

export default BlogPage;
