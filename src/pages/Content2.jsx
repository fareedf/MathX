import React from 'react'
import './Content2.css'

export const Content2 = () => {
  return (
    <div className='c-container'>
  <h1>Welcome to Second Grade Math!</h1>

  <div className='lesson'>
  <h2>Lesson 1: Addition and Subtraction</h2>
  <h3>Addition:</h3>
  <p>Addition is when we put things together. When we add, we find out how many we have in total.</p>
  <h3>Example:</h3>
  <p>If you have 25 apples and you get 14 more, how many apples do you have now?</p>
  <p>Equation: 25 + 14 = 39</p>
  <p>So, you have 39 apples in total.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>30 + 12 = ? (Answer: 42)</li>
      <li>17 + 25 = ? (Answer: 42)</li>
    </ol>
  </div>
  <h3>Subtraction:</h3>
  <p>Subtraction is when we take things away. When we subtract, we find out how many are left.</p>
  <h3>Example:</h3>
  <p>If you have 28 candies and you eat 9, how many candies are left?</p>
  <p>Equation: 28 - 9 = 19</p>
  <p>So, you have 19 candies left.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>34 - 12 = ? (Answer: 22)</li>
      <li>29 - 7 = ? (Answer: 22)</li>
    </ol>
  </div>
  </div>

  <div className='lesson'>
  <h2>Lesson 2: Place Value</h2>
  <p>Place value helps us understand the value of each digit in a number.</p>
  <h3>Example:</h3>
  <p>In the number 34, the digit 3 is in the tens place, so it represents 30. The digit 4 is in the ones place, so it represents 4.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>What is the place value of 7 in 47? (Answer: Ones)</li>
      <li>What is the place value of 2 in 32? (Answer: Tens)</li>
      <li>What is the place value of 5 in 58? (Answer: Tens)</li>
    </ol>
  </div>
  </div>

  <div className='lesson'>
  <h2>Lesson 3: Telling Time</h2>
  <p>Let's learn how to read the clock and tell time.</p>
  <h3>Example:</h3>
  <p>If the short hand is on 3 and the long hand is on 12, it is 3 o'clock.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>If the short hand is on 5 and the long hand is on 12, what time is it? (Answer: 5 o'clock)</li>
      <li>If the short hand is on 7 and the long hand is on 6, what time is it? (Answer: 7:30)</li>
      <li>If the short hand is on 2 and the long hand is on 12, what time is it? (Answer: 2 o'clock)</li>
    </ol>
  </div>
  </div>

  <div className='lesson'>
  <h2>Lesson 4: Understanding Money</h2>
  <p>Let's learn about the value of different coins and bills.</p>
  <h3>Example:</h3>
  <p>A quarter is worth 25 cents. A dime is worth 10 cents. A nickel is worth 5 cents. A penny is worth 1 cent.</p>
  <h3>Practice:</h3>
  <div>
    <ol>
      <li>How many cents are 3 dimes worth? (Answer: 30 cents)</li>
      <li>How many cents are 4 nickels worth? (Answer: 20 cents)</li>
      <li>How many cents are 2 quarters worth? (Answer: 50 cents)</li>
    </ol>
  </div>
  </div>
</div>
  )
}

export default Content2;