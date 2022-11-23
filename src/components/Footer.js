import Final from "../assets/Final.png";
import Bl from "../social/bl.png";
import Discord from "../social/discord.png";
import Fb from "../social/fb.png";
import Insta from "../social/insta.png";
import Ld from "../social/ld.png";
import Reddit from "../social/reddit.png";
import Tg from "../social/tg.png";
import Tw from "../social/twitter.png";
import Yt from "../social/yt.png";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footer_start">
          <div className="footer_id">
            <div className="footer_data">
              <p>Parent Company</p>
              <img src={Final} alt="" />
              <p>
                Quillhash delivers enterprise <br /> grade blockchain technology{" "}
                <br /> to leading companies <br /> worldwide.
              </p>

              <select name="flag" id="flag">
                <option>IND</option>
                <option>US</option>
                <option>UK</option>
              </select>
            </div>

            <div className="footer_data">
              <h6>
                <b>Explore</b>
              </h6>
              <p>Careers</p>
              <p>Courses</p>
              <p>Blockchain Security CTF</p>
              <p>QuillAudits Partner Program</p>
              <p>Referral Program</p>
            </div>

            <div className="footer_data">
              <h6>
                <b>Services</b>
              </h6>
              <p>Smart Contract Auditing</p>
              <p>Blockchain Pen Testing</p>
              <p>Due Diligence</p>
            </div>

            <div className="footer_data">
              <h6>
                <b>Contact Us</b>
              </h6>
              <p>
                LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur
                DLF Phase1, Sector 28, Gurugram, Haryana - 122002
              </p>
              <p>✉️ contact@quillaudits.com</p>
            </div>
          </div>

          <div className="social_icon">
            <h6>Join our Journey</h6>
            <img src={Fb} alt="" />
            <img src={Ld} alt="" />
            <img src={Yt} alt="" />
            <img src={Insta} alt="" />
            <img src={Tw} alt="" />
            <img src={Tg} alt="" />
            <img src={Discord} alt="" />
            <img src={Bl} alt="" />
            <img src={Reddit} alt="" />
            <hr />
            <p>
              All Rights Reserved. © Copyright 2022. QuillHash Technologies
              Private Limited
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
