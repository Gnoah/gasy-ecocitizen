import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
  render() {
    return (
        <footer class="page-footer font-small mdb-color pt-4">
        
            <div class="container text-center text-md-left">
              <div class="row text-center text-md-left mt-3 pb-3">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Gasy Ecocitizen</h6>
                  <p>Our goal is to inform people about environment destruction in Madagascar.
                      We invite you to follow the informations into this website. 
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Menu</h6>
                  <p>
                    <a href="/Home">Home</a>
                  </p>
                  <p>
                    <a href="/Impact">Impact</a>
                  </p>
                  <p>
                    <a href="/Risk">Risk</a>
                  </p>
                  <p>
                    <a href="/Resolve">Finding Resolve</a>
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
        
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/Faune_de_Madagascar">Fauna</a>
                  </p>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/Flore_de_Madagascar">Flora</a>
                  </p>
                  <p>
                    <a href="https://fr.wikipedia.org/wiki/Madagascar_National_Parks">National Parks</a>
                  </p>
                  <p>
                    <a href="https://en.wikipedia.org/wiki/Madagascar">Madagascar</a>
                  </p>
                </div>
        
                <hr class="w-100 clearfix d-md-none"/>
        
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="fas fa-home mr-3"></i> Antananarivo,101, MG</p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> rlee.andri@gmail.com</p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 261 34 97 230 75</p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
        
              </div>
        
              <hr/>
        
              <div class="row d-flex align-items-center">
        
                <div class="col-md-7 col-lg-8">
        
                  <p class="text-center text-md-left">© 2018 Copyright:
                    <a href="#">
                      <strong> GEC</strong>
                    </a>
                  </p>
        
                </div>
                <div class="col-md-5 col-lg-4 ml-lg-0">
                  <div class="text-center text-md-right">
                    <ul class="list-unstyled list-inline">
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li class="list-inline-item">
                        <a class="btn-floating btn-sm rgba-white-slight mx-1">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
        
                </div>
        
              </div>
        
            </div>
        
          </footer>
    );
  }
  };

  export default Footer;