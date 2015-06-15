"use strict";

angular.module('app')
  .factory('constants', ['$location', function($location) {
    // Might use a resource here that returns a JSON array

    var constants = {};

    // Some fake testing data
    constants.chats = {
      collection: [
        {
          id: 0,
          strategy:'offensive',
          name: 'Ben Sparrow',
          lastText: 'You on your way?',
          face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
        }, {
          id: 1,
          strategy:'defensive',
          name: 'Max Lynx',
          lastText: 'Hey, it\'s me',
          face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
        },{
          id: 2,
          name: 'Adam Bradleyson',
          lastText: 'I should buy a boat',
          face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
        }, {
          id: 3,
          name: 'Perry Governor',
          lastText: 'Look at my mukluks!',
          face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
        }, {
          id: 4,
          name: 'Mike Harrington',
          lastText: 'This is wicked good ice cream.',
          face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
        }
      ],
      all: function() {
        return constants.chats.collection;
      },
      remove: function(chat) {
        constants.chats.collection.splice(constants.chats.collection.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < constants.chats.collection.chats.length; i++) {
          if (constants.chats.collection[i].id === parseInt(chatId)) {
            return constants.chats.collection[i];
          }
        }
        return null;
      }
    };

    return constants;
  }
]);
