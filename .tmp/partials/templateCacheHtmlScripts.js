angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("views/chat-detail.html","<ion-view view-title=\"{{chat.name}}\"><ion-content class=\"padding\"><img ng-src=\"{{chat.face}}\" style=\"width: 64px; height: 64px\"><p>{{chat.lastText}}</p></ion-content></ion-view>");
$templateCache.put("views/container.html","Container");
$templateCache.put("views/defensive.html","<ion-view view-title=\"defensive\"><ion-content class=\"padding\"><button class=\"button button-energized\" ng-click=\"cache.GoToState(\'home\')\">Back</button>Defensive</ion-content></ion-view>");
$templateCache.put("views/home.html","<ion-view view-title=\"Home\" ng-init=\"Init()\"><ion-content>HOME<ion-list><ion-item class=\"item-remove-animate item-avatar item-icon-right\" ng-class-even=\"\'energized\'\" ng-repeat=\"match in constants.chats.collection\" type=\"item-text-wrap\" ng-click=\"Confirm(match)\">{{match.name}} <i class=\"icon ion-chevron-right icon-accessory\"></i></ion-item></ion-list><button ng-click=\"admob.createBannerAd()\">create Ad</button></ion-content></ion-view>");
$templateCache.put("views/match_detail.html","<div>Match</div>");
$templateCache.put("views/offensive.html","<ion-view view-title=\"offensive\"><ion-content class=\"padding\"><button class=\"button button-energized\" ng-click=\"cache.GoToState(\'home\')\">Back</button>Offensive</ion-content></ion-view>");
$templateCache.put("views/tab-account.html","<ion-view view-title=\"Account\"><ion-content><ion-list><ion-toggle ng-model=\"settings.enableFriends\">Enable Friends</ion-toggle></ion-list></ion-content></ion-view>");
$templateCache.put("views/tab-chats.html","<ion-view view-title=\"Chats\"><ion-content><ion-list><ion-item class=\"item-remove-animate item-avatar item-icon-right\" ng-repeat=\"chat in chats\" type=\"item-text-wrap\" href=\"#/tab/chats/{{chat.id}}\"><img ng-src=\"{{chat.face}}\"><h2>{{chat.name}}</h2><p>{{chat.lastText}}</p><i class=\"icon ion-chevron-right icon-accessory\"></i><ion-option-button class=\"button-assertive\" ng-click=\"remove(chat)\">Delete</ion-option-button></ion-item></ion-list></ion-content></ion-view>");
$templateCache.put("views/tab-dash.html","<ion-view view-title=\"Dashboard\"><ion-content class=\"padding\"><div class=\"list card\"><div class=\"item item-divider\">Recent Updates</div><div class=\"item item-body\"><div>There is a fire in <b>sector 3</b></div></div></div><div class=\"list card\"><div class=\"item item-divider\">Health</div><div class=\"item item-body\"><div>You ate an apple today!</div></div></div><div class=\"list card\"><div class=\"item item-divider\">Upcoming</div><div class=\"item item-body\"><div>You have <b>29</b> meetings on your calendar tomorrow.</div></div></div></ion-content></ion-view>");
$templateCache.put("views/tabs.html","<ion-tabs class=\"tabs-icon-top tabs-color-active-positive\"><ion-tab title=\"Status\" icon-off=\"ion-ios-pulse\" icon-on=\"ion-ios-pulse-strong\" href=\"#/tab/dash\"><ion-nav-view name=\"tab-dash\"></ion-nav-view></ion-tab><ion-tab title=\"Chats\" icon-off=\"ion-ios-chatboxes-outline\" icon-on=\"ion-ios-chatboxes\" href=\"#/tab/chats\"><ion-nav-view name=\"tab-chats\"></ion-nav-view></ion-tab><ion-tab title=\"Account\" icon-off=\"ion-ios-gear-outline\" icon-on=\"ion-ios-gear\" href=\"#/tab/account\"><ion-nav-view name=\"tab-account\"></ion-nav-view></ion-tab><ion-tab title=\"Test\" icon-off=\"glyphicon glyphicon-star\" icon-on=\"ion-ios-gear\" href=\"#/tab/account\"><ion-nav-view name=\"tab-account\"></ion-nav-view></ion-tab></ion-tabs>");
$templateCache.put("views/partials/_modal.html","<div id=\"modal\" class=\"modal fade\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content {{cache.active_modal.id}}\"><div class=\"modal-header\"><div class=\"close-btn\" data-dismiss=\"modal\"><span aria-hidden=\"true\" ng-click=\"cache.ExitModal()\">&times;</span><span class=\"sr-only\">Close</span></div><div class=\"table_container\" ng-if=\"cache.active_modal.id === \'settings\'\"><div class=\"table_cell\" ng-repeat=\"tab in cache.active_modal.tabs\"><div class=\"tab\" ng-class=\"{\'selected\':cache.selected_tab === tab.id }\" ng-click=\"cache.selected_tab = tab.id;\"><span>{{tab.label}}</span></div></div></div><div ng-if=\"cache.active_modal.id != \'settings\'\"><span class=\"modal-title prima_nova_bold\">{{cache.active_modal.label}}</span></div></div><div ng-include=\"cache.modal_content\"></div></div></div></div>");
$templateCache.put("views/partials/confirmation-modal.html","<div><div class=\"question\"><span>{{cache.active_modal.question}}</span></div><ul class=\"list-inline\"><li><button class=\"button button-stable\" ng-click=\"cache.active_modal.cancel.callback();\" data-dismiss=\"modal\"><span>{{cache.active_modal.cancel.label}}</span></button></li><li><button class=\"button button-royal\" ng-click=\"cache.active_modal.success.callback();\" data-dismiss=\"modal\"><span>{{cache.active_modal.success.label}}</span></button></li></ul></div>");
$templateCache.put("views/partials/cut_the_wire.html","<div>Cut The Wire</div>");
$templateCache.put("views/partials/shop.html","<div>Shop</div>");}]);