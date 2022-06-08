import React from "react";
import { Container } from "react-bootstrap";

const Booknow = () => {
    return (
        <React.Fragment>
            <section className="section-book-now text-center d-flex flex-column justify-content-center algin-items-center main-bg py-5">
                <Container>
                    <h3 className="book-now__title mb-3">
                        We Make Delicious & Nutritious Food
                    </h3>
                    <button
                        className="book-now__btn btn px-3 py-2"
                        type="submit"
                    >
                        Book A Table Now
                    </button>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Booknow;
