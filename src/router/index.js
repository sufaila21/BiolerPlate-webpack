import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../components/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                {/* <Route path="/shop" exact component={Shop} />              */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;