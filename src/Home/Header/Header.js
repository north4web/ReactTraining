import React from 'react'
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (


            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">React4</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Features</a> */}
                                <Link class="nav-link" to="/About">About</Link>
                            </li>
                            <li class="nav-item">
                                {/* <a class="nav-link" href="#">Pricing</a> */}
                                <Link class="nav-link" to="/Contact/">Contact</Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>




            </div>
        )


    }

}

export default Header