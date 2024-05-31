// Event bubbling is a concept in JavaScript where an event triggered on a child element 
// propagates up to its parent elements. This means that when an event occurs on a nested element, 
// it first runs the handlers on that element,
// then on its parent, then up through its ancestors in the hierarchy, until it reaches the root of the document.

// Event capturing is just opposite of event bubbling.

// Event Delegation: Attaching a single event listener to a parent element instead of
//  multiple listeners to each child element.