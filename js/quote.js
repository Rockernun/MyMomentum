const quotes = [
  {
    quote: "공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.", 
    author: "-빌 게이츠",
  },
  {
    quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.", 
    author: "-레오나르도 다빈치",
  },
  {
    quote: "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    author: "-공자",
  },
  {
    quote: "강력한 이유는 강력한 행동을 낳는다.",
    author: "-윌리엄 셰익스피어",
  },
  {
    quote: "친구를 고르는 데는 천천히, 친구를 바꾸는 데는 더 천천히.",
    author: "-벤자민 프랭클린",
  },
  {
    quote: "불행은 누가 진정한 친구가 아닌지를 보여준다.",
    author: "-아리스토텔레스",
  },
  {
    quote: "책 없는 방은 영혼 없는 육체와도 같다.",
    author: "-키케로",
  },
  {
    quote: "미래의 가장 좋은 점은 한 번에 하루씩 온다는 것이다.",
    author: "-에이브러햄 링컨",
  },
  {
    quote: "실패가 나태함에 대한 유일한 징벌은 아니다. 다른 이들의 성공도 있지 않은가.",
    author: "-쥘 르나르",
  },
  {
    quote: "가장 큰 위험은 위험없는 삶이다." ,
    author: "-스티븐 코비",
  },
  {
    quote: "우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다.",
    author: "-스티브 잡스"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;