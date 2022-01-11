import React, { useState, useEffect } from "react";

import "./Numpad.css";
import { TiBackspace } from "react-icons/ti";
import { MdEuro } from "react-icons/md";
import { cursorTo } from "readline";

const Numpad = () => {
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("");
  const tocent: String = curState.replace(",", ".");
  const resultNumber = Number(tocent);

  const inputNum = (e: { target: HTMLInputElement }) => {
    //LINE 18, Set condition so if the input has already decimal in it, continue and does not allow multiple decimal
    //LINE 21, Set condition so if there's some value, user can press any number and new number will be added to behind currentState (type" String)
    // 7 + 7 = 77 e.g
    if (curState.includes(",") && e.target.innerText === ",") return;
    if (curState.charAt(0) === ",") setCurState("");
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setInput(curState);
  };

  //useEffect to reload pages when only curState is updated
  useEffect(() => {
    setInput(curState);
  }, [curState]);

  //Log the currency value in cent, replace , with . to Number format, then *100
  const reset = () => {
    setCurState("");
    setInput("");
    window.alert(
      `This is the result from previous state: ${(resultNumber * 100).toFixed(
        2
      )} cents`
    );
    console.log(
      `This is the result from previous state: ${(resultNumber * 100).toFixed(
        2
      )} cents`
    );
  };

  //backspace button, slice curState and update with setCurState
  const backspace = () => {
    const val = curState.slice(0, -1);
    setCurState(val);
    console.log(val);
  };

  if (resultNumber > 1000) {
    window.alert("Exceeded allowed value, < 1000");
    setCurState("");
  } else if (curState.length > 6) {
    window.alert("Invalid Input");
    setCurState("");
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="topscreen">
          <div className="content">
            {curState}
            <span></span>
          </div>
          <MdEuro color="white" />
          {curState ? (
            <button className="btn">
              <TiBackspace color="black" fontSize="1.5em" onClick={backspace} />
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
