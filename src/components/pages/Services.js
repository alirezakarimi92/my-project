import React from 'react';
import '../../App.css';


// این صفحه برای بیان اهدافمون هستش و بعد از کارمون باید این صفحه رو پاک کنیم
export default function Services() {
  return (
    <>


    <br />
    <h2>عنوان فرآیند</h2>
    <p>کد</p>
    <p>توضیح فرآیند</p>


    مک
    <h1 className='services'>SERVICES</h1>
  <p>اینجا به دنبال چه چیزهایی هستیم؟ <br />
        اهداف ما چه چیزهایی هستند؟ <br />
        تمام اهدافی را که میخواهی در اینجا بنویس و به تک تک آنها برس <br />
        موارد را به ترتیب اولویت بنویس
      </p>
      <br />
      <ol>
        <li>روند کلی فرآیند در شرکت مشخص شود</li>
        <li>تمام پروژه های موجود در شرکت مشخص شود</li>
        <li>برای cpm  تعمیرات سرد در سال آینده طرحی آماده شود</li>
        <li>برای pm طرحی مشخص بشه</li>
        <li>تاریخچه ی هر کاری که در شرکت انجام شده است مشخص باشد</li>
        <li>ارتباط بخش های مختلف به هم لینک شود</li>
      </ol>

      <h1>روند کار:</h1>
      <ol>
        <li>ابتدا محتوای اولیه را تهیه کن</li>
        <li>سپس استایل کار را زیبا کن</li>
        <li>به قدم یک برگرد</li>
        <li>هرجا کاری نیاز به انجام بود که هنوز مقدر به انجام نبود، ابتدا آن را در همین لیست اضافه کن و سپس انجامش بده</li>
      </ol>

      <h1>لیست انجام کارها:</h1>
      <ol>
        <li>صفحه ی اول کار را درست کن</li>
        <ol>روند اولیه ی کار:
          <li>یک چارت بر اساس روند فرآیند مشخص کن</li>
          <li>روی هر فرآیند که کلیک میکنی، باید لیست کارهایی که در آن قسمت انجام میشود باز شود</li>
          <li>همزمان با کلیک روی هر قسمت علاوه بر باز شدن لیست موجود در آن قسمت باید تصویری مرتبط با آن قسمت مشخص شود</li>
          <li>پس از باز شدن تصویر و لیست، بین تصویر و لیست، باید ارتباط وجود داشته باشد، به طوری که با رفتن روی هر آیتم در لیست باید آن قسمت از تصویر روشن شود و برعکس</li>
          <li>همچنین با هاور کردن روی هر قسمت تصویر باید توضیحی در رابطه با آن بخش داده شود که چه کارهایی در آن بخش انجام میشود</li>
          <li>همچنین با رفتن روی هر آیتم در لیست، علاوه بر روشن شدن آن بخش روی تصویر، تول تیپ هم روی تصویر مشخص شود، یعنی دیگر تول تیپ رو لیست نخواهیم داشت</li>
          <li>با کلیک روی هر قسمت وارد وارد آن بخش شده و توضیحات جامعی در مورد آن بخش در صفحه ی جدید خواهید یافت</li>
          <li>در هر صفحه ی جدید توضیحی در مورد هر قسمت داده خواهد شد که شامل موارد زیر میشود:
            <ul>
              <li>کاری که آن بخش انجام میدهد به صورت داستان وار توضیح داده شود</li>
              <li>تجهیزاتی که در آن قسمت مورد استفاده قرار میگیرند</li>
              <li>مشکلاتی که در آن بخش وجود دارد و برای هر مشکلی که وجود دارد یک پروژه تعریف خواهد شد</li>
              <li>یک پیج مخصوص پروژه ها خواهیم داشت که تمام پروژه ها در آنجا لیست خواهد شد و با کلیک روی هر آیتم در صفحه ی پروژه ها، به صفحه ی هر بخش لینک میشویم و در این صفحه از نوع مشکل و تاریخچه ی انجام آن مطلع میشویم</li>
              <li>تاریخچه ی کارهایی که روی آن بخش انجام شده است را مشاهده خواهیم کرد</li>
            </ul>
          </li>
        </ol>
      </ol>
      </> 
      )
}
