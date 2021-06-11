import Container from "./components/Container";
import { AddData } from './utils/DataProvider';

function App() {
	AddData();
	
	return (
		<div className="App">
			<Container />
		</div>
	);
}

export default App;
