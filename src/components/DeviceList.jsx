import DeviceCard from "./DeviceCard.jsx";
import {useState} from "react";
import AddDevice from "./AddDevice.jsx";

function DeviceList({initialDevices}) {
    const [devices, setDevices] = useState(initialDevices);
    const [deviceName, setDeviceName] = useState("");

    const [deleteDeviceMessage, setDeleteDeviceMessage] = useState("");

    function deleteDevice(id) {
        const filteredDevices = devices.filter(device => device.id !== id);
        setDevices(filteredDevices);
        if (filteredDevices.length === 0) {
            setDeleteDeviceMessage("У вас пока нет добавленных устройств");
        }
    }

    return (
        <div className="dash-box">
            <h2>Мои устройства: {devices.length}</h2>
            <div className={"device-list"}>
                {devices.map(device => (
                    <div className={"device-card"} key={device.id}>
                        <DeviceCard device={device}/>
                        <button className="delete-button" onClick={() => deleteDevice(device.id)}>Delete</button>
                    </div>
                ))}
                <p>{deleteDeviceMessage}</p>
            </div>

            <AddDevice
                deviceName={deviceName}
                setDeviceName={setDeviceName}
                devices={devices}
                setDevices={setDevices}
                setDeleteDeviceMessage={setDeleteDeviceMessage}/>
        </div>
    )
}

export default DeviceList;