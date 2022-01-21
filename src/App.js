import "./styles.css";
import { useState } from "react";

function App() {
  const [tips, setTips] = useState(15);
  const [bill, setBill] = useState(102.02);
  const [people, setPeople] = useState(3);

  console.log(typeof tips);
  console.log(typeof bill);
  console.log(typeof people);

  return (
    <div className="wrapper">
      <div className="tip-amount">
        <div className="label">Tip Amount</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="tip-amount">{((bill * tips) / 100).toFixed(2)}</span>
        </div>
      </div>
      <div className="total-per-person">
        <div className="label">Total Per Person</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="total-per-person">{((bill + (bill * tips) / 100) / people).toFixed(2)}</span>
        </div>
      </div>

      <div className="input-fields">
        <div className="bill-amount">
          <div className="field">
            <input type="text" id="bill-amount" name="bill-amount" value={bill} onChange={(e) => setBill(parseInt(e.target.value))} />
          </div>
          <div className="label">Bill Amount</div>
        </div>
        <div className="number-of-people">
          <div className="field">
            <input type="text" id="number-of-people" name="number-of-people" value={people} onChange={(e) => setPeople(parseInt(e.target.value))} />
          </div>
          <div className="label">Number of People</div>
        </div>
      </div>

      <div className="tip-percentages">
        <div>
          <input type="radio" name="tip" checked={tips === 5 && "checked"} value="5%" id="five-percent" onChange={() => setTips(5)} />
          <label htmlFor="five-percent">5%</label>
        </div>
        <div>
          <input type="radio" name="tip" checked={tips === 10 && "checked"} value="10%" id="ten-percent" onChange={() => setTips(10)} />
          <label htmlFor="ten-percent">10%</label>
        </div>
        <div>
          <input type="radio" name="tip" checked={tips === 15 && "checked"} value="15%" id="fifteen-percent" onChange={() => setTips(15)} />
          <label htmlFor="fifteen-percent">15%</label>
        </div>
        <div>
          <input type="radio" name="tip" checked={tips === 20 && "checked"} value="20%" id="twenty-percent" onChange={() => setTips(20)} />
          <label htmlFor="twenty-percent">20%</label>
        </div>
      </div>
      <div className="button-wrapper">
        <button id="calculate">Calculate</button>
      </div>
    </div>
  );
}

export default App;
