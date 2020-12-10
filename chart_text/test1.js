/*
 * @Author: junchao
 * @Date: 2020-11-05 15:13:42
 * @LastEditTime: 2020-11-05 16:55:56
 * @LastEditors: junchao
 * @Description: 
 * @FilePath: /JavaScriptDesignPatterns/chart_text/test1.js
 * @symbol_custom_string_obkoro1: 可以输入预定的版权声明、个性签名、空行等
 */
function getJudge(N, trust) {
  let cityPeoples = new Map();
  for (let i = 0; i < N; i) {
    cityPeoples.set(i,0);
  }
  trust.forEach(element => {
    
  });
}


// function canVisitAllRooms(rooms = []) {
//   // 拿到钥匙的列表
//   let keys = new Set();
//   keys.add(0);
//   for (let i = 0; i < rooms.length - 1; i++) {
//     const element = rooms[i];
//     if (element.length > 0) {
//       element.forEach(item => {
//         keys.add(item);
//       });
//     }
//     console.log(i)
//     console.log(keys)
//     if (!keys.has(i + 1)) {
//       return false
//     }
//   }
//   return true;
// }

// console.log(canVisitAllRooms([[1], [2], [], [3]]))
// console.log(canVisitAllRooms([[1], [2], [3], []]))
// console.log(canVisitAllRooms([[1, 1], []]))
console.log(canVisitAllRooms([[2], [], [1]]))
