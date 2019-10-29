function checkForDoubleClick(firstClick, secondClick) {
	function createTimestamp() {
		const click = Date.now();
    console.log(click);
    return click;
  };
  
  function firstClick() {
    document.addEventListener("click", createTimestamp);
    firstClick = Date.now();
    console.log(firstClick);
    return firstClick;
  }
  
  function secondClick() {
    document.addEventListener("click", createTimestamp);
    secondClick = Date.now();
    console.log(secondClick);
    return secondClick;
  }

  function compare() {
    if (secondClick - firstClick < 500) {
      console.log("That was a double click!");
    } else {
      console.log(
        `If you are trying to double click, you are too slow ¯\_(ツ)_/¯ &#129335`
      );
    }
  }
  return compare;
}

checkForDoubleClick();

function xTime(times) {
  function inner(number) {
    console.log(times * number);
  }
  return inner;
}

// xTime(2)(5);

// const double = xTime(2);
// console.log(double(5));