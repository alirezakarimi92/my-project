import React from 'react'
import '../../App.css';

function Batch() {
  return (
    <>
      <h1>BATCH PLANT</h1>
      <br />
      <h2>راهبری بچ پلنت</h2>
      <p>
      واحد بچ پلنت شامل مجموعه ای از بخش های سخت افزاری و نرم افزاری است که وظیفه ذخیره و توزین و اختلاط مواد اولیه و همچنین انتقال بچ تهیه شده به مخازن بچ روزانه (Daily Tanks ) را دارد. بچ پلنت شامل دو پنل کنترلی با سه صفحه نمایشی نصب شده در درب های پنل¬های کنترلی است. بر روی صفحات نمایشی مجموعایی از چراغ هایLED  و کلید هایی جهت نمایش وضیعت عملکردی و  توزین به صورت دستی تعبیه گردیده است. سیستم کنترلی شامل یک PLC S7 و  سیستم HMI(رابط نرم افزاری با  PLC و MWS-10A) و  سه ترازوی MWS-10A می¬باشد. سیستم بچ پلنت جهت تغذیه دو کوره طراحی شده است . تا چهار دستور العمل یا فرمولاسیون می تواند توسط سیستم ذخیره و استفاده شود و سیستم قابلیت ذخیره نرم افزاری تا 1000 توزین بچ را داراست.
      ذخیره مواد اولیه و خرده شیشه طبق دستورالعمل¬ شارژ مواد اولیه به مخازن مربوطه  با کد D-INS-PR-02 و دستورالعمل شارژ شیشه خرده به سیلوی کالت با کد D-INS-PR-01 انجام پذیرفته و  دیگر مراحل عملیاتی نیز در این دستور العمل توضیح داده خواهد شد.
      توزین سه ماده اولیه در ترازوی شماره یک (Scale1) و چهار ماده اولیه دیگر (وزن کم) در ترازوی شماره دو(Scale2)و خرده شیشه در ترازوی شماره چهار Scale4)) انجام می پذیرد. ماکزیمم ظرفیت توزین اسکیل یک 300 کیلوگرم  و اسکیل دو 40 کیلوگرم و اسکیل چهار نیز 200 کیلوگرم می باشد. کلیه پارامتر های لازم جهت فرایند توزین در هر یک از اسکیل ها می¬تواند توسط صفحه کلید خود ترازو( MWS-10/A) وارد شده و بخشی از این پارامتر ها از جمله تغییرات در اوزان فرمولاسیون و تلرانس ها و غیره از طریق نرم افزار رابط بین اسکیل و PLC نیز قابل برنامه ریزی است. سیستم انتقال مواد از زیر مخازن به اسکیل¬ها به صورت شارژرهای حلزونی(Dosing Screw) است که گیربکس آن از طریق درایو مربوطه ، دور متغیر بوده و می تواند با تنظیم میزان  دور Coarse و دورFine  مواد اولیه را با دقت به داخل ترازوها مطابق وزن تعریف شده انتقال دهد.
      4-1- روش های  توزین:
      در تابلوی توزین سلکتور سوییچ Mode OF Operation با چهار وضعیت 1-Off 2-Service 3-Standby  4-Automatic  و کلید های Horn Off  و Failure Reset Batch Plant و سوییچ  in Service Transport To Furnace و Control Voltage On  و Simulation Furnace1.1 Full و Simulation Furnace1.2 Full قرار گرفته است که کارکرد های ان در ادامه توضیح داده خواهد شد.
      4-1-1- قرار گیری سلکتور سوییچ  Mode OF Operation بر روی off  سیستم را متوقف کنید تا سیکل کاریreset  شود. 
      4-1-2- در مد Servies  می توان به کلیه  دستگاه ها به صورت جداگانه دسترسی داشت و توسط تابلو تک تک آنها را خاموش و روشن نمود. بدیهی است این مد کاری زمانی که سیستم نیازمند تعمیرات است یا می خواهیم بچ به صورت دستی زده شود، استفاده می شود. بر روی صفحه کنترلی گوشه سمت راست در زیر محل تعیین Mode of Operation لامپService  روشن می گردد.
      4-1-3- سوییچ به Standby  زمانی است که در سیستم  اتوماتیک یا نیمه اتوماتیک بخواهیم سیکل کاری متوقف گردد. 
      این سوییچ  موقتا سیستم ها را متوقف می¬کند ولیکن سیکل کاری می تواند با  زدن مجدد سوییج بر روی  اتوماتیک از همان بخش ادامه یابد. بر روی صفحه کنترلی گوشه سمت راست در زیر محل تعیین  Mode of Operation  لامپStandby  روشن می گردد.
      4-1-4- در بکارگیری سوییچ  Automaic  سیستم به صورت کاملا  اتوماتیک یا نیمه اتوماتیک(Semi Automatic) قابلیت کار خواهد داشت. در صورت استفاده از روش اتوماتیک یا نیمه اتوماتیک در کامپیوتر حتما این سوییچ در تابلو بایستی در موقعیت Automatic قرار گیرد. بر روی صفحه کنترلی گوشه سمت راست در زیر محل تعیین  Mode of Operation  لامپ Automatic یا SemiAutomatic  با توجه به انتخاب روش در کامپیوتر روشن خواهد شد..
      4-2- روش اتوماتیک 
      سیستم فرمان آغاز پروسه ساخت بچ را، با توجه به عدم دریافت سیگنال سنسور کنترل سطح (خاموشی چراغ)  که در بالای مخازن  Furnace Silo 1.1 و Furnace Silo 1.2 قرار گرفته و با توجه به زمان Calling Time  که برای آن در  PLC تعریف شده است، گرفته (چشمک زدن چراغ مرکزی) و تا زمان پر شدن سیلو ها فرایند بچ زنی را ادامه می دهد. در روش اتوماتیک، جهت جلوگیری از ادامه بچ زنی در هر یک از سیلوها، از سوییچ Simulation Furnace1.1 Full یا SimulationFurnace1.2 Full  استفاده نموده و چراغ  نشان دهنده پر بودن سیلوها را روشن نمایید تا سیگنال مربوطه ارسال گردد. و به این ترتیب فرایند پروسه بچ زنی را از ابتدای سیکل بعدی متوقف نمائید.
      4-3- روش نیمه اتوماتیک  
      در این روش از طریق اپراتور و با زدن (کلید Start) فرایند تولید بچ را آغاز نموده تعداد بچ تولید شده برای هر سیلو را تعیین نماید. در صورت لزوم دستور العمل یا (Formula) را نیز تغییر دهید.  به سه طریق سیستم را متوقف نمائید:
      1)	از طریق کامپیوتر کلید Stop را فعال نمائید. 
      2)	تعداد بچ های درخواست شده را به اتمام برسانید.
      3)	 سیلو ها را پر نموده و سیگنال سنسور کنترل سطح بار (High Limit) را فعال نمائید.
      4-4- تعیین دستورالعمل بچ (Formula)
      همان طور که گفته شد سیستم می تواند تا چهار دستور العمل یا فرمول را در خود ذخیره کند و هنگام بچ زنی همیشه فرمولاسیونی که در بخش Preselection  انتخاب گردیده است اعمال می گردد. در حال حاضر در کارخانه Formula1 استفاده می گردد و می توان هم از طریق نرم افزار مربوطه یا از طریق صفحه کلید MSW-10 A پارامتر های تعریف شده در دستور العمل را وارد نمود.
      ولی قبل از آن بایستی در بخش Names بر هر یک از مواد اولیه نام (Material) و شماره سیلو مربوطه(Silo) و نام دستور العمل (Formula) را وارد کرده باشیم . در بخش  Recipe Setting  پارامتر های اصلی از جمله وزن ماده اولیه و تلرانس های مجاز  و اختلاف وزن  تغییر دور تند به کند و وزن تصحیح در هر مرحله به شرط فعال بودن گزینه Correction Step و غیره را  برای هر یک از مواد اولیه در هر یک از ترازوها تعریف می گردد .
      4-5- فرایند توزین :
      4-5-1- ترازوی شماره یک(Scale1) :
      در این ترازو در حال حاضر سه ماده توزین می شود. ترتیب توزین مواد در ترازو با توجه به اولویت ورود پارامتر ها در بخش Recipe Setting تعیین می گردد. در شروع کار هر ترازو بایستی فرمان Scale Empty در نمایشگر آن ظاهر گردد یعنی ترازو خالی است. اگر این اتفاق نیافتد بایستی به صورت دستی دریچه زیر ترازو باز شده و با   Knocker ترازو تخلیه گردد. در صورت  عدم تخلیه کامل ترازو در هر مرحله سریعا بایستی اقدام عاجل به عمل آید.
      در هر مرحله ترازو ابتدا  Tare شده و با دور Coarse و پس از رسیدن به اختلاف وزن انتخابی از وزن نهایی در پارامتر ها،  از دورCoarse  به دورFine  ماده را به داخل ترازو توسط شارژهای حلزونی زیر مخازن مربوطه می ریزد . شدت دورهای ذکر شده توسط ولوم هایی که در داخل تابلو مربوط به سیلوهای مواد است، کم یا زیاد می شود. تنظیم مناسب میزان این ولوم ها جهت کنترل دقت توزین¬ها لازم است . اگر به دلایلی وزن ماده کمتر  یا بیشتر از میزان تعریف شده در تلرانس باشد سیستم متوقف شده و اپراتور باید  موضوع را بررسی نماید و در صورت کم بودن می تواند  به صورت دستی که  مراحل آن در ادامه خـواهد آمـد، مـاده مـورد نظر را به وزن نهایی برساند و در صـورت زیاد بـودن وزن پس از زدن کـلیدReset  در صفحه (Tab)  Plant Status در جلوی سطر سیکل عملیاتی ماده مورد نظر، تصحیحات لازمه را در بچ بعدی اعمال نماید. پس از توزین هر سه ماده  فرمان Scale Full  در نمایشگر ترازو و پایین بخش سیکل عملیاتی صفحه Plant Status در بخش Scale1   نمایش داده میشود. . 
      4-5-2- ترازوی شماره دو(Scale2):
      در این ترازو در حال حاضر چهار ماده با اوزان کم توزین می شود. ماکزیمم ظرفیت ترازو 40 کیلوگرم است. در این ترازو نیز شرایط عملیاتی کاملا شبیه ترازوی شماره یک است . در انتهای حلزونی هر یک از شارژها یک دریچه (Flap)  قرار داده شده است که بلافاصله بعد از توقف دور Fine   مسیر ورود مواد به ترازو را می بندد تا از ریزش اضافه مواد جلوگیری کند(Cut off) . پس از توزین هرچهار ماده فرمانScale Full در نمایشگر ترازو و  پایین بخش سیکل عملیاتی صفحه Plant Status در بخش Scale2   نمایش داده میشود. .
      4-6- تخلیه  ترازوها:
       اگر فرمان Scale Full در هر دو ترازو مواد اولیه نمایش داده شده باشد، فرایند تخلیه با قید اتمام سیکل کاری قبلی میکسر و خالی بودن آن صورت میگیرد. ابتدا درب پنوماتیکی زیر هر دو ترازو باز شده و با ضربه های knocker مواد توزین شده به داخل میکسر می ریزد . فرکانس زمانی ضربه های knocker  در دو ترازو در بخش Timer Scales به ثانیه داده میشود.
      این ضربه ها تا زمانی که فرمان Scale Empty  از ترازو به PLC فرستاده شود ادامه می یابد و بعد از آن دریچه بسته شده و سیکل بعدی توزین در صورت درخواست بچ انجام می شود.
      
      4-7- بخش اختلاط(Mixing)
      میکسر شرکت ازنوع Pan Mixer Turbo ساخت شرکت Zippe بوده و ظرفیت 250 lit را داراست. بازو های داخل میکسر(Paddles)   سطوح داخلی و بیرونی و کف و میانی میکسر را دربر گرفته و همگنی مطلوبی ایجاد می کند. قبل از تخلیه مواد به داخل میکسر ، میکسر روشن شده و بعد از تخلیه کامل دو مرحله زمانی Dry Mixing و WetMixing  را طی می کند زمان انجام هر دو مرحله و همچنین پارامتر های دیگر از جمله Outlet open time  در بخش Timer Plant  داده می شود. که درحال حاضر به ترتیب 150secو 40sec می باشد   هم زمان با شروع Wet Mixing عمل رطوبت زنی به میکسر انجام می شود. هم حجمی (Liters)  با استفاده  از فلومتر  در مسیر ،و هم زمانی(Seconds ) از طریق plc و  سپس فرمان قطع آب مسیر و بسته شدن توسط شیر Shut off Valve  انجام می شود. در زمان Wet Mixing  تخلیه خرده شیشه  از ترازوی شماره چهار صورت می گیرد و خرده شیشه با مواد اولیه اختلاط پیدا می کند. 
         در پنل نمایشی چراغ هاو کلید هایی در بخش میکسر جهت تشخیص کارکرد موتور و توقف آن و تشخیص خرابی در Thermistorو زدن کلید Emergency Stop   و همچنین رطوبت زنی به بچ تعبیه گردیده است که کارکرد میکسر در حالت دستی را  نیز مقدور می سازد. با توجه به طراحی بچ پلنت جهت تغذیه دو کوره با دو میکسر حتما در زمان شروع توزین در بخش Preselection  نرم افزار  بایستی نام  میکسر داده شود. و همچنین در بخش Recipe Setting   نیز میزان  آب جهت رطوبت زنی بر حسب لیتر یا زمان تزریق آب وارد شود.
      بعد از اتمام زمان Wet Mixing دریچه پایین میکسر باز شده و  بچ به داخل Post Hopper می ریزد. در بخش Timer Plant   تعیین  پارامتر های Post Hopper EmptyDelay , Control  Time DisCharge Impactor Post Hopper Delay و فرکانس knocker نصب شده در Post Hopper  با توجه به شرایط تخلیه  انجام می پذیرد.  اگر به دلایلی بچ از داخل Post Hopper  تخلیه نشده و  زمان تخلیهDelay Post Hopper Empty به اتمام برسد. آژیر بروز نقص بصدا در خواهد آمد.
      4-8- انتقال بچ:
      هم زمان با wet Mixing  آژیر روشن شدن سیستم انتقال بچ از زیر میکسر به مخازن بالای کوره فعال می شود و پس از چند ثانیه  برطبق تقدم روشن شدن سیستم ها ابتدا کانوایر بالای مخزنی که درخواست بچ  دارد و کانوایر دو جهته و کانوایر انتقال اصلی و الواتور و ویبره شوتی زیر الواتور روشن خواهند شد . برای الواتور ها و کانوایر ها سیستم control Rotation   قرار داده شده که در زمان توقف ناخواسته اعلام خرابی می نماید. فعال یا غیر فعال بودن این سیستم کنترلی در هر یک از کانوایر ها و الواتور ها بخش Preselect ion تعیین می گردد.
      در بالای الواتور یک شوتی دو مسیره(شلوارکی) قرار گرفته که در صورت ناقص و غیر قابل مصرف بودن بچ با تغییر مسیر می توان آن را Reject نمود. پس از  تخلیه کامل Post hopper  سیگنال سنسور کنترل سطح  کلیه سیستم های انتقال بچ را با رعایت تقدم ابتدا ویبره شوتی  زیر الواتور وسپس الواتور و کانوایر اصلی و کانوایر دو جهته و کانوایر مخزن خاموش خواهد نمود.
      در بخش نرم افزاری بخشی جهت دریافت اطلاعات هر بچ به  نام Batch Protocol وجود دارد که تاریخچه بچ های  تولید شده را تا 1000 بچ ذخیره می کند. و قابلیت جستجو و پیمایش و ذخیره در هر Record را دارد. هر یک از بچ های تولید شده در قالب فایل PDF روی کامپیوتر بچ به طور اتوماتیک ذخیره می¬شود. کلیه مصارف روزانه و کلیه مواد اولیه  در بخش consumption در دسترس است. در انتهای هر روز کاری تعداد بچ¬های شارژ شده و همچنین مجموع مصرف مواد اولیه طی آن روز توسط پرسنل اتاق کنترل در فرم گزارش شیفت به کد D-FD-PR-23ثبت گردد.کلیه خطاها وآلارم هایی که در سیستم ایجاد می شود، در بخش  صفحهAlarms  دیده شده و میتوان  پردازش نمود. 
      سیستم نرم افزاری شامل  login   جهت ایجاد سطح دسترسی کاربر در تغییر  پارامتر های اصلی است و اکثر پارامتر ها از جمله اوزان مواد اولیه در هر بچ توسط کاربر Administrator انجام می گیرد.
      4-9- روش توزین دستی:
       در زمانهایی که به دلایل فنی نتوان از سیستم اتوماتیک تولید بچ بهره برد از روش دستی استفاده نمایید.
      در این روش از کامپیوتر و نرم افزار مربوطه استفاده ننمایید و فرایند توزین بر روی هر یک از ترازو ها را به صورت جداگانه و دستی انجام دهید.
      4-9-1- ابتدا  Mode OF Operation  را بر روی Service قرار دهید. 
      4-9-2- از بسته بودن درب زیر کلیه  ترازو ها مطمئن شوید. 
      4-9-3- مطمئن شوید که در داخل ترازو و میکسر هیچگونه موادی باقی نمانده باشد. در صورت وجود مواد اقدام به تخلیه آن نمائید.
      4-9-4- در هر یک از ترازو ها با توجه به تعداد Component  یا مواد اولیه  توزین کننده کلید چند وضعیتی تعبیه گردیده است برای مثال سلکتور سوییچ Component   ترازوی شماره یک کلید چهار وضعیت (یک وضعیت 0  یا غیر فعال) و  سه وضعیت دیگر شماره ترکیب در فرمولاسیون (1 تا 3 ) می باشد. کلید دیگر(Coarse/Fine) در هر یک از ترازوها یکسان است و عملکرد آن روشن کردن موتور شارژ Component  مربوطه در دور تند یا کند است. کلید مشابه بعدی  نیز Failure Rest خطا های ترازو را برطرف می کند.  کلید مشابه بعدی سلکتور سوییچ IN Manual  با دو گزینه Full و Empty است که پس از اتمام توزین تمامی مواد اولیه در هر ترازو سیگنال Scale Full را  به PLC ارسال می کند. 
      
      </p>



      
      <h2>شارژ شیشه خورده به سیلوی کالت (شیشه خورده):</h2>
      <p>D-INS-PR-01</p>
      <p>تیوب هایی که به دلایل کیفی ریجکت شده اند با عمل نکردن جک موجود بعد از ماشین کشش و قبل از
       sorting 
       درون گاری تعبیه شده می افتند. همچنین تیوپ هایی که به دلیل عدم برش در کاتینگ ثانویه زائده دار شده اند، تیوب هایی که گلیز مناسب ندارند و یا تیوب هایی که به دلیل خطای دستگاه های
        vision 
        ریجکت نشده اند جداسازی ودرون گاری ضایات بریزید
       . (توسط پرسنل بسته بند) 
       این گاری ها را پس از تکمیل ظرفیت توسط پرسنل خدمات تولید به محوطه ی بیرون سالن تولید انتقال و توسط لیفتراک به کاشر خرده شیشه منتقل کنید.
      سپس با استفاده از جرثقیل، گاری را به بالای کراشر منتقل کرده و پس از روشن کردن آن گاری را تخلیه کنید. ضایعات تیوب های شیشه ای پس از عبور از دو کراشر چکشی خرد شده و با الواتور جهت شارژ به سیلو منتقل می شود. در مواقع تکمیل ظرفیت سیلو و آلارم سنسور کنترل سطح بار تیوب های ضایعاتی پس از یک مرحله خردایش در چکشی اول کراش، در بیگ بگ ذخیره کنید. لیبل تحت نام برچسب شناسایی اقلام ورودی با کد 
      D-FS-QC-14
       که دارای شماره، تاریخ و شیفت است روی آن الصاق کنید تا جهت استفاده در صورت نیاز قابل ردیابی باشد. 
      طبق پروژه بازیافت مواد، درصدی از شیشه خرده مصرفی از طریق پوکه های ویال، آمپول و کارپول برگشتی 
      (چاپدار و بدون چاپ)
       از سایت یک تحت عنوان 
       old cullet
        در بچ اضافه کنید. نحوه شارژ پوکه های برگشتی همانند تیوب های ضایعاتی حاصل از فرآیند سایت دو می باشد با این تفاوت که بیگ بگ های حاوی آن ها بالای چکشی دوم کراشر نصب، تخلیه و خرد کنید. سپس با الواتور انتقال پیدا کرده و با معکوس کردن مسیر تسمه نقاله در تابلوی 
        Zippe 
        توسط پرسنل اتاق کنترل به سیلوی مربوط به شیشه امبر انتقال دهید. در مرحله بعد پرسنل بچ پلنت بیگ بگی در زیر دریچه تخلیه سیلوی امبر در همکف بچ پلنت قرار داده و بعد از تخلیه پوکه ها با جرثقیل به طبقه سوم بچ پلنت منتقل شده و در یکی از مخزن های در نظر گرفته
         Scale 2 
         تخلیه کنید. هنگام تخلیه پوکه ها حضور بازرس بچ پلنت الزامی می باشد. برنامه شارژ پوکه های برگشتی در فرم برنامه شارژ مواد اولیه به سیلوی بچ پلنت به کد 
         D-FS-PR-01
          را ثبت کنید و جهت اطلاع پرسنل بچ پلنت نسخه ای نیز در اختیار آن ها قرار دهید.
      شارژ شیشه خرده به دو طریق اتوماتیک و دستی انجام می گیرد. بهتر است از روش اتوماتیک با توجه به مزایای آن استفاده گردد.
      کلید تابلوی بچ پلنت اتاق کنترل سه وضعیت  اتوماتیک
      (Auto) _ 
      دستی
      (Hand)
       _ خاموش 
       (Zero)  
       را داراست.
      در زیر زمین 
      (-2) 
      تابلویی موجود می باشد که شامل دکمه های
       Start Feeding  
       (شروع عملیات شارژ)
       - Stop Feeding
       ( توقف عملیات شارژ) و
        Horn Off
         ( قطع آژیر اخطار) 
         است.
      4-1- روش اتوماتیک: 
      4-1-1- در تابلوی اتاق کنترل وضعیت را به مد اتوماتیک تغییر دهید.
      4-1-2- در زیر زمین(-2) دکمه Start Feeding را که چشمک زن شده است فعال کنید تا لامپ سبز رنگ این دکمه در این حالت دائم روشن شود و سیستم به ترتیب صحیح فعال گردد.
      4-1-3- تا زمانی که دکمه سبز رنگ تابلو زیرزمین (-2) روشن است سیستم را در وضعیت اتوماتیک قرار دهید و برای خاموش و یا روشن کردن سیستم شارژ در اتاق کنترل کلید تابلو را در وضعیت خاموش و یا اتوماتیک قرار دهید.
      4-1-4- چنانچه کلید تابلو را به علت تعمیرات و یا هر دلیل دیگر، به وضعیت دستی قرار دادید روش فوق را مجددا انجام دهید تا سیستم به وضعیت اتوماتیک برگردد.
      4-1-5 - سطح مخزن خرده شیشه را توسط سنسور کنترل سطح بار کنترل نمائید تا در سیستم اتوماتیک با رسیدن میزان خرده شیشه مخزن به سطح تنظیمی سنسور کنترل سطح (High Level ) سیستم به صورت اتوماتیک خاموش شود. (به خاطر داشته باشید در صورت شارژ به صورت دستی سیستم کنترل سطح عمل نمی نماید لذا همواره مراقب میزان سطح بار در مخزن باشید که مشکلOver Flow  پیش نیاید.)
      
      4-2- روش دستی شارژ:
      4-2-1- چنانچه کلید تابلو را به وضعیت (Hand) برگردانید در تابلوی اصلی لامپ زرد رنگ Service  فعال شده و در فلو دیاگرام مسیر شارژ خرده شیشه در تابلوی اصلی هر یک از تجهیزات به تنهایی می تواند با دکمه مربوطه روشن و یا خاموش گردد. 
      4-2-2- در زیرمین (-2) نیز جهت تعمیرات بخش های مختلف سیستم شارژ خرده شیشه اعم از کراشر و ویبراتورها کلیدهای مجزایی تعبیه گردیده که در مد دستی آنها را بکارگیری کنید.
      4-2-3- جهت روشن کردن سیستم به روش دستی (Hand) ، روشن کردن تجهیزات را به ترتیب اولویت زیر انجام دهید
      1- کانوایر بالای مخزن
      2- الواتر
      3- ویبراتور پایین کراشر
      4- کراشر
      5- بعد از روشن شدن کراشر (مدتی زمان می برد) ویبراتور بالایی روشن شود
      4-2-4- جهت خاموش کردن تجهیزات به روش دستی (Hand) ، روشن کردن تجهیزات را به ترتیب اولویت زیر انجام دهید
      1- ویبراتور بالای کراشر
      2- بعد از چند دقیقه و اطمینان از تخلیه کامل خرده شیشه های هاپر بیرون بچ پلنت کراشر را خاموش کنید
      3- ویبراتور پایین کراشر
      4- الواتر
      5- کانوایر بالای مخزن
      </p>

      <h2>شارژ مواد اولیه</h2>
      <p>
      شارژ سیلیس 
      شارژ سیلیس به دو طریق اتوماتیک و دستی انجام می¬گیرد. بهتر است از روش اتوماتیک با توجه به مزایای آن استفاده گردد.
      کلید تابلوی بچ پلنت اتاق کنترل سه وضعیت اتوماتیک (Auto) – دستی(Hand) – خاموش (Zero) را داراست.
      در زیر زمین (-2) تابلویی موجود می باشد که شامل دکمه هایStart Feeding  (شروع عملیات شارژ)- Stop Feeding (توقف عملیات شارژ) و Horn Off ( قطع آژیر اخطار) است.
      
      4-2- روش اتوماتیک: 
      4-2-1- در تابلوی اتاق کنترل، وضعیت را به مد اتوماتیک تغییر دهید.
      4-2-2- در زیرزمین(-2) دکمه Start Feeding را که چشمک زن شده است، فعال کنید تا لامپ سبز رنگ این دکمه در این حالت دائم روشن گردد و سیستم به ترتیب صحیح فعال شود.
      4-2-3- تا زمانی که دکمه سبز رنگ تابلو زیرزمین (-2) روشن است سیستم را در وضعیت اتوماتیک قرار دهید و برای خاموش و یا روشن کردن سیستم شارژ در اتاق کنترل کلید تابلو را در وضعیت خاموش و یا اتوماتیک قرار دهید.
      4-2-4- چنانچه کلید تابلو را به علت تعمیرات و یا هر دلیل دیگر، به وضعیت دستی قرار دادید روش فوق را مجددا انجام دهید تا سیستم به وضعیت اتوماتیک برگردد.
       4-2-5- سطح مخزن سیلیس را توسط سنسور کنترل سطح بار  کنترل نمائید تا سیستم اتوماتیک با رسیدن میزان سیلیس مخزن به   سطح تنظیمی سنسور کنترل سطح (High Level ) به صورت اتوماتیک خاموش شود. در صورت شارژ به صورت دستی مراقب میزان سطح بار در مخزن باشید. چرا که ممکن است سیستم کنترل سطح عمل نکرده و مشکلOver Flow  پیش آید.
      
      4-3- روش دستی شارژ:
      4-3-1- کلید تابلو را به وضعیت (Hand) برگردانید در تابلوی اصلی لامپ زرد رنگ Service  فعال شده و در فلو دیاگرام مسیر شارژ سیلیس در تابلوی اصلی هر یک از تجهیزات  به تنهایی می تواند با دکمه مربوطه روشن و یا خاموش گردد.
      4-3-2- روشن کردن سیستم به روش دستی (Hand) تجهیزات را به ترتیب اولویت زیر انجام دهید.
      4-3-2-1- الواتور 
      4-3-2-2- ویبراتور شوتی
      4-3-3- خاموش کردن تجهیزات را به ترتیب زیر انجام دهید.:
      4-3-3-1- ویبراتور شوتی
      4-3-3-2- الواتور
      توجه1: شدت ویبره شوتی زیر الواتور سیلیس در تابلو اصلیSilo Feeding  توسط ولوم Magnetic Chute Silo Feeding Sand تنظیم می گردد. در زمان شارژ سیلیس حضور بازرس بچ پلنت الزامی است.
      توجه2: دیگر مواد اولیه تشکیل دهنده ترکیب اصلی بچ (بجز ترکیبات تشکیل دهنده  پری میکس و همچنین رنگینه های لازم جهت تولید شیشه کهربایی) شامل فلدسپار، بوراکس،کربنات سدیم، باریم کربنات توسط لیفتراک از انبار مطابق با جدول تدوین شده تحت عنوان برنامه شارژ مواد اولیه به سیلوها¬ی بچ پلنت با کدD-FS-PR-01 به بچ پلنت انتقال داده شده و از طریق جرثقیل به بالای مخازن منتقل و  به مخازن شارژ می گردد.  
      
      </p>

      <h2>شارژ پریمیکس</h2>
      <p>
      ترازوی دیجیتال توزین مواد اولیه پری میکس در ابتدای کار روشن کرده و به مدت نیم ساعت اجازه دهید تا قطعات الکترونیکی آن گرم و وزن نمایش داده ثابت گردد.
      ترازو را در محل شیب دار یا کوران هوا یا ارتعاش شدید قرار ندهید
      
      4-1- اختلاط مواد اولیه پری میکس:
      4-1-1- مواد اولیه پری میکس پس از تحویل از انبار را در محل مشخص شده در همکف بچ پلنت قرار دهید.
      4-1-2- پس از مصرف مواد، درب گونی یا ظرف مواد را ببندید.
      4-1-3- مواد اولیه را با توجه به فرم اوزان بچ پری میکس D-FS-PR-04 به دقت توزین و به سطل های مربوطه منتقل کنید.
      4-1-4- در صورت تغییر اوزان مواد اولیه پری میکس، فرم قبلی را در بایگانی بچ پلنت نگهداری کنید. 
      4-1-5- جهت میکس، سطل های مواد اولیه توزین شده را با جرثقیل به طبقه 3 انتقال داده و تخلیه کنید. (توسط میکسری که بالای مخزن پری میکس نصب گردیده  مواد اختلاط می¬یابند).
      توجه: میکس مواد اولیه پری میکس به دو روش دستی و اتوماتیک امکان پذیر است. انتخاب روش توزین توسط کلید سه وضعیتی Mode Of Operation که امکان انتخاب روش Manual وAutomatic  و Zero را می دهد، انجام پذیرفته و قرار گرفتن بر روی علامت0  یعنی خاموشی کلیه عملیات میکسر می باشد.
      4-2- روش اتوماتیک:
      4-2-1- روش Automatic را انتخاب نمائید تا چراغ Operation Automatic سبز و چراغ Outlet Opening Close روشن گردد. 
      4-2-2- سپس کلید Start In Automatic  را تحریک نمائید تا چراغ Start In Automatic سبز و چراغ MixerMotor On زرد و  چراغ  Mixing Time روشن گردد. (پس از طی زمان معین تنظیم شده بر روی تایمر داخل تابلو درب زیرین میکسر باز شده و در حالی که موتور میکسر فعال است مواد میکس شده به داخل مخزن پری میکس می ریزد. پس از طی زمان مشخص و تخلیه داخل میکسر مجددا درب زیر میکسر بسته شده و موتور میکسر نیز خاموش می گردد.) 
      4-2-3- درب بالای میکسر را باز کنید. (چراغ سبز Inlet Openning Open  روشن شده و بک فیلتر جهت تخلیه گردو غبار داخل میکسر روشن می شود.) 
      4-2-4- درب بالایی بک فیلتر را ببندید. (با بستن درب بالایی بک فیلتر خاموش خواهد شد.)
      4-3- روش دستی :
      4-3-1- کلید  MANUAL را انتخاب نمایید. (کلیه فرایند های انجام شده در روش اتوماتیک را  به صورت دستی انجام دهید.) 
      4-3-2- ابتدا از بسته بودن درب پایین میکسر با روشن بودن چراغ سبزOutlet Openning Close  اطمینان حاصل نمائید. 
      4-3-3- سلـکتور کـلیـد Mixer Motor Manual را بـر روی عــدد 1 قــرار دهیـد تـا مــوتـور روشـن شـود و چـراغ سبـز  Mixer Motor On روشن گردد. 
      4-3-4- پس از اتمام زمان اختلاط درب پایین میکسر را به صورت دستی توسط قرار دادن سلکتور کلید Mixer Outlet Open In Manual در حالت 1 باز نمائید. پس از تخلیه کامل ابتدا درب را بسته و سپس موتور را خاموش نمائید.
      
      4-4- اختلاط مواد اولیه رنگینه:
      4-4-1- مواد اولیه رنگینه روزانه را از انبار تحویل گرفته و در محل های مشخص شده در همکف بچ پلنت قرار دهید.
      4-4-2- در زمان تولید شیشه کهربایی (Amber Glass) رنگینه لازم جهت تولید شیشه مزبور را به بچ اصلی اضافه کنید.
      4-4-3- با توجه به فرم اوزان مواد اولیه شیشه امبر D-FS-PR-06 توزین مواد اولیه مورد نظر را انجام دهید و در سطل های تعبیه شده که به تعداد بچ های روزانه می باشد، منتقل کنید. 
      4-4-4- در صورت تغییر اوزان مواد اولیه رنگینه فرم قبلی را در بایگانی بچ پلنت نگهداری کنید.      
      </p>
     </>
  )
}

export default Batch
