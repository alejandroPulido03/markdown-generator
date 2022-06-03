import './App.css';
import Drawer from './components/Header/DrawerComponents/Drawer';
import Navigator from './components/Header/Navigator/Navigator';
import WorkSpace from './components/WorkSpace/WorkSpace/WorkSpace';
function App() {
	return (
		<div className='App'>
			<header>
				<Drawer></Drawer>
				<Navigator></Navigator>
			</header>
			<WorkSpace></WorkSpace>
		</div>
	);
}

export default App;
