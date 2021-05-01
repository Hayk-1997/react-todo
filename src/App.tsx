import React from 'react';
import Grid from '@material-ui/core/Grid';
import RouterList from './RouterList';

const App: React.FC = () => {
  return (
      <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
      >
          <Grid item xs={6}>
              <RouterList />
          </Grid>
      </Grid>
  );
};


export default App;
