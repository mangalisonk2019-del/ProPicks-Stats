import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

const App = (props) => (
 <div>
 <AppRoutes {...props} />
 </div>
)
export default App;