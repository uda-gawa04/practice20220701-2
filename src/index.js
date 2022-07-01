/**
 * const,let等の変数宣言
 */

//  var vall = "var変数";
//  console.log(vall);

//  //var変数は上書き可能
// vall = "上書き";
// console.log(vall);

// //var変数は再宣言可能
// var vall = "var変数を再宣言"
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //constは上書き不可
// val3 = "上書き";

// //constは再宣言不可
// const val3 = "re";

// //constで定義したオブジェクトは、プロパティの変更が可能
// const val4 = {
//   name: "me",
//   age: 22,
// };
// val4.name = "you";
// val4.addres = "mie";
// console.log(val4);

// //constで定義した配列は、プロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "うだ";
//  const age = 23;
//  //「私の名前はうだです。年齢は23歳です。」を表示させる
// //従来　＋を書かないといけないので、長くなりがち
// const message1 = "私の名前は" + name + "です。年齢は、" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来①
// function func1(str) {
//   return str;
// }
// //従来②
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("fung1です"));
// //strは引数

// //アロー関数
// const func2 = (str) => {
//   return str; //関数で行いたい処理を書く
// };
// console.log(func2("func2です"));

// //省略した形①　引数が一つの場合（）を省略できる
// const func3 = (str) => {
//   return str;
// };
// //省略した形②　中の処理が1行で終わるときは、｛｝やreturnを省略できる
// const func4 = (str) => str;
