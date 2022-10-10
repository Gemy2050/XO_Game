let squares =document.querySelectorAll(".square");
let title = document.querySelector(".title");
let options = document.querySelectorAll(".options button");
let start = document.querySelector(".controls .start");
let controls = document.querySelector('.controls');

let turn = "o";

  options.forEach((el) => {
    el.addEventListener("click", (e) => {
      options.forEach((e) => {
        e.classList.remove("active");
      });
      e.target.classList.add("active");
      turn = e.target.innerHTML;
    });
  });

  start.onclick = function() {
    squares.forEach((s) => s.style.display = 'block');
    controls.style.display = 'none'
    
  }


function game(sq) {

  if(turn == "o" && sq.textContent == '') {
    title.textContent = "X";
    sq.textContent = "O";
    turn = 'x';
  } else if(turn == 'x' && sq.textContent == '') {
    title.textContent = "O";
    sq.textContent = "X";
    turn = 'o';
  }
  winner();
}
function winner() {
  if (
    squares[0].innerHTML == squares[1].innerHTML &&
    squares[1].innerHTML == squares[2].innerHTML &&
    squares[2].innerHTML != ""
  ) {
    end(0, 1, 2);
  } else if (
    squares[3].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML != ""
  ) {
    end(3, 4, 5);
  } else if (
    squares[6].innerHTML == squares[7].innerHTML &&
    squares[7].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    end(6, 7, 8);
  } else if (
    squares[2].innerHTML == squares[5].innerHTML &&
    squares[5].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[0].innerHTML == squares[3].innerHTML &&
    squares[3].innerHTML == squares[6].innerHTML &&
    squares[6].innerHTML != ""
  ) {
    end(0, 3, 6);
  } else if (
    squares[1].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[7].innerHTML &&
    squares[7].innerHTML != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[0].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[8].innerHTML &&
    squares[8].innerHTML != ""
  ) {
    end(0, 4, 8);
  } else if (
    squares[2].innerHTML == squares[4].innerHTML &&
    squares[4].innerHTML == squares[6].innerHTML &&
    squares[6].innerHTML != ""
  ) {
    end(2, 4, 6);
  }

}
function end(num1, num2, num3) {

  title.innerHTML = "The Winner is " + squares[num1].innerHTML + " ";
  squares[num1].style.backgroundColor = "blue";
  squares[num2].style.backgroundColor = "blue";
  squares[num3].style.backgroundColor = "blue";

  setInterval(()=> {
    title.innerHTML += '.';
  }, 500)
  setTimeout(()=> location.reload(), 1900)

  squares.forEach(sq => {
    sq.style.pointerEvents = 'none';
  })

}


squares.forEach((sq) => {
  sq.addEventListener("click", (e) => {
    game(sq);
  })
});