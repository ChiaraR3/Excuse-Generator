/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoAle = Math.floor(Math.random() * who.length);
  let actAle = Math.floor(Math.random() * action.length);
  let whatAle = Math.floor(Math.random() * what.length);
  let whenAle = Math.floor(Math.random() * when.length);

  return (
    who[whoAle] +
    " " +
    action[actAle] +
    " " +
    what[whatAle] +
    " " +
    when[whenAle]
  );
};
