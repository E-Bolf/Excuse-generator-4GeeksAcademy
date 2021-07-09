/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["doctor", "elephant", "alien", "bruce willies"];
  let possesion = ["my wallet", "my keys", "my leg", "my grandpa"];
  let action = ["blocked", "destroy", "dance with", "took my"];
  let where = ["on my house", "in my office", "in my car", "on the street"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
