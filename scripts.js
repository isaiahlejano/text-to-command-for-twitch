const client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    
    // Send CAP (optional), PASS, and NICK messages
});

client.connect('ws://irc-ws.chat.twitch.tv:80');
// test