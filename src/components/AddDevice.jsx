import {useState} from "react";

function AddDevice({deviceName, setDeviceName, devices, setDevices, setDeleteDeviceMessage}) {
    const [addDeviceMessage, setAddDeviceMessage] = useState("");
    const [type, setType] = useState("");

    function addDevice(name, type) {
        const trimmedName = name.trim();

        if (!trimmedName) {
            return setAddDeviceMessage("Введите имя устройства");
        }

        const newDevice = {
            id: crypto.randomUUID(),
            name: trimmedName,
            type
        }

        const newDevices = [...devices, newDevice];
        setDevices(newDevices);
        setDeviceName("")
        setType("")
        setAddDeviceMessage("")
        setDeleteDeviceMessage("")
    }
    return (
        <div className="add-device">
            <h4>Create Device</h4>
            <form onSubmit={(e) => {
                addDevice(deviceName, type)
                e.preventDefault()
            }}>
                <label htmlFor="name">Device Name: </label>
                <input type="text" id="name" placeholder={"My phone"}
                       value={deviceName}
                       onChange={(e) =>
                           setDeviceName(e.target.value)}/>
                <label htmlFor="device-type">Device Type: </label>
                <select id={"device-type"}
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                    <option value="">Choose type</option>
                    <option value="Windows">Windows</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                </select>
                <button className="add-button" type="submit">Add device</button>
                <p>{addDeviceMessage}</p>
            </form>
        </div>
    )
}

export default AddDevice;