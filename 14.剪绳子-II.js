/**
 * @description 贪心算法
 * 给你一根长度为 n 的绳子，
 * 请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。
 * 请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，
 * 此时得到的最大乘积是18。
 * 输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36
 */

var cuttingRope = function (n) {
  if(n<4){
      return n -1;
  } else if(n===4){
      return 4;
  }
  let res = 1;
  while(n>4){
      res = (res * 3)%1000000007;
      n= n-3;
  }

  return res*n%1000000007;
};

const res = cuttingRope(588);
console.log(res)