

# Real time web document editor

## **Technologies/Skills:**

**● FrontEnd:**
○ Websocket
○ Typescript
○ ReactiveX (rxjs)
○ Webpack
○ TSList
○ SystemJS (optional)
**● BackEnd:**
○ WebSocket
○ aiohttp, Python
○ Akka HTTP, Akka Streams, Scala

## **Description:**

Design and implement the system allowing users simultaneous editing of shared documents
(identified by random ID). While editing a document users see other user’s changes integrated
online (like in google docs editing). Also users should have ability to discuss the document with
other editors in a chat-like manner.

**Basic UCs:**
*User wants to create new document:*
● User visits main page e.g. www.rtwde.com
● User enters new document name
● User clicks ‘Create’ button
● User gets redirected to document page, e.g. www.rtwde.com/randomDocId
● User sees page with empty document and side panel with empty chat
● User sees random username in top of side panel with chat

*User wants to invite to created document:*
● User clicks ‘Get invitation link’ button
● User sees invitation link, e.g. www.rtwde.com/randomDocId
● User clicks `Copy` button for copy link to clipboard

*User wants to invite to created document (alternative UC):*
● User copies link from browser while viewing the document
User wants to edit document contents
● User navigates to document page by invitation link, e.g. www.rtwde.com/randomDocId
● User sees page with document (with text) and side panel with chat (with the last 10
messages)
● User sees random username in top of side panel with chat
● User places pointer into document body and changes text
○ During text changes the system saves them instantly
○ Another users see any changes on their copy of document instantly
User wants to send other users a message regarding the
document
● User places mouse pointer into chat sidebar message area
● User types message
● User clicks ‘Send’ button or presses ‘Ctrl+Enter’
○ System saves chat message
○ All users of document see sent message in sidebar chat area instantly

*User wants to change their username*
● User enters their own name in top of side panel with chat
○ System updates user’s username
○ Other users see changed username for all old messages user already sent
Technical requirements:
● All the communications should be done using one WebSocket for one opened document
● System needs to handle edit collisions:
○ Backend needs to reject changes that in can not merge
○ Frontend should provide user with option on resolving such conflicts
● For API validation Use JSON Schema:
https://git.bw-sw.com/education/websocket-task/blob/master/schema.json

**● Frontend:**
○ Should be written using RXJS for handling data flow (including communication)
○ Should be written in typescript
○ It’s allowed to use VueJS or Backbone as a framework
○ Code should be modular
○ Code should be built into bundle for production using webpack
○ Configure tslint to enforce some code style you think is good, e.g. all multiline
lists should have comma after last element. Describe your rules in solution
annotation
○ Optional (for those who interested in SystemJS) provide alternative index page
using SystemJS for loading modules
**● Backend:**
○ Sufficient store data (document, connected users, messages of chat) in
non-persistent memory