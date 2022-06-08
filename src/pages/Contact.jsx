import React from 'react';
import HeaderPage from '../layout/HeaderPage';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Inputfiled from '../components/InputFiled';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ScrollToTop } from './../components/ScrollToTop';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This Input Is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('This Input Is Required'),
    subject: Yup.string().required('This Input Is Required'),
    message: Yup.string().required('This Input Is Required'),
});

const Contact = () => {
    ScrollToTop();

    const contactInfo = [
        {
            txt: ' 198 West 21th Street, Suite 721 New York  NY 10016',
            icon: 'fa fa-map-marker',
            link: '#',
        },
        {
            txt: ' + 1235 2355 98',
            icon: 'fa fa-phone',
            link: '#',
        },
        {
            txt: ' info@yoursite.com',
            icon: 'fa fa-envelope',
            link: '#',
        },
        {
            txt: ' yoursite.com',
            link: '#',
            icon: 'fa fa-globe',
        },
    ];
    return (
        <React.Fragment>
            <HeaderPage title="Contact" link="Contact" />

            <section className="page-contact">
                <Container>
                    <div className="contact__info">
                        <h4 className="mb-5 border-bottom pb-3">
                            Contact Information
                        </h4>
                        <Row className="row">
                            {contactInfo.map((contact, index) => {
                                return (
                                    <Col
                                        md={6}
                                        lg={3}
                                        className="mb-5"
                                        key={
                                            Math.random() * Math.ceil(index + 1)
                                        }
                                    >
                                        <Link
                                            to={contact.link}
                                            className="contact__info-box"
                                        >
                                            <span className="contact__info-icon">
                                                <i
                                                    className={contact.icon}
                                                    aria-hidden="true"
                                                ></i>
                                            </span>
                                            <span className="contact__info-txt">
                                                {contact.txt}
                                            </span>
                                        </Link>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                    <div className="contact__form">
                        <Row>
                            <Col md={6} className=" mb-4">
                                <div className="map-google h-100 w-100">
                                    <iframe
                                        title="Google Map"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight="0"
                                        marginWidth="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(MAS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    ></iframe>
                                </div>
                            </Col>
                            <Col md={6} className=" mb-4">
                                <h4 className="mb-4">Contact Us</h4>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        subject: '',
                                        message: '',
                                    }}
                                    validationSchema={Schema}
                                    onSubmit={(values, { resetForm }) => {
                                        // same shape as initial values
                                        console.log(values);
                                        // do your stuff
                                        resetForm();
                                    }}
                                >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <Inputfiled
                                                type="text"
                                                plac="Name"
                                                name="name"
                                            />
                                            {touched.name && errors.name && (
                                                <Alert variant="danger">
                                                    {errors.name}
                                                </Alert>
                                            )}

                                            <Inputfiled
                                                type="email"
                                                plac="Email"
                                                name="email"
                                            />
                                            {touched.email && errors.email && (
                                                <Alert variant="danger">
                                                    {errors.email}
                                                </Alert>
                                            )}

                                            <Inputfiled
                                                type="text"
                                                plac="Subject"
                                                name="subject"
                                            />
                                            {touched.subject &&
                                                errors.subject && (
                                                    <Alert variant="danger">
                                                        {errors.subject}
                                                    </Alert>
                                                )}

                                            <Inputfiled
                                                type="text"
                                                name="message"
                                                plac="message"
                                            />
                                            {touched.message &&
                                                errors.message && (
                                                    <Alert variant="danger">
                                                        {errors.message}
                                                    </Alert>
                                                )}

                                            <button
                                                type="submit"
                                                className="btn main-btn w-100 py-3"
                                            >
                                                Send
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Contact;
