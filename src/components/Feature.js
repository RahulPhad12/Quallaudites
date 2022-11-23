import Coincrunch from "../assets/Coincrunch.png";
import Coin from "../assets/cto.png";
import Money from "../assets/Money.png";
import Product from "../assets/product.png";
import Invest from "../assets/Invest.png";

function Feature() {
  return (
    <>
      <div className="feature_page">
        <div className="left_div">
          <h6>WHY ARE WE HERE</h6>
          <h3>
            What is the Need of <br /> Smart Contract Audit?
          </h3>
          <button className="btn-1">Talk to an Expert</button>
        </div>

        <div className="right_div">
          <div className="web_data">
            47.3% of the Web3 Hacks in First Half of 2022 <br /> were due to
            Smart Contract Vulnerabilities.
          </div>
          <div className="upper">
            Only 52.7% of the Exploited Web3 Projects were Audited.
          </div>
          <div className="upper_one">
            Smart Contract Audits Build Social Authority
          </div>
          <div className="down">
            Helps in Earning Users/Investors Trust for the Product
          </div>
          <div className="down_one">
            Helps in Earning Users/Investors Trust for the Product
          </div>
        </div>

        <div className="feature_image">
          <h6>MENTIONS</h6>
          <h3>As Featured In</h3>

          <div className="newspaper">
            <div className="money">
              <img src={Money} alt="" className="news" /> <br />
              <a href="/">Read More</a>
            </div>

            <div className="money">
              <img src={Coincrunch} alt="" className="news" /> <br />
              <a href="/">Read More</a>
            </div>

            <div className="money">
              <img src={Product} alt="" className="news cto" /> <br />
              <a href="/">Read More</a>
            </div>
          </div>

          <div className="newspaper">
            <div className="money">
              <img src={Coin} alt="" className="news cto" /> <br />
              <a href="/">Read More</a>
            </div>

            <div className="money">
              <img src={Coincrunch} alt="" className="news" /> <br />
              <a href="/">Read More</a>
            </div>

            <div className="money">
              <img src={Invest} alt="" className="news invest" /> <br />
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
