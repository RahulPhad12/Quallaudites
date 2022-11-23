import Search from "../assets/search.gif";
import Ethereum from "../assets/ethereum.png";
import Bitcoin from "../assets/bitcoin.png";
import Binance from "../assets/binance.png";
import Litecoin from "../assets/litecoin.png";
import Mobile from "../assets/mobile.gif";
import Data from "../assets/data.gif";
import Web from "../assets/web.png";

function Client() {
  return (
    <>
      <div className="client-section">
        <div className="client_names">
          <h6>Clients</h6>
          <h4>Partners</h4>
          <span>❄PATHFUND</span>
          <span>❄PATHFUND</span>
          <span>❄PATHFUND</span>
          <span>❄PATHFUND</span>
          <span>❄PATHFUND</span>
          <span>❄PATHFUND</span>
        </div>

        <div className="service">
          <img src={Search} alt="" className="search" />
          <div className="service_details">
            <h6>SERVICE</h6>
            <h3>Smart Contract Auditing</h3>
            <p>
              Our Audit Process for smart contract is based on the <br />{" "}
              comprehensive approach we follow to investigate the code <br />{" "}
              for security flaws and potential vulnerabilities.
            </p>
            <p>
              <img src={Bitcoin} alt="bitcoin" className="coin" /> Bitcoin
            </p>
            <p>
              <img src={Ethereum} alt="etherum" className="coin" /> Ethereum
            </p>
            <p>
              <img src={Binance} alt="binance" className="coin" /> BSC{" "}
            </p>
            <p>
              <img src={Litecoin} alt="litecoin" className="coin" /> Litecoin
            </p>

            <button className="btn-1">Explore</button>
          </div>
        </div>

        <div className="second_image">
          <div className="service_two">
            <h6>SERVICE</h6>
            <h3>Blockchain Penetration Testing</h3>
          </div>
          <p>
            QuillAudits proven strategy to tackle vulnerabilities specific to{" "}
            <br /> blockchain technology comes with a mix-blend of conventional{" "}
            <br /> pentesting approach and dynamic blockchain analysis.
          </p>
          <button className="btn-1">Learn More</button>
          <img src={Mobile} alt="mobile" className="mobile" />
        </div>

        <div className="service section_third">
          <img src={Data} alt="" className="search" />
          <div className="service_details">
            <h6>SERVICE</h6>
            <h3>Due Diligence</h3>
            <p>
              QuillAudits acknowledges the significant threats involved in{" "}
              <br /> smart contracts, which can lead to many critical
              possibilities.
            </p>
            <p>🌀 DeFi Due Diligence</p>
            <p>🌀 NFT Due Diligence</p>
            <p>🌀 Rug Pull Due Diligence</p>
            <button className="btn-1">Explore</button>
          </div>
        </div>
      </div>

      <div>
        <div className="point">
          <h6>THE SECURITY</h6>
          <h3>How We Secure Your Web3 Project</h3>
        </div>
        <img src={Web} alt="" className="feature" />
      </div>
    </>
  );
}

export default Client;
