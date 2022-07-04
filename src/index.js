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

// //従来①
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

/**
 * スプレッド構文
 */

// //配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// // →　配列の中身を一つ一つ分けて表示

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// // →　コンソールには３が表示
// sumFunc(...arr1);
// // →　コンソールには３が表示、上記をスプレッド構文で書き換えた

// //配列をまとめる（展開の逆）
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// // arr3は配列をまとめて受け取っている
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// // arr4のコピーを作成することができる
// // 新しい配列に、arr4の中身を順番に入れている

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// // 2つ以上の配列を結合させることが出来る

// const arr8 = arr4;
// console.log(arr8);
// // これだと参照をコピーしているので、どちらかを書き換えるともう一方も書き換わってしまう

/**
 * mapやfilterを使った配列の処理
 */

//  //for文を使った、従来の書き方
//  const nameArr = ["田中", "yamada", "Tom"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// // →　配列の中身が順番に表示

//mapを使う
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//  nameArr.map((name, index) => console.log(`${index + 1} is ${name}`));

// filterを使う
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["田中", "yamada", "Tom"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr = ["田中", "yamada", "Tom"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "Tom") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// // ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));
// console.log(checkSum(50, 51));

/**
 * 論理演算子
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num2 = 100;
// const fee2 = num2 || "金額未設定です";
// console.log(fee2);

// 　||は、「この左側がfalseとなるとき、右側を返す。tureのときは、左側をそのまま返す」という処理をする
// null=false → 右側を返す

// const num = null;
// const fee = num && "何か設定されました";
// console. log(fee);

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console. log(fee2);
