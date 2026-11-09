import './App.css'
import UserInfo from "./components/UserInfo.jsx";
import {user} from "./data/user.js";
import SubscriptionInfo from "./components/SubscriptionInfo.jsx";
import {subscription} from "./data/subscription.js";
import DeviceList from "./components/DeviceList.jsx";
import {initialDevices} from "./data/devices.js";

function App() {


    return (
        <>
            <h1>Мой личный кабинет</h1>
            <UserInfo user={user}/>
            <SubscriptionInfo subscription={subscription}/>
            <DeviceList devices={initialDevices}/>
        </>
    )
}

export default App
