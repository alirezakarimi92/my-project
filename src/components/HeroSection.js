import React from 'react'
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import {Link} from 'react-router-dom'
function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      {/* <video src='videos/video-2.mp4' autoPlay loop muted /> */}
      <h1>"WELCOME TO DASHCO"</h1>
      
      <div class='grid-container'>
        <div className='item1'>
          <Link to='/R&D' className='dashco-units' >
            R&D
          </Link>
        </div>
        <div className='item2'>
          <Link to='/HSE' className='dashco-units' >
            HSE
          </Link>
        </div>
        <div className='item3'>
          <Link to='/Lab' className='dashco-process' >
            آزمایشگاه
          </Link>
        </div>
        <div className='item4'>
          <Link to='/Store' className='dashco-process' >
          انبار 
          </Link>
        </div>
        <div className='item5'>
          <Link to='/Products' className='dashco-process' >
            واحد تولید
          </Link>
        </div>
        <div className='item6'>
          <Link to='/Batch' className='dashco-process' >
            بچ پلنت
          </Link>
        </div>
        <div className='item7'>
          <Link to='/Furnace' className='dashco-process' >
            کوره و فرآیند ذوب
          </Link>
        </div>
        <div className='item8'>
          <Link to='/Forming' className='dashco-process' >
             شکل دهی
          </Link>
        </div>
        <div className='item9'>
          <Link to='/Glazing' className='dashco-process' >
            برش و گلیزینگ
          </Link>
        </div>
        <div className='item10'>
          <Link to='/Bundle' className='dashco-process' >
            بسته بندی
          </Link>
        </div>
        <div className='item11'>
          <Link to='/Qc' className='dashco-process' >
            کنترل کیفیت
          </Link>
        </div>
        <div className='item12'>
          <Link to='/Storage' className='dashco-process' >
            انبارش محصول
          </Link>
        </div>
        <div className='pic'><img src='./images/background.jpg' alt='Company Parts'/></div>
        <div className='project'>
          <Link to='/Projects' className='dashco-process' >
            پروژه ها
          </Link>
        </div>
        <div className='overhaul'>
          <Link to='/Overhaul' className='dashco-process' >
            تعمیرات سرد
          </Link>
        </div>
        <div className='connector'>
          <Link to='/Glass_Story' className='connect' >
            Glass Story
          </Link>
        </div>
      </div>

      {/*<p>What are you waiting for?</p>*/}
      {/*<div className='hero-btns'>*/}
        {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button> */}
        {/*<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className="far fa-play-circle" /></Button> */}
      {/*</div>*/}
    </div>
    
    </>
  )
}

export default HeroSection
