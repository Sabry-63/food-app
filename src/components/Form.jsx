import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Inputfiled from './InputFiled';
import { Alert } from 'react-bootstrap';
import Select from './Select';

const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('This Input Is Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('This Input Is Required'),
    phone: Yup.string().required('This Input Is Required'),
    date: Yup.string().required('This Input Is Required'),
    time: Yup.string().required('This Input Is Required'),
    guest: Yup.number().required('This Input Is Required'),
});

const HandleForm = (props) => {
    const options = [1, 2, 3, 4, 5];

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    guest: '',
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
                    <Form className={props.className}>
                        <Inputfiled type="text" plac="Name" name="name" />
                        {touched.name && errors.name && (
                            <Alert variant="danger">{errors.name}</Alert>
                        )}

                        <Inputfiled type="email" plac="Email" name="email" />
                        {touched.email && errors.email && (
                            <Alert variant="danger">{errors.email}</Alert>
                        )}

                        <Inputfiled type="tel" plac="Phone" name="phone" />
                        {touched.phone && errors.phone && (
                            <Alert variant="danger">{errors.phone}</Alert>
                        )}

                        <div className="form-group">
                            <label htmlFor="date">
                                <span className="about__from-icon">
                                    <i
                                        className="fa fa-calendar"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </label>
                            <Inputfiled type="date" name="date" />
                        </div>
                        {touched.date && errors.date && (
                            <Alert variant="danger">{errors.date}</Alert>
                        )}

                        <div className="form-group">
                            <label htmlFor="time">
                                <span className="about__from-icon">
                                    <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </label>
                            <Inputfiled type="time" name="time" />
                        </div>

                        {touched.time && errors.time && (
                            <Alert variant="danger">{errors.time}</Alert>
                        )}

                        <div className="form-group">
                            <label htmlFor="date">
                                <span className="about__from-icon">
                                    <i
                                        className="fa fa-chevron-down"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </label>
                            <Select
                                name="guest"
                                type="select"
                                options={options}
                            />
                        </div>
                        {touched.guest && errors.guest && (
                            <Alert variant="danger">{errors.guest}</Alert>
                        )}

                        <button
                            type="submit"
                            className="btn about__form-btn w-100 py-3"
                        >
                            Book Your Table Now
                        </button>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
};
export default HandleForm;
