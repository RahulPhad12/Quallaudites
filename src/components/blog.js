import Mask from "../assets/Mask.png";
import Logo from "../assets/group.png";
import Mailbg from "../assets/Mailbg.png";
import Mail from "../assets/Mail.png";
import Sign from "../assets/sign.png";

function blog() {
  return (
    <>
      <div className="testimonal_section blog">
        <div className="test">
          <h6>OUR BLOG</h6>
          <span>Catch up on the news</span>
          <button className="btn-1 readme">Read More</button>
        </div>

        <div className="testmional" id="blog_data">
          <div className="testimonal_data mask_data">
            <img src={Mask} alt="" className="mask" />
            <h6>Web3 Security: Classification & Analysis of Web3 Hacks</h6>
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>

          <div className="testimonal_data mask_data">
            <img src={Mask} alt="" className="mask" />
            <h6>Web3 Security: Classification & Analysis of Web3 Hacks</h6>
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>

          <div className="testimonal_data mask_data">
            <img src={Mask} alt="" className="mask" />
            <h6>Web3 Security: Classification & Analysis of Web3 Hacks</h6>
            <p>15 Mar, 2023</p>
            <p>
              At every point in time, the internet keeps changing dimensions to
              solve the shortcoming of the previous version.
            </p>
          </div>
        </div>
      </div>
      <div className="mail_box">
        <div className="mail_info">
          <img src={Logo} alt="" className="company" />
          <p>
            DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to
            your Inbox.
          </p>
          <p>
            Explore our weekly newsletter: HashingBits. Stay updated on
            everything we’re publishing. Stand a step <br /> ahead.
          </p>
          <input type="email" placeholder="youremail@gmail.com" />
          <p>
            ✅Your email has been successfully registered, headlines will be
            sent to you soon.
          </p>
          <div className="parent">
            <img src={Mailbg} alt="" className="mailbg" />
            <img src={Mail} alt="" className="Mail" />
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="signin">
          <h2>
            Join Hands With us to <br /> secure Web3 Together
          </h2>
          <p>
            Help us in our journey to secure web3 by joining our <br /> team of
            talented individuals spread across the globe.
          </p>
          <button className="apply">APPLY NOW</button>
          <img src={Sign} alt="" className="sign" />
        </div>
      </div>
    </>
  );
}

export default blog;
