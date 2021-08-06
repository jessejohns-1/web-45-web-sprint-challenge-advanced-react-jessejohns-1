# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
State is an object owned by a component, so stateful components have state objects. Functional components are js components that have props objects.


2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is a lifecycle hook called before the initial render, and it is called before the component is updated.


3. Define stateful logic.
Stateful logic is any code that uses state, but in the case of hooks I would define it as a behaviour created with the use of one or more hooks. It's like a perk that you're adding to a component


4. What are the three step of creating a successful test? What is done in each phase?

STEP ONE:Arrange inputs and targets. Arrange steps should set up the test case. Does the test require any objects or special settings? Does it need to prep a database? Does it need to log into a web app? Handle all of these operations at the start of the test.
STEP TWO:Act on the target behavior. Act steps should cover the main thing to be tested. This could be calling a function or method, calling a REST API, or interacting with a web page. Keep actions focused on the target behavior.
STEP THREE:Assert expected outcomes. Act steps should elicit some sort of response. Assert steps verify the goodness or badness of that response. Sometimes, assertions are as simple as checking numeric or string values. Other times, they may require checking multiple facets of a system. Assertions will ultimately determine if the test passes or fails.