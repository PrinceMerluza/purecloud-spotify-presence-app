# PureCloud Spotify Presence App

A quick test project on updating a user's "What's on your mind" to the current track playing on their Spotify.

Demo:

[![Screenshot](https://i.imgur.com/LL4K0um.png)](http://www.youtube.com/watch?v=xZAe95AaD5s)

https://youtu.be/xZAe95AaD5s

App URL:

https://princemerluza.github.io/purecloud-spotify-presence-app/

Project Description

1. App is a custom-client widget added to the PureCloud instance.

2. Authorization required for both Purecloud and Spotify.

2. The user's presence message will automatically be updated based on the current track they're listening to. (Polled every 5 seconds)

TODO (aka probably won't be done)

1. App shoud check if current track is the same to limit calls to PureCloud Presence API.

2. Websockets instead of manual polling if Spotify ever implements it for their Web API.

3. Spotify Controls on the widget.

4. Take care of refreshing Spotify token (defaulted to 1 hour). Spotify does not support implicit grant to refresh the token.
