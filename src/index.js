module.exports = function reverse (n) {
 var nn=0
 n=Math.abs(n)
  while (n>0)
 {
  nn=nn*10+n % 10
  n=Math.floor(n/10)
 }
return nn
}
