import Cube from "../assets/cubes.png";

function Home() {
  return (
    <div className="home">
      <div className="text_area">
        <h2>
          Emerging Web3 Ventures <br /> Trust Our Smart Contract <br /> Audits &
          Diligence Services
        </h2>
        <h5>QuillAudits, Making web3 a safer place</h5>
        <button className="btn-1">Request Free Quote</button>
        <button className="btn-2">Explore Services</button> <br />
        <img src={Cube} alt="" className="cube_img" />
        <div className="detail">
          <div className="flex-box">
            <h1>$12.8B</h1>
            <p>Amount Lost To DeFi Hacks in 2021</p>
          </div>
          <div className="flex-box div2">
            <h1 className="head">600K</h1>
            <p>Lines of Codes Secured by QuillAudits</p>
          </div>
          <div className="flex-box div3">
            <h1>$14.6B</h1>
            <p>Amount Protected By QuillAudits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
