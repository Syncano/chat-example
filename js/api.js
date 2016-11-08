var connection = Syncano({
  apiKey: '97599485fe954c2240b7a0a9cef092300c85fef7',
  defaults: {
    instanceName: 'spring-dream-1283'
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
