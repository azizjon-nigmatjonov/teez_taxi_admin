import mqtt from 'mqtt';

// Example configuration
const options: any = {
  protocol: 'wss',
  host: 'tb5e5171.ala.asia-southeast1.emqxsl.com',
  port: 8084,
  path: '/mqtt',  // Check if the server expects a specific path
  username: "teeztaxi",
  password: "XFUdQkqH5FG2GMA"
  // Additional options like username, password, etc. can be added here
};

const client = mqtt.connect(options);

client.on('connect', function () {
  console.log('Connected');
});

client.on('error', function (err) {
  console.error('Connection error:', err);
});

export default client