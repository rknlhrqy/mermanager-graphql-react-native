# mermanager-graphql-react-native
Merman manager mobile app developed using GraphQL and Prisma in the Back-end, and React Native, MobX and Apollo client in the front-end.<br>
<br>
# explanation
Merman manager is used to manage the merman in several predefined places. The user can add a new merman to a place. The user can remove a merman. The user can move a merman from one place to another place.<br>
A similar app can be found at https://github.com/rknlhrqy/mermanager. The difference is that the old mermanager is React + MobX in the front-end and Node.js + Express.js + MongoDB in the back-end. <br>
<br>
GraphQL provides a new way to access database remotely. It has one great advantage over the traditional way which is using Http messages and then accessing the database. GraphQL can access the database to get the exact data, not more not less. But the traditional way will normally over-retrieve data and pick up what really is needed from the retrieved data.<br>
<br>
To connect GraphQL server in the back-end to a database service, we need to Prisma.<br>
<br>
In the front-end, we need to use Apollo Client to communicate with GraphQL server in the back-end.<br>
<br>
# implementation
Merman manager is a mobile app running in a Android or iOS mobile device such as iphone or android phone. It is developed using React Native. I am using Expo tool to develop the app.<br>
<br>
Here are the components to implement:<br>
1, Use Expo tool to set up the front-end. (done)<br>
2, Set up GraphQL Server, Prisma, and Database in the Back-end. (done)<br>
3, Add MobX in the front-end. (done)<br>
4, Add Apollo Client in the front-end. (done)<br>
5, Add the mermen list which is generated by doing the query action via Apollo Client in the front-end. (done)<br>
6, Add the input form for users to add new merman via doing mutation action over Apollo Client in the front-end. (on the going)<br>
7, Add the functionality to remove a merman. (to be done)<br>
8, Add the functionality to move a merman to a different place. (to be done)<br>
<br>
# how to run it?
You need to install Node.js, Yarn, and expo-cli.<br>
You need to go insie the project folder and run "npm install" to install all needed npm modules.<br>
You need to go to the folder "server" and run "node src/index.js" to start the back-end at first. <br>
Then you just run "expo start".<br>
