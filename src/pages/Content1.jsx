import React from 'react';
import './Content1.css';

export const Content1 = () => {
  return (
    <div className='c-container'>
      <h1>Welcome to First Grade Math!</h1>
      <div className='lesson'>
      <h2>Lesson 1: Addition and Subtraction</h2>
      <h3>Additon</h3>
      <p>Addition is when we put things together. When we add, we find out how many we have in total.</p>
      <h3>Example:</h3>
      <p>If you have 3 apples and you get 4 more, how many apples do you have now?</p>
      <p>Equation: 3 + 4 = 7</p>
      <p>So, you have 7 apples in total.</p>
      <h3>Practice:</h3>
      <div>
      <ol>
        <li>
        2 + 5 = ?
        </li>
        <li>
        1 + 6 = ?  
        </li>
        <li>
        4 + 3 = ?
        </li>
      </ol>
      </div>
      </div>

      <div className='lesson'>
      <h2>Lesson 2: Counting</h2>
        <h3>Additon</h3>
        <p>Addition is when we put things together. When we add, we find out how many we have in total.</p>
        <h3>Example:</h3>
        <p>If you have 3 apples and you get 4 more, how many apples do you have now?</p>
        <p>Equation: 3 + 4 = 7</p>
        <p>So, you have 7 apples in total.</p>
        <h3>Practice:</h3>
        <div>
        <ol>
          <li>
        2 + 5 = ?
        </li>
        <li>
        1 + 6 = ?  
        </li>
        <li>
        4 + 3 = ?
        </li>
      </ol>
      </div>
      </div>
      
    <div className='lesson'>
    <h2>Lesson 3: Shapes</h2>
      <p>Shapes are everywhere! Let’s learn about some basic shapes and how many sides they have.</p>
      <h3>Example:</h3>
      <p>A triangle has 3 sides.</p>
      <h3>Practice:</h3>
      <div>
      <ol>
        <li>A square has ____ sides. (Answer: 4)</li>
        <li>A rectangle has ____ sides. (Answer: 4)</li>
        <li>A circle has ____ sides. (Answer: 0)</li>
    </ol>
    </div>
    </div>

    <div className='lesson'>
    <h2>Lesson 4: Comparison</h2>
  <p>Comparing numbers means figuring out which number is bigger or smaller.</p>
  <h3>Example:</h3>
  <p>Which number is bigger, 6 or 9?</p>
  <p>9 is bigger.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>Which is smaller, 4 or 7? (Answer: 4)</li>
      <li>Which is bigger, 3 or 5? (Answer: 5)</li>
      <li>Which is smaller, 8 or 2? (Answer: 2)</li>
    </ol>
  </div>
  </div>
  <p>try out this <a href="/Quiz">quiz</a></p>
    </div>
  )
}

export default Content1;