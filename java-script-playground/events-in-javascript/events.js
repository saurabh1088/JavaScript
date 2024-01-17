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

parentContainerForEventBubbling.addEventListener("click", eventHandlerToCheckEventBubble);
childElementForEventBubbling.addEventListener("click", eventHandlerToCheckEventBubble);

function eventHandlerToCheckEventBubble(event) {
  console.log(event.currentTarget.tagName)
}