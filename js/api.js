var connection = Syncano({
  apiKey: API_KEY,
  defaults: {
    instanceName: INSTANCE_NAME
  }
});
var query = { name: 'messages' };
var Channel = connection.Channel;
var poll = Channel.please().poll(query);

var api = {
  'chat': {
    'poll': function(query, handleMessage) {
      poll.on('message', function(message) {
        handleMessage(message);
      });
    },
    'sendMessage': function(query, message) {
      return Channel.please().publish(query, message);
    },
    'getMessageHistory': function(query) {
      return Channel.please().history(query);
    }
  }
};
