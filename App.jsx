import React from 'react';
import Header from './Heading';
import Node from './Node';
import Footer from './Footer';

function App() {
    return <div>
                <Header />
                <div className="nodeCantainer">
                    <Node />
                    <Node />
               </div>
                <Footer />
            </div>;
}


export default App;