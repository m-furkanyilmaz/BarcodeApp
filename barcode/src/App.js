import { useState } from "react";
import "./App.css";
import { ilacAd } from "./data/ilaclar";
import Select from "react-select";
import PrintScreen from "./components/PrintScreen";
import bakanlikLogo from "./images/DevletHastanesi1.png";

const Days = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const Months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const Years = [
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "2033",
  "2034",
  "2035",
  "2036",
  "2037",
  "2038",
  "2039",
];

function App() {
  const [pharmaValue, setpharmaValue] = useState("");
  const [inputValue, setinputValue] = useState(" ");
  const [dayValue, setdayValue] = useState("1");
  const [day2Value, setday2Value] = useState("1");
  const [monthValue, setmonthValue] = useState("Ocak");
  const [month2Value, setmonth2Value] = useState("Ocak");
  const [yearValue, setyearValue] = useState("2024");
  const [year2Value, setyear2Value] = useState("2026");

  const handleSelectDay = (e) => {
    setdayValue(e.target.value);
  };
  const handleSelectSecondDay = (e) => {
    setday2Value(e.target.value);
  };
  const handleSelectMonth = (e) => {
    setmonthValue(e.target.value);
  };
  const handleSelectSecondMonth = (e) => {
    setmonth2Value(e.target.value);
  };
  const handleSelectYear = (e) => {
    setyearValue(e.target.value);
  };
  const handleSelectSecondYear = (e) => {
    setyear2Value(e.target.value);
  };
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div className="App">
      <a href="https://kocaelidh.saglik.gov.tr/">
        <img
          src={bakanlikLogo}
          alt="logo"
          style={{ width: "150px", height: "150px" }}
        ></img>
      </a>
      <h2 style={{ color: "crimson" }}>XXXXXX İL SAĞLIK MÜDÜRLÜĞÜ</h2>
      <h3>XXXXXX HASTANESİ</h3>
      <form>
        <div>
          <p>
            <b>Ürün Adı:</b>
          </p>
          <Select
            defaultValue={ilacAd[0]}
            options={ilacAd}
            onChange={(choice) => setpharmaValue(choice.value)}
          ></Select>
        </div>
        <div>
          <p>
            <b>Ad Soyad:</b>
          </p>
          <input type="text" value={inputValue} onChange={handleChange}></input>
        </div>
        <div>
          <p>
            <b>Paket Açılış T.:</b>
          </p>
          <select value={dayValue} onChange={handleSelectDay}>
            {Days.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
          <select value={monthValue} onChange={handleSelectMonth}>
            {Months.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
          <select value={yearValue} onChange={handleSelectYear}>
            {Years.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>
            <b>Son Kullanma T.:</b>
          </p>
          <select value={day2Value} onChange={handleSelectSecondDay}>
            {Days.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
          <select value={month2Value} onChange={handleSelectSecondMonth}>
            {Months.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
          <select value={year2Value} onChange={handleSelectSecondYear}>
            {Years.map((index, x) => (
              <option value={index.value} key={x}>
                {index}
              </option>
            ))}
          </select>
        </div>
      </form>

      <PrintScreen
        ad={inputValue}
        urun={pharmaValue}
        firstD={`${dayValue}/${monthValue}/${yearValue}`}
        lastD={`${day2Value}/${month2Value}/${year2Value}`}
      />
    </div>
  );
}

export default App;
