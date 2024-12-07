import websiteLogo from './assets/logo.png'
import searchbtn from './assets/icons8-search-50.png'
import account from './assets/account.png'
import inbox from './assets/inbox-img.svg'
import whatsapp from './assets/whatsapp-img.svg'
import viedo from './assets/videoplayback.mp4'
import name from './assets/whatsapp-img1.png'
import screenshot from './assets/screenshot.png'
import footer_whatsapp from './assets/footer-whatsapp.png'
import footer_phone from './assets/footer-phone.png'
import footer_inbox from './assets/footer-inbox.png'
import footer_add from './assets/footer-add.png'


import './wholemonkey.css';

function App() {
  return (
    <>
      <div className="whole-navbar">
        <div className="nav-heading">
          New Year 2025 Offer, Prepaid Order & Get 180 Rs Discount. Code (NEWYEAR2025)
        </div>

        <div className="navbar">
          <img src={websiteLogo} alt="Logo" />

          <div className="nav-left">
            <h2 className="title">Wholemonkey Marketing E-commerce</h2>
            <p className="punch-line">"you are in good hands"</p>
          </div>

          <div className="nav-right">
            <div className="searchbtn">
              <img src={searchbtn} alt="Search" />
            </div>
            <div className="accountbtn">
              <img src={account} alt="Account" />
            </div>
            <div className="inboxbtn">
              <img src={inbox} alt="Inbox" />
            </div>
            <div className="whatsappbtn">
              <img src={whatsapp} alt="WhatsApp" />
            </div>
          </div>
        </div>

        <div className="nav-bottom">
          <p>Computer Accessories</p>
          <p>Mobile Accessories And Gadgets</p>
          <p>Smart Watch</p>
          <p>Mobile Phones</p>
          <p>Trending Gadgets</p>
          <p>More</p>
          <p>Contact us</p>
        </div>
      </div>

      <div className="ad-banners">
        <img src="https://img.cdnx.in/305289/wholemonkeybanner-1728553031188.jpeg?width=1920&format=jpeg" className="ad-banner" />
      </div>
      {/* browser caterogries section */}


      <section className="browse-categories">
        <h2 className="browse-title"><u>Browse Categories</u></h2>
        <div className="categories-cointainer">
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/2-1718109110991.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Phones</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/1-1718109096462.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Accesories <br />And Gadgets</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/4-1718109143119.jpeg?width=384&format=webp" />
            </div>
            <p>Computer Accessories</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign1-1730892101063.jpeg?width=384&format=webp" />
            </div>
            <p>Refurbished Laptops</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign3-1718179065115.jpeg?width=384&format=webp" />
            </div>
            <p>Smart Watch</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign1-1718178807411.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Panel & <br />Covers</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign4-1718179632067.jpeg?width=384&format=webp" />
            </div>
            <p>Mobile Camera</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign2-1718178794976.jpeg?width=384&format=webp" />
            </div>
            <p>Trending Products</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/6-1718109167631.jpeg?width=384&format=webp" />
            </div>
            <p>Wireless Speakers</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/7-1718109181836.jpeg?width=384&format=webp" />
            </div>
            <p>HDMI VGA Devices</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/9-1718109210631.jpeg?width=384&format=webp" />
            </div>
            <p>Hardware Devices</p>
          </div>
          <div className="categories-item">
            <div className="categories-image">
              <img src="https://img.cdnx.in/305289/Untitleddesign-1718194653600.jpeg?width=384&format=webp" />
            </div>
            <p>Home Decor</p>
          </div>
        </div>
      </section>

      {/* new launched section */}

      <section className="newly-launched">
        <h2 className="newly-title"><u>NEWLY LAUNCHED</u></h2>
        <div className="newlylaunched-cointainer">
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1347_0-1729429150229.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn">+ Add</button>
            </div>


          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1288_0-1716372344392.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 Plus With Screen<br />Display With All Features 6.. </p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
            <button className="add-btn">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1257_0-1714108694386.webp?width=600&format=webp" />
            </div>
            <p className="img-text">OPPO F5 Mobile Phone 4GB<br />RAM REFURBISHED Just Lik.. </p>
            <div className="price">
              <span className="current-price">₹5,500</span>
              <span className="original-price">₹19,990</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
            <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1243_0-1713725831122.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung Galaxy Z Flip 4<br />Activated Imported Mobile...</p>
            <div className="price">
              <span className="current-price">₹33,999</span>
              <span className="original-price">₹87,000</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                  <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">

            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/SKU-1223_0-1713623525276.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 Plus With Screen<br />Display With All Features 6..</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                  <button className="add-btn">+ Add</button>

            </div>
          </div>
        </div>


      </section>


      {/* mobile accesories and gadgets  */}

      <section className="newly-launched">
        <h2 className="newly-title"><u>MOBILE ACESSORIES AND GADGETS</u></h2>
        <div className="newlylaunched-cointainer">
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1693060256277_SKU-0827_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">USB Cable Compatible with<br />iPhone Xs Max, iPhone 11 Pro,...</p>

            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                     <button className="add-btn">+ Add</button>

            </div>

          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1692987597020_SKU-0821_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Pods Pro-2 ANC & Cover Combo<br />with 1 year Warranty </p>
            <div className="price">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹5,999</span>
            </div>
            <select className="varaint-selector">
              <option value="black-256gb">White</option>
              <option value="white-128gb">Black</option>
            </select>
            <div className="action">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                     <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/1689352952124_SKU-0752_0.webp?width=600&format=webp" />
            </div>
            <p className="img-text">3 in 1 Wireless Multifunction<br />Magnetic Charging Station Dock... </p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                     <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/camera-stand-clip-bracket-holder-tripod-monopod-mo-1686046576421_SKU-0604_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Camera Stand Clip Bracket Holder<br />Tripod Monopod Mount Adapter...</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                     <button className="add-btn">+ Add</button>

            </div>
          </div>
          <div className="newlylaunched-items">
            <div className="newlylaunched-img">
              <img src="https://img.cdnx.in/305289/fully-foldable-tabletop-desktop-tablet-mobile-stan-1686046552430_SKU-0584_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Fully Foldabale Taabletop Desktop<br />Tablet Mobile Stand Holder...</p>
            <div className="price no-option">
              <span className="current-price">₹1,999</span>
              <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
                         <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                     <button className="add-btn">+ Add</button>

            </div>
          </div>
        </div>
      </section>


      {/* new updatwe section  */}

      <section className="newly-launched">
        <h2 className="newly-title"><u>NEW UPDATES</u></h2>
        <div className="newly-title">
            <video className="video" src={viedo} controls autoPlay loop></video>
        </div>
        </section>


        {/* computer accessories section */}

        <section className="newly-launched">
     <h2 className="newly-title"><u>COMPUTER ACESSORIES </u></h2>
    <div className="newlylaunched-cointainer">
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/1693161915763_SKU-0830_0.webp?width=600&format=webp" />
            </div>
            <p className="img-text">All in One 3 USB Ports and all in<br />One Card reader USB 2.0 for PC...</p>

            <div className="price no-option">
                <span className="current-price">₹449</span>
                <span className="original-price">₹999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>

        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/displayport-display-port-dp-to-vga-adapter-cable-m-1686046583185_SKU-0610_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Display Port Display Port DP to <br />VGA Adapter Cable Male to .. </p>
            <div className="price no-option">
                <span className="current-price">₹210</span>
                <span className="original-price">₹400</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>  
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/quality-assured-usb-20-morpho-cable-morpho-device-1686046547131_SKU-0580_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Quality Assured USB 2.0 morpho<br /> cable, morpho device cable for .. </p>
            <div className="price no-option">
                <span className="current-price">₹129</span>
                <span className="original-price">₹600</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/consistent-ssd-25%22-sata-128gb-5yrs-warranty-1686046497423_SKU-0525_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Consistenet SSD 2.5 " SATA 128Gb<br />5yrs warranty</p>
            <div className="price no-option">
                <span className="current-price">₹999</span>
                <span className="original-price">₹1,299</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/mini-composite-av-rca-to-hdmi-video-converter-adap-1686046495895_SKU-0524_0.jpeg?width=600&format=webp" />
            </div>
            <p className="img-text">Mini Composite AV RCA to HDMI<br />Viedo Converter Adapter Full HD..</p>
            <div className="price no-option">
                <span className="current-price">₹390</span>
                <span className="original-price">₹1,300</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
    </div>
</section>


{/* new section */}


<section className="newly-launched new">
    <h2 className="newly-title"></h2>
    <div className="newlylaunched-cointainer screenshot">
        <div className="newlylaunched-item screenshot">
            <div className="newlylaunched-img">
                <img src={screenshot} />
            </div>
            </div>
                <div className="img-3">
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1528_0-1727191964568.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung Galaxy Z flip5 5G Renewed<br />Under Seller Warranty </p>

            <div className="price">
                <span className="current-price">₹64,999</span>
                <span className="original-price">₹95,900</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">Black 256GB</option>
                <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>
            </div>


        </div>
        <div className="newlylaunched-items">
            
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1243_0-1713725831122.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung Galaxy Z flip4 Activated<br />Imported Mobile Under seller... </p>
            <div className="price">
                <span className="current-price">₹33,999</span>
                <span className="original-price">₹87,000</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">Black 256GB</option>
                <option value="white-128gb">white 128GB</option>
            </select>

            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>
            </div>
        </div>
        <div className="newlylaunched-items">
        
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1230_0-1713715371577.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">iphone 12 Mini 3 Month Seller <br />Warranty</p>
            <div className="price">
                <span className="current-price">₹24,999</span>
                <span className="original-price">₹59,000</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">Black 256GB</option>
                <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
    </div>

</div>
</section>



{/* mobile section */}

<section className="newly-launched">
    <h2 className="newly-title"><u>MOBILE PHONES</u></h2>
    <div className="newlylaunched-cointainer">
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
               <img src="https://img.cdnx.in/305289/1697271947393_AppleiPhone5sGold16GBp1000x1000h.jpeg?width=600&format=webp" />
            </div>
            <p className="img-text">iphone 5S just Like New 3 Month <br />Warranty Including All... </p>

            <div className="price">
                <span className="current-price">₹5,499</span>
                <span className="original-price">₹12,999</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">16gb Silver</option>
                <option value="white-128gb">16gb black</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>
            </div>


        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
               <img src="https://img.cdnx.in/305289/1690802559672_SKU-0787_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Full Body Housing Back Panel for<br />iPhone 12 </p>
            <div className="price">
                <span className="current-price">₹5,100</span>
                <span className="original-price">₹18,999</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">Red</option>
                <option value="white-128gb">Blue</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>
            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
               <img src="https://img.cdnx.in/305289/1689162364733_1460434191001794631684322920.jpeg?width=600&format=webp" />
            </div>
            <p className="img-text">Iphone 6 -Superb Condition,Like<br />New 3 Month Warranty </p>
            <div className="price">
                <span className="current-price">₹6,199</span>
                <span className="original-price">₹12,999</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">32gb, Gold</option>
                <option value="white-128gb">32gb, silver</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
               <img src="https://img.cdnx.in/305289/1687978788328_SKU-0688_0.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Appple iPhone 4s 16GB with box<br />and Accessories 3 Month...</p>
            <div className="price">
                <span className="current-price">₹3,799</span>
                <span className="original-price">₹9,999</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">Black 16GB</option>
                <option value="white-128gb">white 32GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
               <img src="https://img.cdnx.in/305289/kechaoda-k115-black-1686046587242_SKU-0613_0.jpeg?width=600&format=webp" />
            </div>
            <p className="img-text">KECHAODA K115 Slim Card Size<br />Dual Sim Phone With External...</p>
            <div className="price">
                <span className="current-price">₹1,149</span>
                <span className="original-price">₹2,999</span>
            </div>
            <select className="varaint-selector">
                <option value="black-256gb">white</option>
                <option value="white-128gb">Black</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>
            </div>
        </div>
    </div>
</section>

{/* gir big image section */}


<div className="girl-big-img">
  <img src="https://img.cdnx.in/305289/1686638080662_MONKEY1.jpeg?width=1920&format=webp" />
</div>

{/* trending gadgets section */}

<section className="newly-launched">
    <h2 className="newly-title"><u>TRENDING GADGETS </u></h2>
    <div className="newlylaunched-cointainer">
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1403_0-1721462982872.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">A17 Aerial Drone<br /> d</p>

            <div className="price no-option">
                <span className="current-price">₹4,599</span>
                <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>

        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1245_0-1713755707984.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">4K ULTRA 2.4G GAME STICK<br /> d </p>
            <div className="price no-option">
                <span className="current-price">₹1,999</span>
                <span className="original-price">₹6,999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>  
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/SKU-1208_1-1712933403402.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Amazon Fire TV Stick Lite with all-<br /> new Alexa Voice Remote Lite..</p> 
            <div className="price no-option">
                <span className="current-price">₹3,499</span>
                <span className="original-price">₹6,399</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/1690740692203_SKU-0768_0.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Front Selfie Camera Proxmity<br />sensor Flex Front Camera..</p>
            <div className="price no-option">
                <span className="current-price">₹2,299</span>
                <span className="original-price">₹9,999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
        <div className="newlylaunched-items">
            <div className="newlylaunched-img">
                <img src="https://img.cdnx.in/305289/1688822600231_91eEJcO5YSSL1500.jpeg?width=600&format=webp" />
            </div>
            <p className="img-text">Rock Carved buddha face Shower<br />Water Fountain for Home, Office</p>
            <div className="price no-option">
                <span className="current-price">₹9,999</span>
                <span className="original-price">₹23,999</span>
            </div>

            <div className="action no-option">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>
                <button className="add-btn">+ Add</button>

            </div>
        </div>
    </div>
</section>

{/* big-img-speaker */}

<div className="girl-big-img">
  <img src="https://img.cdnx.in/305289/1686903967655_hugeSALE4.jpeg?width=1920&format=webp" />
</div>


{/* product section */}


<section className="newly-launched">
        <h2 className="newly-title"><u>Products</u></h2>
        <div className="newlylaunched-cointainer pro">
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1680_0-1732805118779.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1675_0-1732804147580.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1674_0-1732803527828.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1663_0-1732354440173.jpg?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>


          {/* row 2 */}

          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1654_0-1732354143613.HEIC?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1651_0-1732352972523.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1643_0-1731141193286.png?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>
          <div className="newlylaunched-items pro">

            <div className="newlylaunched-img pro">
              <img src="https://img.cdnx.in/305289/SKU-1642_0-1731140901391.webp?width=600&format=webp" />
            </div>
            <p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

            <div className="price">
              <span className="current-price">₹49,999</span>
              <span className="original-price">₹1,05,999</span>
            </div>
            <select className="varaint-selector pro">
              <option value="black-256gb">Black 256GB</option>
              <option value="white-128gb">white 128GB</option>
            </select>
            <div className="action">
            <button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

            <button className="add-btn pro">+ Add</button>
            </div>
          </div>

            {/* row 3 */}

            <div className="newlylaunched-items pro">

<div className="newlylaunched-img pro">
  <img src="https://img.cdnx.in/305289/SKU-1637_0-1730989716680.webp?width=600&format=webp" />
</div>
<p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

<div className="price">
  <span className="current-price">₹49,999</span>
  <span className="original-price">₹1,05,999</span>
</div>
<select className="varaint-selector pro">
  <option value="black-256gb">Black 256GB</option>
  <option value="white-128gb">white 128GB</option>
</select>
<div className="action">
<button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

<button className="add-btn pro">+ Add</button>
</div>
</div>
<div className="newlylaunched-items pro">

<div className="newlylaunched-img pro">
  <img src="https://img.cdnx.in/305289/SKU-1631_0-1730988595349.jpg?width=600&format=webp" />
</div>
<p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

<div className="price">
  <span className="current-price">₹49,999</span>
  <span className="original-price">₹1,05,999</span>
</div>
<select className="varaint-selector pro">
  <option value="black-256gb">Black 256GB</option>
  <option value="white-128gb">white 128GB</option>
</select>
<div className="action">
<button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

<button className="add-btn pro">+ Add</button>
</div>
</div>
<div className="newlylaunched-items pro">

<div className="newlylaunched-img pro">
  <img src="https://img.cdnx.in/305289/SKU-1625_0-1730988072481.jpg?width=600&format=webp" />
</div>
<p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

<div className="price">
  <span className="current-price">₹49,999</span>
  <span className="original-price">₹1,05,999</span>
</div>
<select className="varaint-selector pro">
  <option value="black-256gb">Black 256GB</option>
  <option value="white-128gb">white 128GB</option>
</select>
<div className="action">
<button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

<button className="add-btn pro">+ Add</button>
</div>
</div>
<div className="newlylaunched-items pro">

<div className="newlylaunched-img pro">
  <img src="https://img.cdnx.in/305289/SKU-1621_0-1730978221394.webp?width=600&format=webp" />
</div>
<p className="img-text">Samsung S22 Ultra<br />International Unit 1 Month... </p>

<div className="price">
  <span className="current-price">₹49,999</span>
  <span className="original-price">₹1,05,999</span>
</div>
<select className="varaint-selector pro">
  <option value="black-256gb">Black 256GB</option>
  <option value="white-128gb">white 128GB</option>
</select>
<div className="action">
<button className="whatsapp" style={{backgroundImage: `url(${name})`, backgroundSize: '40px 40px', backgroundPosition: 'center'}}></button>

<button className="add-btn pro">+ Add</button>
</div>
</div>
          </div>
          </section>

          <p className="newly-title p">View All Products</p>

{/* footer */}
<footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="quickes-links">
          <h3>Quick Links</h3>
        
            <p>Home</p>
            <p>My Account</p>
            <p>My Orders</p>
            <p>About Us</p>
            <p>Payment Policy</p>
            <p>Privacy Policy</p>
            <p>Return & Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Terms and Conditions</p>
            <p>Blog</p>
          
        </div>

        {/* Get In Touch */}
        <div className="quickes-links">
          <h3>Get In Touch</h3>
          <div className="info">
            <img src={footer_phone} />
          <p> 9315806489</p>
          </div>
          <div className="info">
          <img src={footer_whatsapp} />
          <p> 9315806489</p>
          </div>
          <div className="info">
          <img src={footer_inbox} />
          <p> wholemonkeyfeedback@gmail.com</p>
          </div>
          <div className="info">
          <img src={footer_add} />
          <p>312 13/19 3rd Floor, Ganpati Plaza Karolbagh INDIA,New Delhi, Delhi - 110005</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="payment">
          <h3>We Accept</h3>
          <img src='https://img.clevup.in/static/web-store/payment-methods.png' className='cards' />
          <h2>Get Android App</h2>
          <img src='https://img.clevup.in/static/web-store/get-it-on-google-play-badge.png' className=' googlepay' />
        </div>

        {/* Social */}
        <div className="social-media">
          <h3>Social</h3>
          <div className="social">
          <div className="face"> <img src="https://www.wholemonkey.com/api/svgs/facebook-icon.svg" className='facebook' /></div>
          <p> Facebook</p>
          </div>
          <div className="social">
            <div className="face"><img src="https://www.wholemonkey.com/api/svgs/instagram-icon.svg" className='facebook' /></div>
          <p>Insatgram</p>
          </div>
        </div>

      </div> 
    <div className="footer-bottom">
        <button className="add-to-home">ADD TO HOME</button>
        <p>Copyright © by Wholemonkey Marketing E-commerce 2024. All rights reserved.</p>
      </div>
  
    </footer>





    
    </>
  );
}

export default App;
