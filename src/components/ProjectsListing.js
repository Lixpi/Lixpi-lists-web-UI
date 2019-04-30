import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TopNavBar from './TopNavBar';

const ProjectsListing = () => (
    <CSSTransition timeout={11000} classNames="post">

        <div className="container full-height" id="login-page-container">

            <TopNavBar />

            <div className="projects-listing mt-4">

                <div className="color-coded-row code-red project-row">
                    <div className="row no-gutters align-items-center mb-2">
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto project-logo">
                                    <img className="" src="/images/logo.png" alt="Lixpi Lists" />
                                </div>
                                <div className="col-md-auto">
                                    <h4 className="project-name ml-2">Lixpi Lists Project</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto">
                                    <h4><span className="icon-hash"/>765 open / 200 done</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <p><span className="icon-user"/>Lead: John Doe</p>
                            <p><span className="icon-flow-cascade"/>Next release: Mar 17</p>
                        </div>
                        <div className="col">
                            <p><span className="icon-clock"/>Duration: 1w</p>
                            <p><span className="icon-attention"/>3: issues requires your attention</p>
                        </div>
                    </div>
                </div>

                <div className="color-coded-row code-green project-row">
                    <div className="row no-gutters align-items-center mb-2">
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto project-logo">
                                    <span>A</span>
                                </div>
                                <div className="col-md-auto">
                                    <h4 className="project-name ml-2">A Project, uses letter if logo is not available</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto">
                                    <h4><span className="icon-hash"/>765 open / 200 done</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <p><span className="icon-user"/>Lead: John Doe</p>
                            <p><span className="icon-flow-cascade"/>Next release: Mar 17</p>
                        </div>
                        <div className="col">
                            <p><span className="icon-clock"/>Duration: 1w</p>
                            <p><span className="icon-attention"/>3: issues requires your attention</p>
                        </div>
                    </div>
                </div>

                <div className="color-coded-row code-yellow project-row">
                    <div className="row no-gutters align-items-center mb-2">
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto project-logo">
                                    <span>B</span>
                                </div>
                                <div className="col-md-auto">
                                    <h4 className="project-name ml-2">B project, for B players</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto">
                                    <h4><span className="icon-hash"/>765 open / 200 done</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <p><span className="icon-user"/>Lead: John Doe</p>
                            <p><span className="icon-flow-cascade"/>Next release: Mar 17</p>
                        </div>
                        <div className="col">
                            <p><span className="icon-clock"/>Duration: 1w</p>
                            <p><span className="icon-attention"/>3: issues requires your attention</p>
                        </div>
                    </div>
                </div>

                <div className="color-coded-row code-grey project-row">
                    <div className="row no-gutters align-items-center mb-2">
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto project-logo">
                                    <img className="" src="/images/logo.png" alt="Lixpi Lists" />
                                </div>
                                <div className="col-md-auto">
                                    <h4 className="project-name ml-2">Lixpi Lists Project</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-auto">
                                    <h4><span className="icon-hash"/>765 open / 200 done</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <p><span className="icon-user"/>Lead: John Doe</p>
                            <p><span className="icon-flow-cascade"/>Next release: Mar 17</p>
                        </div>
                        <div className="col">
                            <p><span className="icon-clock"/>Duration: 1w</p>
                            <p><span className="icon-attention"/>3: issues requires your attention</p>
                        </div>
                    </div>
                </div>


            </div>



        </div>





    </CSSTransition>
)

export default ProjectsListing;