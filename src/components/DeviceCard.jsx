function DeviceCard({device}) {

    return (
        <div>
            <h3>{device.name}</h3>
            <p className={"device-type"}>Тип: {device.type}</p>

        </div>
    )
}

export default DeviceCard;