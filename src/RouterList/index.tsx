import React from 'react';
import {Switch, Route} from "react-router-dom";
import ToDo from '../components/Todo';


const RouterList: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={ToDo} exact />
        </Switch>
    )
};

export default RouterList;