import React from 'react';

const heading=['Javascript and React.js','Machine Learning','Cyber Sequrity','Web development']

const para=[
    'This was an amazing Web development using React.js bootcamp taken up by Shaurya Sinha We covered everything from Scratch including Javascript React.js.',
    "This was an amazing Machine learning bootcamp taken up by Shaurya Sinha We covered everything from Scratch including Python, datascience and machine learning.",
    'This was an amazing Cyber sequrity bootcamp taken up by Shaurya Sinha We covered everything from Scratch including cyber crime and preventing.',
    "This was an amazing front end development bootcamp taken up by Shaurya Sinha We covered everything from Scratch including HTML CSS and JAVASCRIPT."
]


function Cards(k){
    return <>
                <div className="node">          
                    <h1>{heading[k.b]}</h1>
                    <p>
                        {para[k.b]}
                    </p>
                </div>
            </>
}

function Node(){
    return  ( 
        <div className='center'>
            <Cards b="0"/>
            <Cards b="1"/>
            <Cards b="2"/>
            <Cards b="3"/>
        </div>);
}



export default Node;