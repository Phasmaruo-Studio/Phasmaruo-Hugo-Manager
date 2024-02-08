import "./App.css";
import Start from "./pages/Start";
import FileExplorer from "./components/FileExplorer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TerminalPage from "./pages/TerminalPage";
import ControlPage from "./pages/ControlPage";

function App() {
    return (
    	<div>
    		<FileExplorer dir="" />
			<Tabs className="tabs">
				<TabList>
					<Tab>Welcome<button className="close">x</button></Tab>
				</TabList>
				<TabPanel className="code">
					<Start />
				</TabPanel>
			</Tabs>
			<Tabs className="tabs">
				<TabList>
					<Tab>Control</Tab>
					<Tab>Terminal</Tab>
				</TabList>
				<TabPanel>
					<div className="control">
						<ControlPage />
					</div>
				</TabPanel>
				<TabPanel>
					<TerminalPage />
				</TabPanel>
			</Tabs>
    	</div>
  	);
}

export default App;
