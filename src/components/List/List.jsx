import "./style.css";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

export default function List() {
  return (
    <div className="list-wrapper">
      <div>
        <img src={icon1} />
        <h4>Declarative</h4>
        <p>React makes it pinless to create interactive UIS</p>
      </div>
      <div>
        <img src={icon2} />
        <h4>Declarative</h4>
        <p>React makes it pinless to create interactive UIS</p>
      </div>
      <div>
        <img src={icon3} />
        <h4>Declarative</h4>
        <p>React makes it pinless to create interactive UIS</p>
      </div>
      <div>
        <img src={icon4} />
        <h4>Declarative</h4>
        <p>React makes it pinless to create interactive UIS</p>
      </div>
    </div>
  );
}
