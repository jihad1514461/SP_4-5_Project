import "./PageTwo.css";

import Card from "../Card/Card";

import icon1 from "../props/icon1.gif";
import icon2 from "../props/icon2.gif";
import icon3 from "../props/icon3.gif";
import icon4 from "../props/icon4.gif";
import icon5 from "../props/icon5.gif";
import icon6 from "../props/icon6.gif"

const PageTwo = () => {
  return (
    <>


      <div className="page-two-text-container">
        <h1 className="main-text">Qualifications</h1>
        <span className="sub-text">
        Qualifications do not always define a true education. Qualifications are like obtaining a valuable candle while a true education is the essence of light that the candle will reflect. The ultimate purpose of qualifications is to find a great job, and the ultimate purpose of education is to create a great life.
        </span>
      </div>

      <div className="container">
        <Card
          Icon={icon1}
          Title="HTML"
          SubTitle="HTML is the standard markup language for creating Web pages. HTML stands for Hyper Text Markup Language. HTML describes the structure of Web pages using markup."
        />
        <Card
          Icon={icon2}
          Title="CSS"
          SubTitle="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. "
        />
        <Card
          Icon={icon3}
          Title="Java Script"
          SubTitle="JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic. "
        />
        <Card
          Icon={icon4}
          Title="Boostrap"
          SubTitle="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
        />
        <Card
          Icon={icon5}
          Title="C++"
          SubTitle="C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language."
        />
        <Card
          Icon={icon6}
          Title="Python"
          SubTitle="Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming"
        />
      </div>

    </>
  );
};

export default PageTwo;
