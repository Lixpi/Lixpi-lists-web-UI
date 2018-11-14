import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const NotFound = () => (
    <CSSTransition timeout={11000} classNames="post">
        <div>
            <h2>Not found...</h2>
        </div>
    </CSSTransition>
)

export default NotFound;