import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NotFound = () => (
    <CSSTransition timeout={11000} classNames="post">

        <div className="container full-height" id="not-found-page-container">
            <div className="row align-items-center">
                <div className="col-md-auto">
                    <h2>Not found...</h2>
                </div>
            </div>
        </div>

    </CSSTransition>
)

export default NotFound;