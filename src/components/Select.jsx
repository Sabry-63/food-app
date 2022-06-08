import React from "react";
import { Field } from "formik";
import { Form } from "react-bootstrap";

const Select = (props) => {
    return (
        <React.Fragment>
            <Form.Group className="mb-3 form-group">
                <Field
                    component={props.type}
                    name={props.name}
                    className="w-100 px-3 py-2 form-select"
                >
                    {props.options.map((option, index) => {
                        return (
                            <React.Fragment
                                key={Math.random() * Math.ceil(index + 1)}
                            >
                                <option value={option}>{option}</option>
                            </React.Fragment>
                        );
                    })}
                </Field>
            </Form.Group>
        </React.Fragment>
    );
};

export default Select;
