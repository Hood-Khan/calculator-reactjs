import React, { useState } from "react";
import { MdHistory } from "react-icons/md";
import { BiRuler } from "react-icons/bi";
import { IoIosCheckboxOutline } from "react-icons/io";
import { LuSquareArrowLeft } from "react-icons/lu";

export default function Calculator() {
  const [data, setData] = useState("");
  const [bracket,setBracket] = useState(true);

  const handleValue = (event) => {
    let values = event.target.value;
    setData(data.concat(values))
    setBracket(!bracket);
  };

  const calculation = () => {
    setData(eval(data).toString());
  }

  const clearAll = () => {
    setData("");
  }

  const clear = () => {
    setData(data.slice(0,-1))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-black p-6 rounded-3xl shadow-2xl shadow-gray-700 w-full max-w-xs border border-gray-600">
        <div className="mb-4">
          <input
            type="text"
            value={data}
            placeholder="0"
            onChange={(e) => setData(e.target.value)}
            className="w-full p-8 rounded-xl bg-gray-600 text-white text-right text-2xl outline-none shadow-inner shadow-gray-800"
          />
        </div>

        {/* Icons Row */}
        <div className="flex justify-between mb-5">
          <div className="flex gap-3 text-white">
            <button className="bg-black p-3 rounded-xl shadow-md shadow-gray-700"><MdHistory /></button>
            <button className="bg-black p-3 rounded-xl shadow-md shadow-gray-700"><BiRuler /></button>
            <button className="bg-black p-3 rounded-xl shadow-md shadow-gray-700"><IoIosCheckboxOutline /></button>
          </div>
          <div className="text-white">
            <button className="bg-black p-3 rounded-xl shadow-md shadow-gray-700"><LuSquareArrowLeft /></button>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          <button onClick={handleValue} value={bracket?"(":")"} className="btn">()</button>
          <button onClick={handleValue} value="/" className="btn spec">/</button>
          <button onClick={handleValue} value="%" className="btn spec">%</button>
          <button onClick={clearAll} value="AC" className="btn bg-red-400 text-black font-bold shadow-lg">AC</button>

          <button onClick={handleValue} value="7" className="btn">7</button>
          <button onClick={handleValue} value="8" className="btn">8</button>
          <button onClick={handleValue} value="9" className="btn">9</button>
          <button onClick={handleValue} value="*" className="btn spec">x</button>

          <button onClick={handleValue} value="4" className="btn">4</button>
          <button onClick={handleValue} value="5" className="btn">5</button>
          <button onClick={handleValue} value="6" className="btn">6</button>
          <button onClick={handleValue} value="-" className="btn spec">-</button>

          <button onClick={handleValue} value="1" className="btn">1</button>
          <button onClick={handleValue} value="2" className="btn">2</button>
          <button onClick={handleValue} value="3" className="btn">3</button>
          <button onClick={handleValue} value="+" className="btn spec">+</button>

          <button onClick={handleValue} value="0" className="btn">0</button>
          <button onClick={clear} value="Back" className="btn">Back</button>
          <button onClick={handleValue} value="." className="btn">.</button>
          <button onClick={calculation} value="Enter" className="btn bg-green-400 text-black font-bold shadow-lg">=</button>
        </div>
      </div>

      <style>{`
        .btn {
          background: #6b7280 !important;
          color: white !important;
          padding: 14px;
          border-radius: 14px;
          font-size: 1.2rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
          transition: 0.2s;
        }
        .spec {
          color: #90ee90 !important; /* light green */
        }
        .bg-red-400 {
          background: #f87171 !important; /* light red */
        }
        .bg-green-400 {
          background: #86efac !important; /* light green */
        }
        .text-white { color: white !important; }
        .bg-black { background: #232b2b !important; }
      `}</style>
    </div>
  );
}
