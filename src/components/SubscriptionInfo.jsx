function SubscriptionInfo({subscription}) {
    const statusClass = subscription.isActive
        ? "subscription-info dash-box active"
        : "subscription-info dash-box inactive";

    return (
        <div className={statusClass}>
            <h3>Моя подписка</h3>
            <p>Статус подписки: {subscription.isActive
                ? "Активна"
                : "Неактивна"}
            </p>
            <p>Дата окончания подписки: {subscription.expiresAt}</p>        </div>
    )
}

export default SubscriptionInfo;