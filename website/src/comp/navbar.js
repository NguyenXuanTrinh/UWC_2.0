import React, { Component } from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">

                <Link className="logo" to="/">

                    {/* <div className="logo"> */}
                    <img alt="" src={process.env.PUBLIC_URL + '/logo.png'} />
                    <h1>UWC 2.0</h1>
                    {/* </div> */}
                </Link>
                <div className="navigator">
                    <div className="dropdown--menu">
                        <div className="selection">
                            <img className="nav--img" alt="" src={process.env.PUBLIC_URL + '/assign.png'} />
                        </div>
                        <div className="dropdown--selection">
                            <div className="selection">

                                <img className="selection--img" alt="" src={process.env.PUBLIC_URL + '/janitor.png'} />
                                <a href="/Ass_janitor"> Janitor   </a>
                            </div>
                            <div className="selection">
                                <img className="selection--img" alt="" src={process.env.PUBLIC_URL + '/collector.png'} />
                                <a href="/Ass_collector"> Collector   </a>
                            </div>
                        </div>
                    </div>
                    <img className="nav--img" alt="" src={process.env.PUBLIC_URL + '/notification.png'} />
                    <img className="nav--img" alt="" src={process.env.PUBLIC_URL + '/message.png'} />

                    
                    <div className="dropdown--menu">
                    <div className="selection">
                        
                        <img className="nav--img" alt="" src={process.env.PUBLIC_URL + '/user.png'} />
                            </div>
                        <div className="dropdown--selection">
                            <div className="selection">
                                <img className="selection--img" alt="" src={process.env.PUBLIC_URL + '/Group.png'} />
                                <a href="/Task-assignment-1"> Danh s??ch nh??n vi??n</a>
                            </div>
                            <div className="selection">
                                <img className="selection--img" alt="" src={process.env.PUBLIC_URL + '/Vehicol.png'} />
                                <a href="/Task-assignment-1"> Danh s??ch thi???t b???</a>
                            </div>
                            <div className="selection">
                                <img className="selection--img" alt="" src={process.env.PUBLIC_URL + '/uil_location-point.png'} />
                                <a href="/Task-assignment-1"> Danh s??ch MCPs</a>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
    }
}
