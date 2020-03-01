$(() => {
  const hovercomment1 = document.querySelector(".sample1");
  const hovercomment2 = document.querySelector(".sample2");
  const hovercomment3 = document.querySelector(".sample3");
  const displayNon = document.querySelector(".sample-comment");
  const displayNon2 = document.querySelector(".sample-comment2");
  const displayNon3 = document.querySelector(".app-comment");

  displayNon.style.display = "";
  displayNon2.style.display = "";
  displayNon3.style.display = "";
  const changeElement = el => {
    if (el.style.display == "") {
      el.style.display = "none";
    } else {
      el.style.display = "";
    }
  };

  //上記関数をボタンクリック時に実行
  hovercomment1.addEventListener(
    "mouseover",
    () => {
      changeElement(displayNon);
    },
    false
  );
  hovercomment1.addEventListener(
    "mouseleave",
    () => {
      changeElement(displayNon);
    },
    true
  );
  hovercomment2.addEventListener(
    "mouseover",
    () => {
      changeElement(displayNon2);
    },
    false
  );
  hovercomment2.addEventListener(
    "mouseleave",
    () => {
      changeElement(displayNon2);
    },
    true
  );
  hovercomment3.addEventListener(
    "mouseover",
    () => {
      changeElement(displayNon3);
    },
    false
  );
  hovercomment3.addEventListener(
    "mouseleave",
    () => {
      changeElement(displayNon3);
    },
    true
  );
});
