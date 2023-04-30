import React, {Suspense, useEffect} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();
	
	useEffect(() => {
		throw new Error;
	}, []);

	return (
		<div className={`app ${theme}`}>
			<Suspense fallback={'loading'}>
				<Navbar />
				<div className={'page-content'}>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
