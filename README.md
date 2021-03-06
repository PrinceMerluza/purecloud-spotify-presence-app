# PureCloud Spotify Presence App

A quick test project on updating a user's "What's on your mind" to the current track playing on their Spotify.

#### Demo:

[![Screenshot](https://i.imgur.com/LL4K0um.png)](http://www.youtube.com/watch?v=xZAe95AaD5s)

https://youtu.be/xZAe95AaD5s

#### App URL:

https://princemerluza.github.io/purecloud-spotify-presence-app/

#### Project Description

1. App can be run stand-alone or as a custom-client widget added to the PureCloud instance.

2. Authorization required for both Purecloud and Spotify.

2. The user's presence message will automatically be updated based on the current track they're listening to. (Polled every 2 seconds)

#### TODO (aka probably won't be done)

1. Websockets instead of manual polling if Spotify ever implements it for their Web API.

2. Spotify Controls on the widget.

3. Take care of refreshing Spotify token (defaulted to 1 hour). Spotify does not support implicit grant to refresh the token.

4. Change flair backgroud color based on playback status.

5. Add artist name to the status message.

#### Known Bugs

1. After PureCloud implicit grant, it will sometimes fail to go to the Spotify app page.

* Workaround: Click button to clear settings saved on local storage then refresh page.

2. (If run as a widget) After clicking 'Login to Spotify' it shows show a blank page.

* Workaround: This has something to do with the X-Frame setting from Spotify. Install a chrome plugin called 'Iframe-Allow' to allow you to login and authorize from Spotify OR just run the straight from a different browser tab.

#### Credits

PureCloud SDK: https://github.com/MyPureCloud/platform-client-sdk-javascript

Spotify Web API Library: https://github.com/jmperez/spotify-web-api-js
