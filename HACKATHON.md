# ITV Winter Hackathon 2022 - X-Ray

We wanted to implement a version of the Amazon Prime X-Ray service, that overlays facts about the current episode on the video player, and see how this could factor into the ITV player.

## 📋 The plan
- Create a new react app with a simple user journey to a playing video
- Incorporate the itv fe-player to mimic the hub as much as possible
- Utilise data in subtitles to track who is on screen with timestamps
- Display some events over the video when paused, possibly pulled from other API sources

## 🤔 What we struggled with
- Getting the fe-player to work in a new project - we reverted to using a vanilla Shaka player and couldn't use ITV streams
- The subtitle files did not have as much info in as we expected, although other files do, we made some mock data instead

## 😃 What we enjoyed
- Some face-to-face collaboration! 🥳
- Catching up with other people from across ITV who had been thinking about similar things
- Working with framer
- Thinking about the commercial opportunities for this

## 🔮 Next steps / ideas
- Plan integration into the ITV
- Further investigate what is available / planned for ITV subtitles
- Look at image recognition pre-processing for videos so that APIs aren't called repeatedly
- Integrate social media reactions
- Integrate moods / themes
- Highlight key events / chapters

