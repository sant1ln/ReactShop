import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Layout from '../container/Layout';
import Login from '../container/Login';
import RecoveryPassword from '../container/RecoveryPassword';
import '../styles/global.css'


const App = () => {
	return (
		<BrowserRouter>
				<Switch>
						<Layout>
							<Route exact path="/login" component={Login} />
							<Route exact path="/recovery-password" component={RecoveryPassword} />
						</Layout>
				</Switch>		
		</BrowserRouter>
	);
}

export default App;