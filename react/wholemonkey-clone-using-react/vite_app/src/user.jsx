import './wholemonkey.css';

function WholeNavbar() {
    return (
        <div className="whole-navbar">
            <div className="nav-heading">
                New Year 2025 Offer, Prepaid Order & Get 180 Rs Discount. Code (NEWYEAR2025)
            </div>

            <div className="navbar">
                <img src="img/3485c4e1-1013-4f2b-a05e-c582f4d5d05c-1718884243211.png" alt="Logo" />

                <div className="nav-left">
                    <h2 className="title">Wholemonkey Marketing E-commerce</h2>
                    <p className="punch-line">"you are in good hands"</p>
                </div>

                <div className="nav-right">
                    <div className="searchbtn">
                        <img src="img/icons8-search-50.png" alt="Search" />
                    </div>
                    <div className="accountbtn">
                        <img
                            src="img/account.png"
                            alt="Account Logo"
                            style={{ cursor: 'pointer' }}
                            onClick={() => (window.location.href = 'form/FORM.html')}
                        />
                    </div>
                    <div className="inboxbtn">
                        <img src="img/inbox-img.svg" alt="Inbox" />
                    </div>
                    <div className="whatsappbtn">
                        <img src="img/whatsapp-img.svg" alt="WhatsApp" />
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
    );
}

export default WholeNavbar;
