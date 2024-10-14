import React from "react";
import "./HomePage.css";


const HomePage = () =>{
    return (
        <div className="container">
            <div>
            <h1>Welcome to MathX!</h1>
            </div>
            <div>
            <h2>About Us</h2>
            </div>
            <p>Welcome to MathX, your go-to destination for fun and engaging math content tailored for students in grades 1, 2, and 3. At MathX, we believe that learning math should be an exciting adventure, filled with curiosity, discovery, and achievement.</p>
            <h2>Our Mission</h2>
            <p>Our mission is to ignite a love for math in young learners by providing high-quality, interactive, and age-appropriate resources. We aim to build a strong foundation in math skills that will serve as a springboard for future academic success.</p>
            <h2>What We Offer</h2>
            <ul>
                <li><strong>Grade 1 Content:</strong> Fun activities and exercises that introduce basic math concepts such as counting, addition, subtraction, and shapes.</li>
                <li><strong>Grade 2 Content</strong> Engaging lessons and practice problems that cover more advanced topics like place value, simple fractions, and measurement.</li>
                <li><strong>Grade 3 Content</strong> Challenging yet approachable material on multiplication, division, geometry, and problem-solving.</li>
            </ul>
            <h2>Why Choose MathX?</h2>
        </div>
    );  
}

export default HomePage;