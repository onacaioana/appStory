import React, { Component } from 'react';
import'../css/style.css';

class HeaderFormat extends Component {
    render() {
        return (
            <div class="row section-heading justify-content-center mb-5">
            <div class="col-md-8 text-center">
              <h2 class="heading mb-3">Find your best food</h2>
              <p class="sub-heading mb-5">Free Website Template For Restaurants Made by <a href="#">Free-Template.co</a></p>  
            </div>
          </div>
        );
    }
}

export default HeaderFormat;