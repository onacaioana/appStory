import React, { Component, Fragment } from 'react';
import '../css/creative.min.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Grid } from '@material-ui/core';

class FooterPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="copyrights">
                    <div class="container">
                        <div class="footer-distributed">
                            <a href="#"><img src="images/logo.png" alt="" /></a>
                            <div class="footer-center">
                                <p class="footer-links">
                                    <a href="#">Home</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Pricing</a>
                                    <a href="#">About</a>
                                    <a href="#">Faq</a>
                                    <a href="#">Contact</a>
                                </p>
                                <p class="footer-company-name">All Rights Reserved. &copy; 2018 <a href="#">OnNext</a> Design By :
					<a href="https://html.design/">html design</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="p-0" id="portfolio">
                    <div class="container-fluid p-0">
                        <div class="row no-gutters popup-gallery">
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/1.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/1.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/2.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/2.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/3.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/3.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/4.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/4.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/5.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/5.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <a class="portfolio-box" href="../img/portfolio/fullsize/6.jpg">
                                    <img class="img-fluid" src={require("../img/portfolio/thumbnails/6.jpg")} alt="" />
                                    <div class="portfolio-box-caption">
                                        <div class="portfolio-box-caption-content">
                                            <div class="project-category text-faded">
                                                Category
                  </div>
                                            <div class="project-name">
                                                Project Name
                  </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

FooterPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default FooterPage;