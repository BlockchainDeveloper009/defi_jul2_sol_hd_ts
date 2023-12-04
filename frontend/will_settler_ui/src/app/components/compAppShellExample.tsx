import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
//import TableExample from './ManageWillsTable';
import ChipsExample from './ChipsExample';

import { 
    BrowserRouter as Router,
    Link,
    Route,
    Routes 
} from "react-router-dom";
import TitleAndTextExample from './TitleAndTextExample';
import Registration from './Registration';
import Cards from './Cards';
import CalendarExample from './CalendarExample';
import TimeInputExample from './TimeInputExample';
import ShowNotificationExample from './ShowNotificationExample';
import Buttons from './Buttons';
import ManageAssetsTable from './ManageAssetsTable';
import ManageWillsTable from './ManageWillsTable';
import WagmiTest from './WagmiTest';
import FormExample from './FormExample';
import CreateAssetsForm from './CreateAssetsForm';
import CreateWillsForm from './CreateWillsForm';
import WagmiAssetForm from './wagmiAssetForm';
import WagmiWillsForm from './wagmiWillsForm';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import WagmiWillsFormEdit from './WillsFormEdit';
import WillsFormEdit from './WillsFormEdit';

const Applicationfooter = "2022 all copyright resverved to Inherit Blocks"
function AppShellExample() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
      connector: new InjectedConnector({
        options: {
          shimDisconnect: false,
        },
      }),
    })
    const { address, connector, isConnected } = useAccount()
    const { disconnect } = useDisconnect()
    const WalletHandler = () => {
      if (isConnected) 
      {
        return (
          <div>
            {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
            {/* <div>{ensName ? `${ensName} (${address})` : address}</div> */}
            <div>{address}</div>
            {/* <div>Connected to {connector.name}</div> */}
            <button onClick={()=>disconnect}>Disconnect</button>
          </div>
        )
      }
      return (
        <div>
          {connectors.map((connector) => (
            <button
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                ' (connecting)'}
            </button>
          ))}
     
          {error && <div>{error.message}</div>}
        </div>
      )
    }

  return (
    <div className="App">
        <Router>
        <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

          <Text>Navigation</Text>
          <Navbar.Section>
            <Text>Services</Text>
          </Navbar.Section>
          <Navbar.Section grow mt="lg">
            <div style={{display: "flex", flexDirection: "column"}}>
                <Text component={Link}  variant="link" to="/">
                   Home Page
                </Text>
                <Text component={Link}  variant="link" to="/WagmiWillsForm">
                  wagmiWillsForm
                </Text>
                <Text component={Link}  variant="link" to="/WagmiAssetForm">
                WagmiAssetForm
                </Text>
             
                <Text component={Link}  variant="link" to="/input">
                   Input Example
                </Text>
                <Text component={Link}  variant="link" to="/wagmiTest">
                wagmiTest
                </Text>
                <Text component={Link}  variant="link" to="/ManageWillsTable">
                  ManageWillsTable
                </Text>
                <Text component={Link}  variant="link" to="/ManageAssetsTable">
                  ManageAssetsTable
                </Text>

                <Text component={Link}  variant="link" to="/cardsPage">
                   Cards Page
                </Text>
                <Text component={Link}  variant="link" to="/CalendarExample">
                CalendarExample
                </Text>
                <Text component={Link}  variant="link" to="/TimeInputExample">
                TimeInputExample
                </Text>
                <Text component={Link}  variant="link" to="/ShowNotificationExample">
                ShowNotificationExample
                </Text>
                <Text component={Link}  variant="link" to="/TableExample">
                TableExample
                </Text>
                <Text component={Link}  variant="link" to="/TitleAndTextExample">
                TitleAndTextExample
                </Text>
                <Text component={Link}  variant="link" to="/Buttons">
                Buttons
                </Text>    
            </div>
           

          </Navbar.Section>

        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
            <Text>Resources</Text>
            <Text>By State</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          {Applicationfooter}
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', justifyContent: "space-between" }}> 
          {/* div style={{ display: 'flex', alignItems: 'center', height: '100%' */}
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Inherit Blocks</Text>
            <Text>Tutorial</Text>
            <Text>AboutUs</Text>
            <Text>ContactUs</Text>
            <Text>FAQ</Text>
            <Text>
              {

                WalletHandler()
              
              
              }</Text>

          </div>
        </Header>
      }
    >
        <Routes>
            <Route path="/" element={<ChipsExample/>}></Route>
            <Route path="/WagmiAssetForm" element={<WagmiAssetForm/>}></Route>
            <Route path="/wagmiWillsForm" element={<WagmiWillsForm/>}></Route>
            <Route path="/input" element={<Registration/>}></Route>
            <Route path="/ChipsExample" element={<ChipsExample/>}></Route>
            <Route path="/cardsPage" element={<Cards/>}></Route>
            <Route path="/CalendarExample" element={<CalendarExample/>}></Route>
            <Route path="/TimeInputExample" element={<TimeInputExample/>}></Route>
            <Route path="/ShowNotificationExample" element={<ShowNotificationExample/>}></Route>
            <Route path="/wagmiTest" element={<WagmiTest/>}></Route>
            <Route path="/TitleAndTextExample" element={<TitleAndTextExample/>}></Route>
            <Route path="/Buttons" element={<Buttons/>}></Route>
            
            <Route path="/ManageAssetsTable" element={<ManageAssetsTable/>}></Route>
            <Route path="/ManageWillsTable" element={<ManageWillsTable/>}></Route>
            <Route path="/FormExample" element={<FormExample/>}></Route>
            <Route path="/CreateAssetsForm" element={<CreateAssetsForm/>}></Route>
            <Route path=":asId" element={<WillsFormEdit/>}></Route>
            
            {/* <Route path="/manageAssetsTable" element={<manageAssetsTable/>}></Route>
            <Route path="/manageWillsTable" element={<manageWillsTable/>}></Route> */}

            
            
            
        </Routes>

      <Text>Resize app to see responsive navbar in action</Text>
      {/* <TableExample/> */}
      
    </AppShell>
    </Router>
    </div>
  );
}

export default AppShellExample;