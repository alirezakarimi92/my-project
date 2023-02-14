import React from 'react'
import '../../App.css';
function Qc() {
  return (
    <>
      <h1>QC</h1>
      <br />
      <h2>کنترل و بازرسی</h2>
      
      <h3>کنترل مواد اولیه</h3>
      <div className='primary-container'>
        <div className='primary-item'>ورود مواد اولیه</div>
        <div className='arrow'><i class="fa-solid fa-arrow-left-long"></i></div>
        <div className='primary-item'>کدگذاری و چاپ لیبل</div>
        <div className='arrow'><i class="fa-solid fa-arrow-left-long"></i></div>
        <div className='primary-item'>نمونه برداری</div>
        <div className='arrow'><i class="fa-solid fa-arrow-left-long"></i></div>
        <div className='primary-item'>تحویل به آزمایشگاه</div>
        <div className='arrow'><i class="fa-solid fa-arrow-left-long"></i></div>
        <div className='primary-item'>آنالیز مواد</div>
        <div className='arrow'><i class="fa-solid fa-arrow-left-long"></i></div>
        <div className='primary-item'>انبارش در انبار</div>
      </div>
      <h3>کنترل محصول</h3>
      <h3>کنترل ملزومات بسته بندی</h3>
      <h3>بازرسی بچ پلنت</h3>
      <h2>کالیبراسیون</h2>
    </>
  )
}

export default Qc
