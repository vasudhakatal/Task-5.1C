import React, { useState } from 'react';
import './css/select.css';
import Question from './Question';
import Article from './Article';

function Select() {
  const [post, setPost] = useState();

  return (
    <div>
      <div className='everything'>
      <div className='select'>
        Select Post Type:
        <div className='but'>
          <input
            type='radio'
            name='Post Type'
            value='Questions'
            onClick={() => setPost(true)}
          />
          Questions
        </div>
        <div>
          <input
            type='radio'
            name='Post Type'
            value='Articles'
            onClick={() => setPost(false)}
          />
          Articles
        </div>
      </div>
      <div className='form1'>
        <div className='formitem'>What do you want to ask or share </div>
      </div>
      {post === true && <Question />}
      {post === false && <Article />}
      </div>
    </div>
  );
}
export default Select;
