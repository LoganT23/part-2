function Tweet ({username, date, message,name}) {
    return (
<div className="tweet">
    <span>{name}</span>
    <span className="username">{username}</span>
    <span className="date">{date}</span>
    <p>{message}</p>
</div>
    );
}