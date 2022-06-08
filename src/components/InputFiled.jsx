import { Field } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const Inputfiled = (props) => {
    return (
        <React.Fragment>
            <Form.Group className="mb-3 form-group" controlId={props.name}>
                <Field
                    className="w-100 px-3 py-2 form-control"
                    name={props.name}
                    type={props.type}
                    placeholder={props.plac}
                    onInput={props.onInput}
                />
            </Form.Group>
        </React.Fragment>
    );
};

export default Inputfiled;
