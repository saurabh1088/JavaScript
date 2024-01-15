// Event handling using addEventListener()
let buttonTrigerringEventUsingAddEventListener = document.getElementById("buttonTrigerringEventUsingAddEventListener");
buttonTrigerringEventUsingAddEventListener.addEventListener("click", eventHandlerForButtonTrigerringEventUsingAddEventListener);

function eventHandlerForButtonTrigerringEventUsingAddEventListener() {
  let targetForButtonTrigerringEventUsingAddEventListenerElement = document.getElementById("targetForButtonTrigerringEventUsingAddEventListener");
  targetForButtonTrigerringEventUsingAddEventListenerElement.textContent = "Handled event using addEventListener()";
}

// Event handling using object properties
let buttonTrigerringEventUsingObjectProperties = document.getElementById("buttonTrigerringEventUsingObjectProperties");
buttonTrigerringEventUsingObjectProperties.onclick = eventHandlerForButtonTrigerringEventUsingObjectProperties;

function eventHandlerForButtonTrigerringEventUsingObjectProperties() {
  let targetForButtonTrigerringEventUsingObjectProperties = document.getElementById("targetForButtonTrigerringEventUsingObjectProperties");
  targetForButtonTrigerringEventUsingObjectProperties.textContent = "Handled event using object properties";
}

// Inline event handlers - NOT RECOMMENDED
function eventHandledForButtonTrigerringEventUsingInlineEventHandler() {
  console.log("Executing eventHandledForButtonTrigerringEventUsingInlineEventHandler...")
  let targetForButtonTrigerringEventUsingInlineEventHandler = document.getElementById("targetForButtonTrigerringEventUsingInlineEventHandler");
  targetForButtonTrigerringEventUsingInlineEventHandler.textContent = "Handled event using HTML inline attribute.";
}
