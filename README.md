

#### CONTRIBUTORS:

Alwayne Bailey                                                                                             

Alwayne.Bailey@georgebrown.ca

Kasper Pawlowski

Kasper.Pawlowski@georgebrown.ca


HOW TO RUN OUR CHAT APPLICATION:
1. install the dependencies in both 'backend' and 'frontend' folders by using the following command in each of them: npm install
2. run applications in both folders by using the following command in each of them: `npm start` from root 
3. open the browser and go to `http://localhost:3000/`
!

As MongoDB server is cloud hosted, to check events and chat history do the following:
1. open MongoDB Compass app
2. choose 'connect to' option
3. paste the following connection string: `mongodb+srv://baileyalo:A_ravas101@cluster0.kmauv.mongodb.net/test`
4. upon successful connection choose AlkaspChat database
5. check Events and History collections


Required queries were written in separate files that can be found in folder 'server/queries'.
To run them use the following command:
`node .\queries\retrieveEventLogs.js`
`node .\queries\retrieveChatHistory.js [-u user] [-r room]`

retrieveEventLogs.js returns to the console all the event logs
retrieveChatHistory.js returns to the console all chat history according to the given parameters. Both of them are optional.

i.e.
`node .\server\queries\retrieveChatHistory.js -u kasper` 
returns chat history from user kasper

or

`node .\server\queries\retrieveChatHistory.js -u Alwayne -r Developers` 
returns chat history from user Alwayne in chat Developers


####Technologies Used (-)

- MongoDB
- Express Js
- React
- Node Js
### Homepage
![image](https://user-images.githubusercontent.com/90293555/169351999-9bce5a98-2469-4720-a0af-d0b60ef42107.png)
