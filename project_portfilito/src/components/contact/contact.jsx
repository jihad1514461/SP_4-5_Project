import "./contact.css";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.facebook.com/alonewalker01/"
          className="contact "
          target={"blank"}
        >
          <AiOutlineFacebook className="icon" />
          <h2>
            Facebook <span>let's meet</span>
          </h2>
        </a>

        <a
          href="https://github.com/jihad1514461"
          className="contact "
          target={"blank"}
        >
          <AiFillGithub className="icon" />
          <h2>
            GitHub <span>Follow me on GitHub</span>
          </h2>
        </a>

        <a href="https://www.facebook.com/messages/t/100006372122304" className="contact ">
          <BsMessenger className="icon" />
          <h2>
            Messenger <span>Code together</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
