// =====================================================================================================================
// Event handling using addEventListener()
let buttonTrigerringEventUsingAddEventListener = document.getElementById("buttonTrigerringEventUsingAddEventListener");
buttonTrigerringEventUsingAddEventListener.addEventListener("click", eventHandlerForButtonTrigerringEventUsingAddEventListener);

function eventHandlerForButtonTrigerringEventUsingAddEventListener() {
  let targetForButtonTrigerringEventUsingAddEventListenerElement = document.getElementById("targetForButtonTrigerringEventUsingAddEventListener");
  targetForButtonTrigerringEventUsingAddEventListenerElement.textContent = "Handled event using addEventListener()";
}

   
// =====================================================================================================================
// Event handling using object properties
let buttonTrigerringEventUsingObjectProperties = document.getElementById("buttonTrigerringEventUsingObjectProperties");
buttonTrigerringEventUsingObjectProperties.onclick = eventHandlerForButtonTrigerringEventUsingObjectProperties;

function eventHandlerForButtonTrigerringEventUsingObjectProperties() {
  let targetForButtonTrigerringEventUsingObjectProperties = document.getElementById("targetForButtonTrigerringEventUsingObjectProperties");
  targetForButtonTrigerringEventUsingObjectProperties.textContent = "Handled event using object properties";
}

// =====================================================================================================================
// Inline event handlers - NOT RECOMMENDED
function eventHandledForButtonTrigerringEventUsingInlineEventHandler() {
  console.log("Executing eventHandledForButtonTrigerringEventUsingInlineEventHandler...")
  let targetForButtonTrigerringEventUsingInlineEventHandler = document.getElementById("targetForButtonTrigerringEventUsingInlineEventHandler");
  targetForButtonTrigerringEventUsingInlineEventHandler.textContent = "Handled event using HTML inline attribute.";
}

// =====================================================================================================================
// Event Objects
let buttonTrigerringEventHandledByMethodExploringEventObjects = document.getElementById("buttonTrigerringEventHandledByMethodExploringEventObjects");
buttonTrigerringEventHandledByMethodExploringEventObjects.addEventListener("click", eventHandlerExploringEventObject);

function eventHandlerExploringEventObject(event) {
  console.log("Here's the event object received...")
  console.log(event)
}

// =====================================================================================================================
// Preventing Default Behaviour
let formToTryPreventingDefaultBehaviour = document.getElementById("formToTryPreventingDefaultBehaviour");
let coolNameElement = document.getElementById("coolName");
let teamElement = document.getElementById("team");

formToTryPreventingDefaultBehaviour.addEventListener("submit", (event) => {
  if (coolNameElement.value === "" || teamElement.value === "") {
    event.preventDefault();
    console.log("Event listener on form");
    let messageForFormSubmitionElement = document.getElementById("messageForFormSubmition");
    messageForFormSubmitionElement.textContent = "You need to input some values to proceed!"
  }
});

// =====================================================================================================================
// Event bubbling
let parentContainerForEventBubbling = document.getElementById("parentContainerForEventBubbling");
let childElementForEventBubbling = document.getElementById("childElementForEventBubbling");

parentContainerForEventBubbling.addEventListener("click", eventHandlerForClickEventForParent);
childElementForEventBubbling.addEventListener("click", eventHandlerForClickEventForChild);

function eventHandlerForClickEventForParent(event) {
  console.log("Handling event for parent element")
  console.log(event.currentTarget.tagName);
}

function eventHandlerForClickEventForChild(event) {
  console.log("Handling event for child element")
  console.log(event.currentTarget.tagName);
}

let parentContainerForEventBubblingStopPropagation = document.getElementById("parentContainerForEventBubblingStopPropagation");
let childElementForEventBubblingStopPropagation = document.getElementById("childElementForEventBubblingStopPropagation");

parentContainerForEventBubblingStopPropagation.addEventListener("click", eventHandlerForClickEventForParentWhenChildHandlingStopPropagation);
childElementForEventBubblingStopPropagation.addEventListener("click", eventHandlerForClickEventForChildWithStopPropagation);

function eventHandlerForClickEventForParentWhenChildHandlingStopPropagation(event) {
  console.log("Handling event for parent element")
  console.log(event.currentTarget.tagName);
}

function eventHandlerForClickEventForChildWithStopPropagation(event) {
  console.log("Handling event for child element")
  event.stopPropagation();
  console.log(event.currentTarget.tagName);
}

// =====================================================================================================================
// Event capture

let parentContainerForEventCapture = document.getElementById("parentContainerForEventCapture");
let childElementForEventCapture = document.getElementById("childElementForEventCapture");

/*
If addEventListener is used like below then this example will result in normal bubbling behaviour. So when button is tapped
then it will print out below output on console :

Handling event for child element
BUTTON
Handling event for parent element
DIV

parentContainerForEventCapture.addEventListener("click", eventHandlerForClickEventForParentWithCapture);
childElementForEventCapture.addEventListener("click", eventHandlerForClickEventForChildWithCapture);

However if for parent, in addEventListener we pass capture as true then the behaviour of event capture will be observed and
output will come like below :

Handling event for parent element
DIV
Handling event for child element
BUTTON
*/

parentContainerForEventCapture.addEventListener("click", eventHandlerForClickEventForParentWithCapture, { capture: true });
childElementForEventCapture.addEventListener("click", eventHandlerForClickEventForChildWithCapture);

function eventHandlerForClickEventForParentWithCapture(event) {
  console.log("Handling event for parent element")
  console.log(event.currentTarget.tagName);
}

function eventHandlerForClickEventForChildWithCapture(event) {
  console.log("Handling event for child element")
  console.log(event.currentTarget.tagName);
} 