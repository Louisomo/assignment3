import React from 'react';
import Article from '../../components/article/Article';
import { image1, image2, image3, image4, image5, image6, image7, image8 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1>CredPal Trending Merchants.</h1>
<p>We have the very best merchants across all categories you can think of for complete shopping experience.</p>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
      <Article imgUrl={image1} text="Hard Rock Cafè" />
        <Article imgUrl={image2} text="Just Used" />
        <Article imgUrl={image3} text="Okayfones" />
        <Article imgUrl={image4} text="Ogabassey" />
        <Article imgUrl={image5} text="Sales366" />
        <Article imgUrl={image6} text="Dreamworks" />
        <Article imgUrl={image7} text="Dreamworks" />
        <Article imgUrl={image8} text="Dreamworks" />
      </div>
    </div>
  </div>
);

export default Blog;