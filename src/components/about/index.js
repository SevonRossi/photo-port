import React from 'react';
import cover from '../../assets/cover/cover-image.jpg';

function About (){
    return (
        <section class="my-s">
        <h1 id= "about"> Who am I? </h1>
        <img src ={cover} classname="my-2" style={{ width: "100%"}} alt="cover" />
        </section>
    );
}

export default About;