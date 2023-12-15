## ALKASP CHAT APP 

#### CONTRIBUTORS:

Alwayne Bailey                                                                                        
baileyalwayne@gmail.com

Kasper Pawlowski



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


#### Technologies Used :

- MongoDB
- Express Js
- React
- Node Js
#### Homepage:

![image](https://user-images.githubusercontent.com/90293555/169351999-9bce5a98-2469-4720-a0af-d0b60ef42107.png)


![image](https://user-images.githubusercontent.com/90293555/169358733-3812bfb6-7a8a-44b4-9448-a333baff3b6b.png)


![image](https://user-images.githubusercontent.com/90293555/169358897-79826ed4-0042-4e25-b589-240a14e5e9a0.png)


![image](https://user-images.githubusercontent.com/90293555/169359016-daa92948-5d36-4086-ab8a-2f22b33aa4f6.png)


#### Chat Logs:

![image](https://user-images.githubusercontent.com/90293555/169359416-9924f7c3-2b22-48a0-8097-5307306b896c.png)


![image](https://user-images.githubusercontent.com/90293555/169359506-ff7e41cc-98e8-4384-b4be-74ff6806744c.png)





