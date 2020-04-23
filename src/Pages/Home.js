import React from 'react';

import spleete_card1 from '../img/spleete_card1.png'
import spleete_man from '../img/manInrey.jpg'
import CleanMaxsolarlogo from '../img/CleanMaxsolar-logo.svg'
import jumia from '../img/jumia.png'

import justrite from '../img/justrite.png'
import spar from '../img/spar.png'

import playstore from '../img/playstore.png'
import ios from '../img/ios.png'

import jumbotronBg from '../img/jumbotronBg.png'
import signupwith_text from '../img/signupwith_text.png'
import signup from '../img/signup.png'
import credit_card_text from '../img/credit_card_text.png'
import employment_with_text from '../img/employment_with_text.png'
import generate_quote_with_text from '../img/generate_quote_with_text.png'

import credit_card from '../img/credit_card.png'
import employment from '../img/employment.png'
import generate_quote from '../img/generate_quote.png'



import { Carousel, Tabs } from 'antd';
import { Jumbotron, Button } from 'reactstrap';
import Navigation from '../MiniComponents/Navigation'

const { TabPane } = Tabs;
function Home() {
  return (
    <>
   <Navigation/>

    <div>
      <Jumbotron className="mb-0">
        <div className="container">
        <div className="row">
          <div className="col-md-7 pt-4">
            <h1 className="display-5 mt-4">Smart and Convenient <br/>
            Payment Plan</h1>
            <div className="lead mb-3">
            Spleete offers convenient payment plan, helping you 
            buy the things you want, own them while paying 
            in monthly installments.</div>
            
            <p className="lead">
              <Button color="primary">Apply Now</Button>
            </p>
          </div>

          <div className="col-md-5 text-center">
      
              <img src={spleete_card1} alt="spleete card"  style={{height: "400px"}}/> 
          </div>
        </div>
        </div>
        
      </Jumbotron>


      <div className="container-fluid bg-light mb-4">
        <div className="container pt-4 blueDots">
            <h1 className=" display-5 mb-0 mt-4">
              How it works 
            </h1>  
            <p className="lead mt-0">Get loans approved in 5 easy steps</p>

            <div className='text-center'>
              <div className='d-none d-lg-block d-xl-block'>
                <Carousel autoplay >
                  <div>
                    <img src={signupwith_text} alt='signup'  style={{height: "500px"}}/>
                  </div>
                  <div>
                    <img src={employment_with_text} alt='sinup' style={{height: "500px"}}/>
                  </div>
                  <div>
                    <img src={generate_quote_with_text} alt='sinup' style={{height: "500px"}}/>
                  </div>
                  <div>
                    <img src={credit_card_text} alt='sinup' style={{height: "500px"}}/>
                  </div>
                </Carousel>
              </div>

                <div className='d-block d-sm-block d-md-block d-lg-none d-xl-none'>
                <Tabs tabPosition='left'>
                <TabPane tab="Step 1" key="1">
                <img src={signup} alt='sinup'  style={{height: "300px"}}/>
                </TabPane>
                <TabPane tab="Step 2" key="2">
                <img src={employment} alt='employment' style={{height: "300px"}}/>
                </TabPane>
                <TabPane tab="Step 3" key="3">
                <img src={generate_quote} alt='generate_quote' style={{height: "300px"}}/>
                </TabPane>
                <TabPane tab="Step 4" key="4">
                <img src={credit_card} alt='credit_card' style={{height: "300px"}}/>
                </TabPane>
              </Tabs>
                </div>

            </div>
        </div> 
      </div>



      <div className="container mb-5">
        <h1 className="display-5 mb-0  pt-2 mt-4">
          Merchants
        </h1>  
        <div className="col-md-9 lead pl-0 mt-0 mb-2">
          Increase sales and customer experience by offering
        pay-in-installment at checkout online or in-store 
                                 using spleete API's
        </div>

        <div className="row">
        <div className="col-md-3 mt-2">
              <div className="card card-shadow">
                  <div className="card-body text-center">
                      <div className="card-img" style={{height: "60px"}}>
                          <img src={CleanMaxsolarlogo} alt='CleanMaxsolar-logo' style={{height: "50px"}}/>
                      </div>
                  </div>
              </div>
          </div>
<div className="col-md-3 mt-2">
              <div className="card card-shadow">
                  <div className="card-body text-center">
                      <div className="card-img" style={{height: "60px"}}>
                          <img src={justrite} alt='justrite' style={{height: "80px"}}/>
                      </div>
                  </div>
              </div>
          </div>


          <div className="col-md-3 mt-2">
              <div className="card card-shadow">
                  <div className="card-body text-center">
                      <div className="card-img" style={{height: "60px"}}>
                          <img src={jumia} alt='jumia' style={{height: "70px"}}/>
                      </div>
                  </div>
              </div>
          </div>


          <div className="col-md-3 mt-2">
              <div className="card card-shadow">
                  <div className="card-body text-center">
                      <div className="card-img" style={{height: "60px"}}>
                          <img src={spar} alt='spar' style={{height: "50px"}}/>
                      </div>
                  </div>
              </div>
          </div>

        </div>


        <div className='text-center mt-4'>
              <Button className='btn btn-primary'><b>Load More</b></Button>
        </div>

      </div> 




      <div className="container-fluid pt-2">
      
          <div className="row bg-light backgroundBiz">
              <div className="col-md-12 ml-auto mr-auto pt-5 pl-5 pb-5 pr-5" style={{background: "rgba(2, 43, 105, 0.507)"}}>
                   <h1 className="mt-4 text-white display-5">Businesses</h1>

                   <Carousel autoplay>
                    <div>
                    <div className="col-md-6 lead text-white pl-0 mt-0 mb-2 pb-3">
                    Leverage Spleete's technology and capital to offer loans, IOUs, 
                    asset financing to employees at no cost.
                    Sign up and add employee's to get started</div>
                  
                    </div>
                    <div>
                    <div className="col-md-6 lead text-white pl-0 mt-0 mb-2 pb-3">
                         Boost your business with a pay later option
                        Give your employees a better way to pay, 
                        Easy set up: Sign up and add employees. 
                        Or integrate Spleete APIs to your payroll system
             </div>
                    </div>
                  </Carousel>

                     <br/> 
                    <Button className="btn btn-warning text-bold"  style={{minWidth: "170px" }}><b>Get Started </b></Button>


 </div>

          </div>
         
      </div>

      


      <div className="container-fluid">
      
          <div className="row bg-light">
              <div className="col-md-6 spleeteDownload p-0">


              <div className='bg-dark-transparent pr-4 pl-4 pb-5 d-block d-sm-block d-md-block d-lg-none d-xl-none'>
              <h1 className="text-white display-5 pt-5 marginTopText">Download Spleete App</h1>
                    <p className="lead  text-white">
                    Get the Spleete apps for Android or IOS</p>
                    <br/>

                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6'>
                      <img src={playstore}  style={{height: "34px"}}/>
                      &nbsp;&nbsp;&nbsp;
                      <img src={ios}  style={{height: "34px"}}/>
                      </div>
                    </div>
              </div>


              </div>

              <div className="col-md-6 pt-5 pl-5 pr-5 d-none d-lg-block" style={{background: "#FFA023"}}>
                   <h1 className="mt-4 text-white display-5">Download Spleete App</h1>
                    <p className="lead  text-white">
                    Get the Spleete apps for Android or IOS</p>
                    <br/>

                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-6'>
                      <img src={playstore}  style={{height: "34px"}}/>
                      &nbsp;&nbsp;&nbsp;
                      <img src={ios}  style={{height: "34px"}}/>
                      </div>
                    </div>

              </div>
          </div>
       
      </div>




      <footer className="container-fluid p-3">
        <div className="container">
          <div className="row mt-2  pb-5">
              <div className="col-md-4 pt-5 text-white">
                
                  <p>
                  Spleete offers convenient payment plan, helping you
                  buy the things you want, own them while paying
                  in monthly installments.
                  </p>
              </div>

              <div className="col-md-4 pt-5 text-white">
                <h5>Contact</h5>
                <p>Esat Building, 1 Grand Canal Quay, Dublin Docklands, 
                  Docklands, Co. Dublin, D02 FF61</p>

                <p>
                  <b>Customers Sales &amp; Service:</b><br/>
                  089 984 0107 (0899 PAY)</p>

                <p>team@spleete.co</p><br/>
              </div>

          

              <div className="col-md-4 pt-5 text-white">
              <h5>Connect with us </h5>
                
                <a className='SocialBtn'><i  className="fa fa-facebook"></i></a>
                <a className='SocialBtn'><i  className="fa fa-twitter  "></i></a>
                <a className='SocialBtn'><i  className="fa fa-linkedin  "></i></a>
                <a className='SocialBtn'><i  className="fa fa-instagram  "></i></a>
         
              <h6 className="text-white mt-3">Download The App</h6>
              <div className='row'>
                <div className='col-md-9'>
                <img src={playstore}  style={{height: "30px"}}/>
                &nbsp;&nbsp;&nbsp;
                <img src={ios}  style={{height: "30px"}}/>
                </div>
              </div>
              
                   
               
              </div>
          </div>
          <hr/>
        <div className="text-center">
          <h5>
            Spleete &copy; 2020
          </h5>
        </div>
 </div>
      </footer>

    </div>
 

    </>
  );
}

export default Home;
