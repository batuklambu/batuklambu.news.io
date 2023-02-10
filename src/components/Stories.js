import React from 'react';
import { useGlobalContext } from '../context';

const Stories = () => {
  const { isLoading, articles, removeNews } = useGlobalContext(); //
  console.log(isLoading);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {articles &&
        articles.map((article, index) => {
          const { publishedAt, title, description, url, content, author } =
            article;
          // const { title, description, url, content, author } = article;
          // console.log(article);
          return (
            <article key={index} className="story">
              <h4 className="title"> {title}</h4>
              <p className="info">author : {author} </p>
              <p className="info"> description : {description}</p>
              <p className="info"> content : {content} </p>
              <div>
                <a
                  href={url}
                  className="read-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  read more
                </a>
                <button
                  className="remove-btn"
                  onClick={() => removeNews(publishedAt)}
                >
                  remove
                </button>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Stories;
