const root = document.querySelector(".root");
const test = document.querySelectorAll(".test");

const educationStr = `<section class="education" id="education">
<h2>Wykształcenie</h2>
<table>
    <tr>
        <td>2022-obecnie</td>
        <td>WSIZ</td>
    </tr>
    <tr>
        <td>2018-2022</td>
        <td>Technikum nr.2 w Ropczycach</td>
    </tr>
    <tr>
        <td>2015-2018</td>
        <td>Publiczne gimnazjum w Paszczynie</td>
    </tr>
</table>
</section>`;
const hobbyStr = `<section class="hobby" id="hobby">
<h2>Moje zainteresowania</h2>
<ul>
    <li>Seriale i filmy
        <details>
            <summary>Seriale</summary>
            <ul>
                <li>Lucyfer</li>
                <li>Zabójcze umysły</li>
                <li>Family Guy</li>
            </ul>
            <summary>Filmy</summary>
            <ul>
                <li>MCU</li>
            </ul>
        </details>
    </li>
    <li>Programowanie</li>
    <li>Spacery</li>
</ul>
</section>`;
const formStr = `<section><form action="" method="get">
<label for="fname">Imię: </label><br />
<input type="text" id="fname" name="fname" /><br />
<label for="lname">Nazwisko: </label><br />
<input type="text" id="lname" name="lname" /><br />
<button id="btnForm" onClick="formEx()">Prześlij</button>;`;

const show = function (element) {
  temp = element + "Str";
  root.insertAdjacentHTML("beforeend", eval(element + `Str`));
};
const formEx = function () {
  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;
  alert(`Cześć ${fname} ${lname} =)`);
};
test.forEach((e) => {
  e.addEventListener(
    "click",
    () => {
      show(e.id);
    },
    { once: true }
  );
});
