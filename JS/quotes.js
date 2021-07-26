const quotes = [
  {
    quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",
    author: "괴태",
  },
  {
    quote:
      "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다.",
    author: "에디슨",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다.",
    author: "톨스토이",
  },
  {
    quote:
      "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.",
    author: "알랭",
  },
  {
    quote:
      "나는 그 누구와도 싸우지 않았노라, 싸울만한 상대가 없었기에 난 자연을 사랑했고 예술을 사랑했노라, 나는 삶의 불씨에 두 손을 녹였노라 그 불씨가 꺼지려 하니 나도 떠날 때가 되었도다",
    author: "윌터 새비지 렌더",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const showQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = showQuote.quote;
author.innerText = showQuote.author;
