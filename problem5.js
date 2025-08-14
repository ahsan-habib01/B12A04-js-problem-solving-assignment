function resultReport(marks) {
  // You have to write your code here
  if (!Array.isArray(marks)) {
    return 'Invalid';
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let total = 0;
  let pass = 0;
  let fail = 0;

  for (let mark of marks) {
    total += mark;

    finalScore = Math.round(total / marks.length);

    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }

  return { finalScore, pass, fail };
}

const result = resultReport([]);
console.log(result);
