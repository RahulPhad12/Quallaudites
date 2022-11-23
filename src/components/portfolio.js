import Copy from "../assets/copy.png";

function Section() {
  return (
    <>
      <div className="portfolio">
        <div className="midsection">
          <h6>PORTFOLIO</h6>
          <h4>Latest Work</h4>
          <button className="ether">Ethereum</button>
          <button className="crypto_btn">Binance</button>
          <button className="crypto_btn">NFT</button>
          <button className="crypto_btn">Solana</button>
        </div>

        <div className="row">
          <div className="Column">
            <img src={Copy} alt="" className="copy" />
            <img src={Copy} alt="" className="copy" />
            <img src={Copy} alt="" className="copy" />
          </div>
        </div>

        <button className="lastBtn">Button</button>
      </div>
    </>
  );
}

export default Section;
