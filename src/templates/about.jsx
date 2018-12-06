import React from 'react'
import Icon from './icon'

const About = () => (
    <div className="about col-10 col-md-6">
        <h1 className="display-3">Hello, stranger!</h1>
        <p>Thank you for exploring the React Global Clock! </p>
        <p>I am Matheus Souza and this is a portfolio project I have developed using React. </p>
        <p>Check out my other projects:</p>

        <Icon site="https://github.com/souzasmatheus/">fab fa-github</Icon>
        <Icon site="https://www.linkedin.com/in/matheus-souza-6ab17616b/">fab fa-linkedin-in</Icon>
    </div>
)

export default About