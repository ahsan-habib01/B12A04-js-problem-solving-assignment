function totalFine(fare) {
  // You have to write your code here
  if (typeof fare != 'number' || fare <= 0) {
    return 'Invalid';
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}
const fine = totalFine(0);
console.log(fine);
