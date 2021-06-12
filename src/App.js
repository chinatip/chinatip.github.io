import styled from "styled-components";
import Container from "./components/Container";
import { AddData } from './utils/DataProvider';

const AppContainer = styled.div`
	background: #f9f9f9;
`;

function App() {
	AddData();
	
	return (
		<AppContainer className="App">
			<Container />
		</AppContainer>
	);
}

export default App;
