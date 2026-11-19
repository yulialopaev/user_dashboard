function SubscriptionInfo({subscription}) {
    const isActive = subscription.expiresAt.getTime() > Date.now();
    const statusClass = isActive ? "status active" : "status inactive";
    const endLocalDate = subscription.expiresAt.toLocaleDateString("en-GB");

    return (
        <div className={"subscription-info dash-box"}>
            <h2>Моя подписка</h2>
            <p>Дата окончания: {endLocalDate}</p>
            <span className={statusClass}>{isActive ? "Активна" : "Неактивна"}</span>
        </div>
    )
}

export default SubscriptionInfo;