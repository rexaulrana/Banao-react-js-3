import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SignIn from "../SignIn";
import "react-tabs/style/react-tabs.css";
import JoinIn from "../JoinIn";
const TabContent = () => {
  return (
    <div className="tabContent col-sm-6">
      <Tabs>
        <TabList className=" border-none">
          <Tab>
            <button className="border-0">SignIn</button>
          </Tab>
          <Tab>
            <button className="border-0">Join In</button>
          </Tab>
        </TabList>

        <TabPanel>
          <SignIn></SignIn>{" "}
        </TabPanel>
        <TabPanel>
          <JoinIn></JoinIn>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabContent;
