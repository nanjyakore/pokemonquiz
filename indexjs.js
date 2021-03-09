// クイズゲーム


const quiz = [
  {
    question:"ヒマナッツの防御種族値は？",
    answer:[
      "200",
      "180",
      "30",
      "60",
    ],
    correct:"30"
  },
  {
    question:"ヒマナッツより合計種族値が低いポケモンは？",
    answer:[
      "サッチムシ",
      "ユキハミ",
      "ヨワシ",
      "コイキング",
    ],
    correct:"ヨワシ"
  },
  {
    question:"ヒマナッツの体重は？",
    answer:[
      "1.8kg",
      "999kg",
      "0.5g",
      "3kg",
    ],
    correct:"1.8kg"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


// const question = "問題";
// const answer = ["a","b","c","d"];
// const correct = "a";



const $button = document.getElementsByTagName("button");

// HTMLのオブジェクトには$をつける
// $button[0].textContent = answer[0];
// $button[1].textContent = answer[1];
// $button[2].textContent = answer[2];
// $button[3].textContent = answer[3];

// 問題、選択肢を定義
const setup　= () =>{
  console.log(document.getElementById("js_question").textContent = quiz[quizIndex].question);
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
}

setup();

const correctness_decision = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解");
    score++;
  }else{
    window.alert("不正解");
  }
  quizIndex++;

  if(quizIndex < quizLength){
    setup();
  }else {
    window.alert("終了!!!!!あなたの正解数は" + score +  "/" + quizLength + "です!")


  }

};


// 正誤判定
$button[0].addEventListener("click",correctness_decision);

$button[1].addEventListener("click",correctness_decision);

$button[2].addEventListener("click",correctness_decision);

$button[3].addEventListener("click",correctness_decision);





// let a = "hello";
//
// // a = "aho";
//
// console.log(a);
//
// // オブジェクト
// const baka = {
//   color:"pink",
//   size:"large",
//   gomi:() => {
//      console.log("gomi");
//   }
// };
//
// // console.log(window.innerWidth);
// // window.alert("あほ");
//
// // console.log(document.getElementsByTagName("button")[0]);
//
// document.getElementsByTagName("button")[0].addEventListener("click",()=>{
//   // 命令を書く
//   window.alert("かす");
// })
