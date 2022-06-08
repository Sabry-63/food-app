import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="haeder-page">
            <div className="d-flex flex-column justify-content-end align-items-center h-100 pb-5">
                <h1 className="haeder-page__title">{props.title} </h1>
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <Breadcrumb.Item active>{props.link}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </header>
    );
};

export default Header;
