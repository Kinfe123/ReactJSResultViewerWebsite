import React, { useState, useEffect } from "react";
import { Button, Input } from "@material-ui/core";
import Result from "./Result";
const ResultViewer = () => {
  let [input, setInput] = useState("");
  let [total, setTotal] = useState();
  let [math, setMath] = useState();
  let [chem, setChem] = useState();
  let [eng, setEng] = useState();
  let [civic, setCivic] = useState();
  let [bio, setBio] = useState();
  let [apt, setApt] = useState();
  let [phy, setPhy] = useState();
  let [name, setName] = useState("");
  let [school, setSchool] = useState("");
  let [gender, setGender] = useState("");
  let [id, setId] = useState("");
  // let [result , setResult] = useState({})

  const calc = () => {
    let totalValue = math + chem + bio + civic + eng + apt + phy;

    setTotal(totalValue);
  };
  useEffect(() => {
    calc();
  }, [input, id]);
  const handler = (event) => {
    setInput(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    Result.map((res) => {
      if (input === res.id) {
        setName(res.name);
        setId(res.id);
        setSchool(res.school);
        setGender(res.gender);
        setMath(res.math);
        setBio(res.bio);
        setChem(res.chem);
        setEng(res.eng);
        setApt(res.apt);
        setCivic(res.civic);
        setPhy(res.phy);
        let totalValue = math + chem + bio + civic + eng + apt + phy;
        res.total = totalValue;
        setTotal(totalValue);
      }
    });
  };
  console.log(total);
  return (
    <>
      <form>
        <Input
          type="number"
          value={input}
          onChange={handler}
          style={{ marginRight: 10 }}
        />
        <Button
          disabled={!(input.length === 6)}
          type="submit"
          variant="contained"
          onClick={handleClick}
        >
          GO{input.length === 6 ? "🚀" : ""}
        </Button>
      </form>
      {id === input ? (
        <div style={{ textAlign: "left" }}>
          <h4>ℹ️ STUDENT INFO</h4>
          <p>👤 Name ➡️ {name}</p>
          <p>👫 Gender ➡️ {gender === "F" ? "F ♀ " : "M ♂ "}</p>
          <p>🏫 School ➡️ {school}</p>

          <p>🆔 ID ➡️ {id}</p>
          <h4>📊 STUDENT RESULT </h4>
          <p>🧮 Math ➡️ {math}</p>
          <p>🧪 Chemistry ➡️ {chem}</p>
          <p>🧬 Biology ➡️ {bio}</p>
          <p>📝 English ➡️ {eng}</p>
          <p>🪐 Physics ➡️ {phy}</p>
          <p>📚 Civics ➡️ {civic}</p>
          <p>📋 SAT ➡️ {apt}</p>
          <br />
          <p>
            <b>Total(700)</b> ➡️ {total}
          </p>
          <p>
            <b>Total(No Civics)</b> ➡️ {total - civic}
          </p>

          <p>
            <b>Avarage(100%)</b> ➡️ {total / 7}
          </p>
          <p>
            <b>Status ➡️ </b> {total / 7 <= 50 ? "Fail" : "Pass"}
          </p>
        </div>
      ) : (
        <p style={{ padding: 20 }}>Nothing to show</p>
      )}
    </>
  );
};
export default ResultViewer;
