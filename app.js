let para1 = document.querySelector(".cat-frame__para1");
let para2 = document.querySelector(".cat-frame__para2");
let btn = document.querySelector(".cat-frame__btn");
let img = document.querySelector(".cat-frame__img");

btn.addEventListener("click", function () {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      let random = Math.floor(Math.random() * data.all.length);
      let random2 = Math.floor(Math.random() * data.all.length);
      console.log(data.all[random].text);
      para1.innerText = `Fun Fact! Did you know that ${data.all[random].text}`;
      para2.innerText = `Or that ${data.all[random2].text}`;
    } else {
      console.log(`status: ${XHR.status}`);
    }
  };

  XHR.open("GET", "https://cat-fact.herokuapp.com/facts");
  XHR.send();

  let CATIMG = new XMLHttpRequest();
  CATIMG.onreadystatechange = function () {
    if (CATIMG.readyState == 4 && CATIMG.status == 200) {
      let data = JSON.parse(CATIMG.responseText)[0].url;

      img.src = data;
    } else {
      console.log(`status: ${CATIMG.status}`);
    }
  };

  CATIMG.open("GET", "https://api.thecatapi.com/v1/images/search?size=full");
  CATIMG.send();
});
