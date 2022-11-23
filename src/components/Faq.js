function Faq() {
  return (
    <>
      <div className="faq">
        <div className="faq_sec">
          <h6>FAQ</h6>
          <h3>
            Frequently Asked <br /> Questions
          </h3>
          <p>
            Visit our help center to clear out any second thoughts <br /> that
            you may have regarding our services.
          </p>
          <button className="btn-1">Contact Us</button>
        </div>


        <div className="faq_table">
          <div className="table_data">
            <h6>What is smart contract security? <span>🔽</span></h6> 
            <p>
              Smart Contract Security is a set of best practices to identify{" "}
              <br /> bugs & vulnerabilities in the code that can lead to
              security <br /> breaches. These loopholes have lead to huge
              financial losses <br /> recently.
            </p>
            <hr />
            <h6>Are smart contracts vulnerable?<span>&nbsp;🔽</span>  </h6> 
            <hr />
            <h6>What is a smart contract audit? <span>&nbsp;🔽</span></h6>
            <hr />
            <h6>Why do smart contracts fail? <span> &nbsp; &nbsp; 🔽</span></h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
