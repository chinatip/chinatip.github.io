import Container from "./components/Container";
import { getData } from './utils/DataMapper';

function App() {
	const data = getData();
	return (
		<div className="App">
			<Container {...data} />
		</div>
	);
}

export default App;
