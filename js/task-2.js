function formatMessage(message, maxLength) {
    if (message.length <= maxLength) {
        return message.slice(0);
    }
    else {
        return `${message.slice(0,maxLength)}...`;
    }
}