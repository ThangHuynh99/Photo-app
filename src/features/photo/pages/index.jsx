import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import Main from './Main';
import AddEditPage from './addEdit';

Photo.propTypes = {
    
};

function Photo(props) {
    const match = useRouteMatch();

    return (  
        <Switch>
            <Route exact path={match.url} component={Main}/>
    
            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} />
    
            <Route  />
      </Switch>
    );
}

export default Photo;