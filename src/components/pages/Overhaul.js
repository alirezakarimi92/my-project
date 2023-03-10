import React from 'react'
import '../../App.css';
import {Link} from 'react-router-dom'
function Overhaul() {
  return (
    <>
      <h1>hello my best friend</h1>
      <br />
      <h2> اینجا اقدامات لازم برای تعمیرات سرد رو دسته بندی میکنیم.</h2>
      <br />
      <p>برنامه ریزی این برنامه شامل سه بخش میشود:<br />
      بخش اول: برنامه ریزی بر اساس
      WBS
      که این بخش نیازمند دانش مدیریت کنترل پروژه میشود
      <br />
       بخش دوم: استفاده از یک نرم افزار: نرم افزار انجام کارها رو تسریع میکند
       <br />
       ما برای این بخش از 
       MS Project
       استفاده میکنیم
       <br />
       بخش سوم: جمع آوری اطلاعات مربوط به تعمیرات سرد
      </p><br /> <br />
      <div className='item'> 
          <Link to='/Overhaul1402' className='fortest' >
            تعمیرات سرد 1402
          </Link>
      </div>
      <br /> <br />

      <p>در حال حاضر فقط اطلاعات مهمه. پس فعلا در این سند روی اطلاعات متمرکز میشیم:</p> <br />
      <p>کاری که میکنیم اینه: براساس تعمیرات سرد دوره ی قبلی جلو میریم.
      <br />
      در دوره ی قبلی 4 زیرگروه تولید، مکانیک، برق و انبار وجود داشته است.
      این دسته بندی در دوره ی فعلی به 10 زیرگروه برق، 
      مکانیک، تولید، نسوز، بچ پلنت، تدارکات و انبار، برنامه ریزی، اسکلت فلزی، عمران، مستندسازی
      تقسیم شده است که در این بین به جز 2 زیرگروه برنامه ریزی و مستندسازی، 8 زیرگروه 
      دیگر، عملیاتی می باشند.<br />
      مدت زمان تعمیرات در دوره ی قبل 73 روز بوده است.
      و از تاریخ اول تیر 1399 (20 june 2020) آغاز به کار شده است.
      <br />
      براساس طرحی که توی این دوره داریم، پروژه ی تعمیرات سرد به 7 مرحله تقسیم شده است. 
      این هفت مرحله شامل موارد زیر میشود:
      <br />
      <br />
      <br />
      1. تخلیه ی مواد اولیه: <br />
        1) زمان انجام فعالیت: 20.5 روز<br />
        2) یادداشت: چیدمان صحیح آجرها<br />
        3) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک شرکت داشته اند. <br />
        4) شرح فعالیت زیرگروه ها:<br />
        1- تولید: <br />
        در این مرحله گروه تولید دو فعالیت که اولی پیشنیاز دومی است 
        را انجام خواهد داد: <br />
        اول: تخلیه ی کامل سیلوهای بچ پلنت <br />
        منابع: سه کارگر برای دو روز<br />
        پیشنیاز: آماده سازی بیگ بگ با توجه به موجودی مخازن<br />
        دوم: خارج کردن اسکرو بچ شارژرها<br />
        منابع: سه کارگر برای یک ساعت (این مشکوکه، کل فعالیت رو زده 20.5 روز
            بعد منابعش رو زده 3 کارگر برای یک ساعت)<br />
            پیشنیازها:<br />
            1-- نصب 3 عدد شاخص
            2-- تخلیه ی کامل سیلوهای بچ پلنت که در فعالیت یک همین بخش مشخص شده است.<br />
        2- مکانیک:<br />
        * در مدت دو روز نیروهای مکانیک به نیروهای تولید کمک کنند.

        3- برق: <br />
        همکاری با واحد تولید<br />
        حفاظت تابلوهای فن های زیرزمین از بخار آب و مذاب و در حال کار نگه داشتن آنها تا پایان تخلیه مذاب<br />
        آماده سازی سیستم روشنایی با لامپ های مناسب جهت افزایش دید در بخار زیاد<br />
        آماده سازی تجهیزات برق رسانی به محل تخلیه مذاب و همچنین مکان های موردنیاز<br />
        همکاری واحدهای انبار و جوشکاری جهت انتقال تابلوهای جدید الکترو گلاس به اتاق کنترل و نصب ساپورت <br />
        بررسی مسائل واحد برق در بچ پلنت <br />
        
      <br />
      <br />
      <br />
      2. تخلیه ی گرم مذاب<br />
      1) زمان انجام فعالیت: 20.5 روز <br />
      2) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک شرکت داشته اند. <br />

      <br />
      <br />
      <br />
      3. سرمایش کوره<br />
      1) زمان انجام فعالیت: 9 روز
      2) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک شرکت داشته اند. <br />

      <br />
      <br />
      <br />
      4. تخریب کوره<br />
      1) زمان انجام فعالیت: 10 روز
      2) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک و انبار شرکت داشته اند. <br />

      <br />
      <br />
      <br />
      5. استراکچر فلزی<br />
      1) زمان انجام فعالیت: 2 روز
      2) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک و انبار شرکت داشته اند. <br />

      <br />
      <br />
      <br />
      6. نسوز چینی<br />
      1) زمان انجام فعالیت: 34 روز<br />
        2) یادداشت: چیدمان صحیح آجرها      <br />
        3) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک شرکت داشته اند. <br />
      
        <br />
      <br />
      7. استارت کوره<br />
      1) زمان انجام فعالیت: 14 روز
      2) منابع: در این قسمت سه گروه تولید، مکانیک و الکترونیک و انبار شرکت داشته اند. <br />

      <br />
      <br />
      
        آنچه باید در این برنامه ریزی به آن دقت شود:
        <br />
        1. درست کردن تقویم مناسب برای پروژه
        <br />
        2. منابع (انسانی، مالی، مواد)
        <br />
        3. قرار دادن افراد در جایگاه درست خود.
        <br />
        4. خبر دادن به افراد برای انجام کارها
        <br />
        5. زمان انجام هر task باید مشخص بشه
      </p>

    </>
  )
}

export default Overhaul
