import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import streamShow from "./streams/StreamShow";
import streamCreate from "./streams/StreamCreate";
import streamEdit from "./streams/StreamEdit";
import streamList from "./streams/StreamList";
import streamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () =>{
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={streamList} />
                    <Route path="/streams/new" component={streamCreate} />
                    <Route path="/streams/edit" component={streamEdit} />
                    <Route path="/streams/delete" component={streamDelete} />
                    <Route path="/streams/show" component={streamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
}
    

export default App;