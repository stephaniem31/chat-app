import React from 'react';
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Contact
                name="Alberto Bates"
                avatar="https://randomuser.me/api/portraits/men/7.jpg"
                online
            />
            <Contact
                name="Herbert Hopkins"
                avatar="https://randomuser.me/api/portraits/men/74.jpg"
            />
            <Contact
                name="Marion Newman"
                avatar="https://randomuser.me/api/portraits/men/95.jpg"
                online
            />
        </div>
    );
}

export default App;
