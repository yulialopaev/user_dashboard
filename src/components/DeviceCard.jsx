function DeviceCard({device}) {
    return (
        <div className="device-card">
            <p className={"device-title"}>{device.name}</p>
            <p className={"device-type"}>Тип: {device.type}</p>
        </div>
    )
}

export default DeviceCard;