// -- Medical Laboratory Test Results Interpreter -- //

Technologies Used:
React & JavaScript
ASP.NET MVC & C#
Bootstrap
Sass
CSS
HTML
Google Geocoding, JavaScript Maps, Places API's

This application allows the user to input data from their laboratory tests and recieve a presumtive diagnosis/list of conditions. The User will first be presented with the landing page as seen below. Here the user will be able to register and then login. There is a "Get Started" button to facilitate ease of use and efficient UX. The styling used here is designed to fit that of a clinical laboratory while maintaining professionalism. 

![Alt text](./Screenshots/LandingOne.png?raw=true "Landing, Top")

![Alt text](./Screenshots/LandingTwo.png?raw=true "Landing, Bottom")

![Alt text](./Screenshots/RegisterLanding.png?raw=true "Register Off-canvas")

![Alt text](./Screenshots/LoginLanding.png?raw=true "Login Off-canvas")

The user would then be sent to a laboratory test results input page where they would do the aforementioned. No understanding of these results is required. The user must only enter what they see on their laboratory results. The theme of this application is to give power to the patient/user and recieve an objective response regarding data to make decisions.

![Alt text](./Screenshots/BMPForm.png?raw=true "BMP Form, Top")

![Alt text](./Screenshots/CBCForm.png?raw=true "CBC, Bottom")

After entering their results, the user will be asked if they would like to submit multiple forms and proceed based on that action.

![Alt text](./Screenshots/FormModal.png?raw=true "Forms, Modal")

The user will be sent to the conditions component/page once they complete the previous step. They will be able to view the conditions that they are presumably facing based on their test results.

![Alt text](./Screenshots/Conditions.png?raw=true "Conditions")

You will be able to link conditions for viewing at later times that will be attached to the user's account. They are available to be seen in the left offcanvas as seen below.

![Alt text](./Screenshots/LinkedConditionsOC.png?raw=true "Linked Conditions")

Also, flagged results (with numerical feedback/displacement and high/low status) can be seen in the offcanvas on the right side, maintaining an easy-to-interpret and clean look to the component. You can see other necessary information such as the date and type of test.

![Alt text](./Screenshots/FlaggedConditionsOC.png?raw=true "Flagged results")

The account component allows the user to see all previous tests in accordions/dropdowns and has a map using Google API's (Geocoding, Places, Maps JS) to locate nearby healthcare facilities to the user's address. The user is not required to use this feature and will only generate the map upon entering those details.

![Alt text](./Screenshots/Account.png?raw=true "Account Once")

![Alt text](./Screenshots/NearbyHosp.png?raw=true "Nearby HF's")

![Alt text](./Screenshots/AccountTwo.png?raw=true "Account Two")

User's will have the ability to learn more in this next component where they can select a test area and view conditions within such a scope. Logging in is not required in this section.

![Alt text](./Screenshots/LearnMore.png?raw=true "Learn More")

![Alt text](./Screenshots/LearnMoreExpanded.png?raw=true "Learn More, Expanded")

Upon selecting a condition, the user will be brought to a page that highlights the targeted condition and gives them access to more details to view/read.

![Alt text](./Screenshots/LearnAboutTarget.png?raw=true "Learn About Target")

Note:
There is generally a delay from when lab results are released and providers relaying information as well as lapses in communication between numerical value correlation. This gives the patient the ability to directly see what conditions they would potentially be facing with high accuracy.

The frontend relies heavily on React and all of its constituents such as HTML and CSS. Sass and Bootstrap was used for stying along with CSS for customized components. ASP.NET MVC was used for the backend along with MSS (Microsoft Sequel Server).