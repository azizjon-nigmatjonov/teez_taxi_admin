import mqtt from 'mqtt'

export const useWebsocket = () => {
    const webOptions = {
        clean: true,
        connectTimeout: 4000,
        host: "tb5e5171.ala.asia-southeast1.emqxsl.com",
        // clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
        username: "teeztaxi",
        password: "XFUdQkqH5FG2GMA",
    };
    
    // Connect to the broker
    const client = mqtt.connect('wss://tb5e5171.ala.asia-southeast1.emqxsl.com:8084/mqtt', webOptions);

    
    // Handle connection
    client.on("connect", function () {
        console.log("Connected");
        client.subscribe("teeztaxi__call_answered", function (err) {
            if (!err) {
                console.log("Subscribed to teeztaxi__call_answered");
            } else {
                console.error("Subscription error:", err);
            }
        });
    });
    
    client.on("message", function (topic, message) {
        console.log(topic, message.toString());
        // window.location.href = `${window.location.origin}/dispatch/create?phone=${message.toString()}`;
    });
    
    // Handle connection errors
    client.on("error", function (err) {
        console.error("Connection error:", err);
    });
    
  return { result: 'web' };
};
