import React from 'react';
// import useAboutus from './testinomialstyle';

import { useTheme } from '@mui/material/styles';
import {useSpring, animated} from 'react-spring';
import useAboutus from "./testinomialstyle"
import Image from "next/image"
// import Img11 from '../public/1.png';
// import Img22 from '../public/2.png';
// import Img33 from './photos/img3.jpg';
import cool from './images/cool.png'

import {Box, Button, Typography, Rating, MobileStepper} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const imagesHp = [
  {
    head1: 'John Alex',
    para1: 'I am impressed with the companys use of blockchain technology to store employee information. This adds an extra layer of security and ensures that all data is tamper-proof and easily accessible by authorized parties. The implementation of this system has greatly improved the efficiency and accuracy of our record-keeping. Well done !',
    para2: 'CEO Binnnce',
    imaged: "../images/vr.jpg",
  },

  {
    head1: 'Jessica Moore',
    para1: 'The companys implementation of blockchain technology for managing employee information is truly impressive. Not only does it provide unparalleled security for sensitive data, but it also makes the process of accessing and updating personal information much more efficient. The user interface is intuitive and easy to navigate, making it simple for me to manage my own information. I am grateful for the companys investment in this technology and for the dedication to maintaining the privacy and security of all employee information',
    para2: 'User',
    imaged: "./images/cool.jpg",
  },

  {
    head1: 'John Doe',
    para1: 'I am extremely impressed with the companys use of blockchain technology to not only manage employee information but also to pay salaries. This innovative approach ensures that all sensitive data is protected and tamper-proof while also providing a secure, efficient and transparent way of handling payroll. The system is user-friendly and easy to navigate, making it simple for me to access my salary information and transaction history. I appreciate the companys commitment to using cutting edge technology to streamline processes and enhance security. It gives me a lot of trust in the company for handling my personal and financial information ',
    para2: 'CEO Mabelya',
    imaged: "./images/cool.jpg",
  },

];

const Aboutus = () => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = imagesHp.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const value = 5;

  const classes = useAboutus();

  const numb1= 120;
  const numb2= 2036;
  const numb3= 3012;
  const numb4= 234;

  const props1 = useSpring({val: numb1, from : {val : 0}})
  const props2 = useSpring({val: numb2, from : {val : 0}})
  const props3 = useSpring({val: numb3, from : {val : 0}})
  const props4 = useSpring({val: numb4, from : {val : 0}})


  return (
    <>
      <div className = ""></div>

      
      <Box id = "About" className={classes.about}>
        <div className={classes.mainabout}>
          <div className={classes.img_div}>
            <div className={classes.right_div}>
              <div className={classes.part_right1}>
                <div className={classes.right_head}>
                  <Typography variant="h2" className={classes.head}>About Us</Typography>
                </div>
                            
                <div className={classes.right_para}>
                  <div className={classes.right_para1}>
                    <Typography variant="p" className={classes.para1}>The more we drive the car the better they seem to operate operate. No noise, just stopping power! Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae. consequatur,</Typography>
                  </div>
                                
                  <div className={classes.right_para2}>
                    <Typography variant="p" className={classes.para1}> vel illum qui dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea voluptate verit qui in ea voluptate vele. </Typography>
                  </div>
                </div>
                                
                <div>
                  <Button variant='contained' className={classes.right_btn}>Learn More </Button>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.middle_space}></div>

            <div className={classes.div_image}>
            <div className={classes.left_image}>
                <Image className="set_image" src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/car.png" alt ="Image" height = {350} width = {350} />
            </div>
            </div>
          </div>


          <div className={classes.main_numbers}>
            <div className={classes.div_numbers}>
              <div className={classes.common_num}>
                <div className={classes.number}>
                  <animated.h1 className={classes.incr_number}>{props1.val.to(val=>Math.floor(val))}</animated.h1>
                    <div className={classes.para_bottom}>
                      <Typography variant="p" >Stores around the world</Typography>
                    </div>
                  </div>
                </div>

                <div className={classes.common_num}>
                  <div className={classes.number}>
                    <animated.h1 className={classes.incr_number}>{props2.val.to(val=>Math.floor(val))}</animated.h1>
                      <div className={classes.para_bottom}>
                        <Typography variant="p" >Satisfied customers</Typography>
                      </div>
                    </div>
                  </div>

                  <div className={classes.common_num}>
                    <div className={classes.number}>
                      <animated.h1 className={classes.incr_number}>{props3.val.to(val=>Math.floor(val))}</animated.h1>
                      <div className={classes.para_bottom}>
                        <Typography variant="p" >Auto Parts</Typography>
                      </div>
                    </div>
                  </div>

                  <div className={classes.common_num}>
                    <div className={classes.number}>
                      <animated.h1 className={classes.incr_number}>{props4.val.to(val=>Math.floor(val))}</animated.h1>
                      <div className={classes.para_bottom}>
                        <Typography variant="p" >Awards</Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={classes.last_section}>
                <div className={classes.div_section}>
                  <div className={classes.write_top}>
                    <Typography variant="h1" className={classes.write_top_head}>Testimonials</Typography>
                    <Typography variant="p" className={classes.write_top_para}>During our work we have accumulated hundreds of positive reviews.</Typography>
                  </div>

                  <div className={classes.write_bottom}>
                    <div className={classes.img_star}>
                      <div className={classes.class_img}>
                        {console.log("activeStep",activeStep)}
                        <Image className={classes.photo_img}  src={imagesHp[activeStep].imaged} alt = "image" height = {250} width = {250}/>
                      </div>

                      <div className={classes.auto_stepper}>
                        <div className={classes.auto_swipper}>
                          {imagesHp.map((step, index) => (
                            <div>
                              {Math.abs(activeStep - index) <= 0 ? (
                                <Box>
                                  <div className={classes.class_review_para} >
                                    <div className={classes.left_para}>
                                      <Typography variant="p" className={classes.head}>{step.para1}</Typography>
                                    </div>

                                    <div className={classes.hp_star}>
                                      <div className={classes.hp}>
                                        <div className={classes.sub_hp1}>
                                          <Typography variant="h4" className={classes.sub_hp1_head}>{step.head1}</Typography>
                                        </div>

                                        <div className={classes.sub_hp2}>
                                          <Typography variant="p" className={classes.sub_hp2_para}>{step.para2}</Typography>
                                        </div>
                                      </div>

                                      <div className={classes.sub_star}>
                                        <Box>
                                          <Rating name="read-only" value={value} readOnly />
                                        </Box>
                                      </div>
                                    </div>

                                  </div>
                                </Box>
                              ) : null}

                            </div>
                          ))}
                        </div>
                                    
                        <MobileStepper className={classes.back_next} variant="none" steps={maxSteps} position="static" activeStep={activeStep} nextButton={
                          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} className={classes.btn_arrow}>
                            {theme.direction === 'rtl' ? (
                              <ArrowBackIcon className={classes.arrow}/>
                            ) : (
                              < ArrowForwardIcon className={classes.arrow}/>
                            )}
                          </Button>
                        }
                                        
                        backButton={
                          <Button size="small" onClick={handleBack} disabled={activeStep === 0} className={classes.btn_arrow}>
                            {theme.direction === 'rtl' ? (
                              < ArrowForwardIcon  className={classes.arrow}/>
                            ) : (
                              <ArrowBackIcon  className={classes.arrow}/>
                            )}
                          </Button>
                        }/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Aboutus;
