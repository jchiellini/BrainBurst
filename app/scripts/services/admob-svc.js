"use strict";

angular.module('app')
  .factory('admob', [function() {

    //ios bottom banner: ca-app-pub-4039165012941331/1449765407
    //ios big banner: ca-app-pub-4039165012941331/2786897801

    //android bottom banner: ca-app-pub-4039165012941331/4403231801
    //android big banner: ca-app-pub-4039165012941331/5740364209


    var admob = {};

    admob.initAd = function(){
      if ( window.plugins && window.plugins.AdMob ) {
        var ad_units = {
          ios : {
            banner: 'ca-app-pub-4039165012941331/1449765407',
            interstitial: 'ca-app-pub-4039165012941331/2786897801'
          },
          android : {
            banner: 'ca-app-pub-4039165012941331/4403231801',
            interstitial: 'ca-app-pub-4039165012941331/5740364209'
          },
          wp8 : {
            //NOT MINE
            banner: 'ca-app-pub-6869992474017983/8878394753',
            interstitial: 'ca-app-pub-6869992474017983/1355127956'
          }
        };
        var admobid = "";
        if( /(android)/i.test(navigator.userAgent) ) {
          admobid = ad_units.android;
        } else if(/(iphone|ipad)/i.test(navigator.userAgent)) {
          admobid = ad_units.ios;
        } else {
          admobid = ad_units.wp8;
        }

        window.plugins.AdMob.setOptions( {
          publisherId: admobid.banner,
          interstitialAdId: admobid.interstitial,
          bannerAtTop: false, // set to true, to put banner at top
          overlap: false, // set to true, to allow banner overlap webview
          offsetTopBar: false, // set to true to avoid ios7 status bar overlap
          isTesting: true, // receiving test ad
          autoShow: true // auto show interstitial ad when loaded
        });

        registerAdEvents();

      } else {
        console.log( 'admob plugin not ready' );
      }
    };

    admob.createBannerAd = function(){
      window.plugins.AdMob.createBannerView();
    };

    admob.removeBannerAd = function(){
      window.plugins.AdMob.destroyBannerView()
    };

    admob.showBannerAd = function(){
      window.plugins.AdMob.showAd(true,function(){},function(e){alert(JSON.stringify(e));});
    };

    admob.hideBannerAd = function(){
      window.plugins.AdMob.showAd(false);
    };

    admob.createInterstitialAd = function(){
      window.plugins.AdMob.createInterstitialView();
    };

    admob.showInterstitialAd = function(){
      window.plugins.AdMob.showInterstitialAd(true,function(){},function(e){alert(JSON.stringify(e));});
    };

    return admob;
  }
]);
