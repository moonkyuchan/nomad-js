const quotes = [
  {
    quote: "나는 그 누구와도 싸우지 않았노라",
    author: "(1)",
  },
  {
    quote: "싸울만한 상대가 없었기에",
    author: "(2)",
  },
  {
    quote: "나는 자연을 사랑했고, 예술을 사랑했노라",
    author: "(3)",
  },
  {
    quote: "나는 삶의 불씨에 두 손을 녹였노라",
    author: "(4)",
  },
  {
    quote: "이제 그 불씨가 꺼지려하니,",
    author: "(5)",
  },
  {
    quote: "나도 떠날 때가 되었도다.",
    author: "(6)",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const showQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = showQuote.quote;
author.innerText = showQuote.author;
