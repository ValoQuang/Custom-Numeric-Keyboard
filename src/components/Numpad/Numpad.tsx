import React, { useState, useEffect } from "react";

import "./Numpad.css";
import { TiBackspace } from "react-icons/ti";
import { BsCurrencyEuro } from "react-icons/bs";

export interface ExString extends String {
  target: any;
}

const Numpad = () => {
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("");

  const inputNum = (e: ExString) => {
    //LINE 20, Set condition so if the input has decimal in it, continue
    //LINE 23, Set condition so if there's some value, user can press any number and new number will be added to behind currentState (type" String)
    // 7 + 7 = 77 e.g
    if (curState.includes(",") && e.target.innerText === "," ) return;
    if (curState.charAt(0) === ",")
    setCurState("") 
 
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setInput(curState);
  };

  console.log(input.charAt(0))

  //useEffect to reload pages when only curState is updated
  useEffect(() => {
    setInput(curState);
  }, [curState]);
  //useEffect to reload pages when press reload 
  useEffect(() => {
    setInput("0");
  }, []);
  //Logic if money input is > 999, alert show up and user cannot add more

  //Get total number input
  //Log the currency value in cent, replace , with . to Number format, then *100 
  const reset = () => {
    setCurState("");
    setInput("0");
    const tocent: String = curState.replace(',', '.');
    const result = Number(tocent)*100
    window.alert(`This is the result from previous state ${result} cents`);
  };
  //backspace button, slice curState and update with setCurState
  const backspace = () => {
    const val = curState.slice(0, -1);
    setCurState(val);
    console.log(val);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="topscreen">
          <div className="content">{curState}</div>
          <BsCurrencyEuro style={{ color: "white" }} />
          {curState ? (
            <button className="btn">
              <TiBackspace style={{ color: "white" }} onClick={backspace} />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="screen">
          <button className="btn" onClick={inputNum}>
            1
          </button>

          <button className="btn" onClick={inputNum}>
            2
          </button>

          <button className="btn" onClick={inputNum}>
            3
          </button>

          <button className="btn" onClick={inputNum}>
            4
          </button>

          <button className="btn" onClick={inputNum}>
            5
          </button>

          <button className="btn" onClick={inputNum}>
            6
          </button>

          <button className="btn" onClick={inputNum}>
            7
          </button>

          <button className="btn" onClick={inputNum}>
            8
          </button>

          <button className="btn" onClick={inputNum}>
            9
          </button>

          <button className="btn" onClick={inputNum}>
            ,
          </button>

          <button className="btn" onClick={inputNum}>
            0
          </button>

          <button
            disabled={curState.length < 1}
            className="btnNext"
            onClick={reset}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Numpad;
