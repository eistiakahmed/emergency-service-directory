### 6. Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?


### Answer:
1. getElementById() only the specific element with the given id is returned. It always gives a single element if the id exists, otherwise it returns null.getElementsByClassName() returns all elements with that className, and it gives them in the form of an HTMLCollection. It’s not an array, but an array-like object, So I can loop through it .querySelector() returns the first element that matches the given CSS selector.querySelectorAll() returns all elements that match the given CSS selector in the form of a NodeList, which is also an array-like object.getElementById always returns a single element or null, but getElementsByClassName and querySelectorAll always return list-type objects.

2. If I want to create a new element in the DOM, first I need to declare a variable. Then, using document.createElement() with parentheses, I pass a string representing the HTML tag I want to create.if I want to create a <div>, I would write "const div = document.createElement("div");" next, I select the parent element where I want to place the new element, and use appendChild() to insert the new element into the parent. This way, the element is successfully added to the DOM.

3. Event Bubbling is when an event occurs on an element, it is first handled by that element and then gradually moves up to its parent elements. suppose I have a button. When I click the button, the event is first handled by the button. Then the event moves up to the parent <div>, and then to higher parent elements.Using Event Bubbling, I can easily determine which element is inside which parent, which element is a child of which parent, and where the event started. This is how Event Bubbling works.

4. Event Delegation is when we attach an event listener to a parent element and it can handle events for all the child elements of that parent. This means we don’t need to attach separate event listeners to each child element. if a parent <div> has many buttons, we can attach a listener just to the parent <div>, and it will handle clicks for all the buttons—even for buttons added later dynamically. The reason for using Event Delegation is that we don’t need to add extra event listeners for many child elements, which improves performance. It also allows handling dynamic elements easily, requires less code, and makes the code more readable.

5. The work of preventDefault() is when data is given in an input field inside a form and then the submit button is clicked the browser auto reloads. To stop this preventDefault() is used. The work of stopPropagation() is so that the event does not bubble and give all the information. For example, I am now in Bangladesh, Dhaka, my house, my room. If I only want to know that I am inside the room then I will use stopPropagation(). When I only need that one piece of information, this is used to stop bubbling.