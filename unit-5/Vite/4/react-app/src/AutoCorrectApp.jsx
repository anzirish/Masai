import { useState } from "react";

function AutoCorrectApp() {
  const corrections = {
    teh: "the",
    recieve: "receive",
    adress: "address",
    wierd: "weird",
    thier: "their",
    definately: "definitely",
    seperated: "separated",
    occured: "occurred",
    untill: "until",
    wich: "which",
    acommodate: "accommodate",
    agressive: "aggressive",
    amatuer: "amateur",
    arguement: "argument",
    beleive: "believe",
    buisness: "business",
    calender: "calendar",
    cemetary: "cemetery",
    concious: "conscious",
    dissapear: "disappear",
    enviroment: "environment",
    existance: "existence",
    fourty: "forty",
    goverment: "government",
    guage: "gauge",
    happend: "happened",
    independant: "independent",
    jewlery: "jewelry",
    maintainance: "maintenance",
    milenium: "millennium",
    neccessary: "necessary",
    occassion: "occasion",
    occured: "occurred",
    persue: "pursue",
    publically: "publicly",
    reciept: "receipt",
    refered: "referred",
    religous: "religious",
    restaraunt: "restaurant",
    seige: "siege",
    succesful: "successful",
    supercede: "supersede",
    tommorow: "tomorrow",
    tounge: "tongue",
    truely: "truly",
    wierd: "weird",
    yuor: "your",
    thier: "their",
    occurence: "occurrence",
    embarass: "embarrass",
    harasment: "harassment",
    seperately: "separately",
    privelege: "privilege",
    acheive: "achieve",
    accomodation: "accommodation",
    consistant: "consistent",
    immediatly: "immediately",
    liason: "liaison",
    miniscule: "minuscule",
    posession: "possession",
    reccomend: "recommend",
    rythm: "rhythm",
    suprise: "surprise",
    untill: "until",
    vaccum: "vacuum",
    writting: "writing",
    exagerate: "exaggerate",
    gaurantee: "guarantee",
    harrass: "harass",
    ignorence: "ignorance",
    lenght: "length",
    medeval: "medieval",
    noticable: "noticeable",
    occured: "occurred",
    posess: "possess",
    prefered: "preferred",
    quesionaire: "questionnaire",
    rediculous: "ridiculous",
    sence: "sense",
    speach: "speech",
    strenght: "strength",
    unforseen: "unforeseen",
    wierdly: "weirdly",
  };

  const [input, setInput] = useState("");

  const correctText = () => {
    return input
      .split(" ")
      .map((word) => (corrections[word] ? corrections[word] : word))
      .join(" ");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter text to check auto correction"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "5px" }}
      ></input>
      <p>{correctText()}</p>
    </>
  );
}
export default AutoCorrectApp;
