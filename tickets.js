function tickets(peopleInLine) {
  let ticketPrice = 25;
  let countOf25Bills = 0;
  let countOf50Bills = 0;
  let countOf100Bills = 0;
  let change = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === ticketPrice) {
      change += peopleInLine[i];
      countOf25Bills++;
    } else if (peopleInLine[i] === 50) {
      if (countOf25Bills < 1) {
        return "NO";
      }
      change -= 25;
      countOf25Bills--;
      change += 50;
      countOf50Bills++;
    } else if (peopleInLine[i] === 100) {
      if (change < 75) {
        return "NO";
      } else if (countOf50Bills >= 1 && countOf25Bills >= 1) {
        change -= 75;
        countOf50Bills--;
        countOf25Bills--;
        change += 100;
        countOf100Bills++;
      } else {
        if (countOf25Bills >= 3) {
          change -= 75;
          countOf25Bills -= 3;
          change += 100;
          countOf100Bills++;
        } else {
          return "NO";
        }
      }
    }
  }
  return "YES";
}
tickets([25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100, 25, 100, 50]);
