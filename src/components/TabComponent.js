import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabDoor from "./tabs_nav/TabDoor";
import TabDevices from "./tabs_nav/TabDevices";
import TabPrices from "./tabs_nav/TabPrices";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";
import "../css/TabsNav.css";

class TabComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
        >
          <TabList className="tab-nav-container">
            <Tab className={`${this.state.tabIndex === 0 ? "active" : null}`}>
              <TabDoor />
              <p className="lgScreen" style={{ marginBottom: "1.875rem" }}>
                <strong>
                  No commitments
                  <br />
                  Cancel online at anytime
                </strong>
              </p>
              <br />
              <span className="mdScreen" style={{ marginTop: "0.4rem" }}>
                Cancel
              </span>
            </Tab>
            <Tab className={`${this.state.tabIndex === 1 ? "active" : null}`}>
              <TabDevices />
              <p
                className="lgScreen"
                style={{ marginTop: "-5.3125rem", marginBottom: "1.875rem" }}
              >
                <strong>Watch anywhere</strong>
              </p>
              <span className="mdScreen" style={{ marginTop: "-5.3125rem" }}>
                Devices
              </span>
            </Tab>
            <Tab className={`${this.state.tabIndex === 2 ? "active" : null}`}>
              <TabPrices />
              <p className="lgScreen" style={{ marginBottom: "1.875rem" }}>
                <strong>Pick your price</strong>
              </p>
              <br />
              <span className="mdScreen">Price</span>
            </Tab>
          </TabList>
          <TabPanel>
            <TabContentOne />
          </TabPanel>
          <TabPanel>
            <TabContentTwo />
          </TabPanel>
          <TabPanel>
            <TabContentThree />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabComponent;
