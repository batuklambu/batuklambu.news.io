import React from 'react';
import { useGlobalContext } from '../context';

const Stories = () => {
  const { isLoading, articles } = useGlobalContext();
  console.log(isLoading);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {articles.map((article) => {
        const { id, title, description, url, content, author } = article;
        console.log(article);
        return (
          <article key={id} className="story">
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
              <button className="remove-btn">remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
