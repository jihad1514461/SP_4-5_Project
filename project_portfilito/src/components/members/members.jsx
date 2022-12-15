import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img1"></div>
        <div className="member-info">
          <h1 className="name">Vector</h1>
          <h3 className="position">AI</h3>
          <h4 className="about">
            AN virtual assistent that help us to do many things simply and fast
          </h4>
          <a href="https://github.com/jihad1514461/opp2lab" className="contact-member">
            <span>Go to Vector</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img2"></div>
        <div className="member-info">
          <h1 className="name">AGRI Gram</h1>
          <h3 className="position">Ecomarce web</h3>
          <h4 className="about">
            A site that help fermers, Businessman and Truck drivers to go closer and do business fast,effctive and simply.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Go to AGRI Gram</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img3"></div>
        <div className="member-info">
          <h1 className="name">ALL in 1</h1>
          <h3 className="position">App</h3>
          <h4 className="about">
            An app that combaines Messenger, whatsapp, Telegram and make acesseble easy to those sites
          </h4>
          <a href="#contact" className="contact-member">
            <span>Go to ALL in 1</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
