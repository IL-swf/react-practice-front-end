## To Do App

Once you have generated a new React application with **create-react-app**, start building out each component.

Make sure you have your browser and browser console open to see your progress as you work through the application.

**Important**: You should check your app in the browser frequently to quickly address issues as they appear. It's FAR easier to troubleshoot one error at a time, than 2+.

To start building more fluency, you'll be building a "To Do" App by working through component specifications:

* **App**: Your top-most parent component.

* **TodoCreator**: Creates new items for the To Do list

* **Items**: Renders all Item components

* **Item**: A single item has: edit, mark complete, and delete.

* **UpdateItem (BONUS)**: Rendered in Item component when user is trying to edit.

Read through all the component specs and diagram the app before building it.

Submit your diagram to the class when complete.

---------- App Component ----------
Purpose:

Main container for your To Do Application
State Object:

Inititial State Object: Empty <Array> items:
Items Array is Populated with data From API
Props:

N/A
API Calls:

GET http://localhost:3001/api/items (Get all To Do items from the API)
Render:

HTML div:
Encloses everything else.
TodoCreator component
Items component:
Goes under the TodoCreator component
(Remember to import your child components!)
---------- TodoCreator Component ----------
Purpose:

Sends a request to the api to create a new item record
After succesfully adding an item to the API, gets the latest list of items from the API and updates the App state.
State Object:

<String> userInput
Props:

Function from App component to update its items array
API Calls:

POST http://localhost:3001/api/items, Body example: { content: "example content" } (Adds a new To Do item to the API, NOTE: "id" and "completed" properties will be given default values.)
Render:

HTML Div to enclose everything
HTML Input Box:
For the user to type in a new To Do Item.
HTML Button (text "Add Item"), when clicked:
Triggers an AJAX call to add a new To Do item record to the API, based on the text from the input box.
Data to send in POST request should look something like this {content: 'Feed the cats'}
On successful POST request, another request is made to GET the latest list of items from the API.
Updates the state in App Component with the latest items from the API. You will need to pass a function from the App Component down as props.
---------- Items Component ----------
Purpose:

Recieves the Items array as props.
Renders an Item component for each element in item array, passing in details from the item element to the Item component as props
State Object:

N/A
Props:

<Array> items
API Calls:

N/A
Render:

HTML UL to enclose everything
Item Component for each element in the items array.
---------- Item Component ----------
Purpose:

Recieves a single item from the items array as a prop.
Renders the content from the item prop, along with a checkbox and a delete button
State Object:

N/A
Props:

<Object> item:
<id> id,
<String> content,
<Boolean> completed,
(Example: {id: 1, content: "feed more cats", completed: false})

API Calls:

DELETE http://localhost:3001/api/items/:id (Deletes Item in API by id)
PATCH http://localhost:3001/api/items/:id, Body example { completed: true } (Updates Item in API by id)
Render:

HTML LI, /w nested elements:
HTML - Span (<span>Your Item Content Props</span>)
Displays item content if its "completed" item props is false, otherwise
Displays item content above in <del></del>, if it's completed property is true, see here
HTML - Input (Checkbox Type), checked value is based on "completed" item props, on change event:
Sends PATCH request to API with the item id in the request path,
Request body should look something like {completed: status} where status is either true or false.
Then sends GET request for latest records of all items and updates the App component state with those latest items.
Example of checkbox
HTML Button, for delete - on click:
Sends DELETE request to API with the item id in the request path
Then sends GET request for latest records of all items and updates the App component state with those latest items.
BONUS: HTML Button, for edit - on click:
Displays UpdateItem component when clicked
---------- UpdateItem Component (OPTIONAL BONUS) ----------
Purpose:

When Item component edit button is clicked:
Replaces the item content that is displayed with an input box (text type) filled in with the current item content
Replaces the edit button with a save button
When the save button clicked,
the item content is replaced by the input box value, API call made
then GET request made to update App component items array.
Goes back to displaying item content, and edit button
API Calls:

PATCH - http://localhost:3001/api/items/:id
Optional Bonus Advanced Tasks
Refactor your AJAX calls in to re-usable helper functions

Add some css styling

Implement basic caching, store the data from an initial GET request, and return that on subsequent calls, unless other calls are made. Note this strategy only works for a single client but the basic concepts still apply in more advanced situations.

Update your code to move away from Class components altogether, and use React Hooks  instead.