import { useState } from 'react'
import './App.css'

function App() {
  const [investMoney, setInvestMoney] = useState(10);
  const [rate, setRate] = useState(10);
  const [goal, setGoal] = useState(180);
  const [data, setData] = useState([]);

  const calculateGrowth = () => {
    let year = new Date().getFullYear();
    let money = investMoney * 10; // Giả sử số tiền đầu tư là nhân 10 như hình
    let newData = [];

    while (money < goal) {
      let endYearMoney = money + (money * rate) / 100;
      newData.push({ year, money, rate, endYearMoney: Math.floor(endYearMoney) });
      money = Math.floor(endYearMoney);
      year++;
    }
    setData(newData);
  };
  return (
    <>
            <img src="./public/inverts.jpeg" width={400} />
      <div className="space-y-2">
        <input
          type="number"
          value={investMoney}
          onChange={(e) => setInvestMoney(Number(e.target.value))}
          className="w-full p-2 text-black rounded"
          placeholder="Input Your Invest Money"
        />
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full p-2 text-black rounded"
          placeholder="Input Rate"
        />
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="w-full p-2 text-black rounded"
          placeholder="Input your Goal"
        />
        <button
          onClick={calculateGrowth}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Click
        </button>
      </div>
      {data.length > 0 && (
        <table className="w-full mt-4 border border-gray-700 text-center">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-2 border">Year</th>
              <th className="p-2 border">Money</th>
              <th className="p-2 border">Rate</th>
              <th className="p-2 border">End Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="bg-gray-700">
                <td className="p-2 border">{row.year}</td>
                <td className="p-2 border">{row.money}</td>
                <td className="p-2 border">{row.rate}</td>
                <td className="p-2 border">{row.endYearMoney}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App
