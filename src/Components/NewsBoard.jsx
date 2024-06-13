import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ country, category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
     //Using backticks (`) for template literals
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=26128182fdf248ec970532234c9b404c`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles));

  }, [country, category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default NewsBoard;

// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoard = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setArticles(data.articles));
//   }, [category]);

//   return (
//     <div>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>
//       {articles.map((news, index) => {
//         console.log(news.description);
//         return (
//           <NewsItem
//             key={index}
//             title={news.title}
//             description={news.description}
//             src={news.urlToImage}
//             url={news.url}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default NewsBoard;





// import { useEffect } from "react";
// import { useState } from "react";
// import NewsItem from "./NewsItem";
// const NewsBoard = ({category}) => {
//     const [articles,setArticles] = useState([]);
//     useEffect(()=>{
//          let url = 'https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}';
//         let url = 'https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=26128182fdf248ec970532234c9b404c';
//         fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
        
//     },[category])
//     return (
//         <div>
//             <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
//             {articles.map((news,index)=>{
//                 console.log(news.description)
//                 return<NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
//             })}
//         </div>
//     )
// }
// export default NewsBoard;