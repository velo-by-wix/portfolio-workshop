## Using Twilio in Corvid

In this module, we will use the Twilio API in our Corvid code.

**:white_check_mark: Step-by-Step Instructions**
1. Now that our Twilio credentials have been created and set, we can start using them to send an SMS.
2. In your _textMe.jsw_ file, let's update the **sendSms** function to create a new twilio client. The twilio module requires your accountSID and authToken to create a new client. We can **create a variable called client that creates a new instance of Twilio that takes in the accountSID and authToken parameters**.
```
const client = new twilio(accountSid, authToken);
```
3. We can then use that `client` to create a new message with the Twilio API. The Twilio Messsage Create method takes in a JSON object with 3 fields: body, to, and from. **Stub out the Twilio message create lik this:**
```
client.messages.create({
  to,
  from,
  body
});
```
4. The `create()` method is an asynchronous method, so let's use the async await paradigm here.
```
await client.messages.create(...)
```
5. Now we need to pass in a to and from phone number. The **from phone number must be a verified Twilio Number** like the one you created in the last module. **Set `from` in the JSON to be your Twilio Number.**
```
from: twilioNumber
```
6. Since this is your Portfolio site, it makes sense that the **to number should be your personal number**. This way if anyone wants to reach out, you will be directly contacted. Set the **`to` JSON field to your personal number**.
```
to: '+14155555555' // your personal number goes here but make sure you include the Country Code like +1
```
7. The last parameter we need is the text message body. If you noticed on the UI, we have an input form in the footer. We'll look at how to pass those values to this function in the next steps, but for now we want our `sendSms()` function to take in a `messageBody` parameter which we will use as the body of the Twilio message. **Set the `body` JSON field to the `messageBody` parameter passed into the function.**
```
body: messageBody
```
8. Your backend code for _sendSms_ should look something like this:
```
export async function sendSms(messageBody) {
	const client = new twilio(accountSid, authToken);

	const message = await client.messages.create({
		to: '+14155555555',
		from: myTwilioNumber,
    body: messageBody
	})
}
```
9. Go back to your **Home** page, and click **Site Code** in the IDE on the bottom of the page.
10. Since we exported the _sendSms_ function, we can access it on our frontend. **Import the sendSms function** like you import other Wix APIs.
```
import {sendSms} from 'backend/textMe';
```
11. When a user fills out and submits our contact form, we want to capture the values they entered and use them to build out our text message body. **Create an onClick function for the form submit button**. You can do this manually or by using the Events in the Properties Pane.
```
export function formSubmit_click(event){

}
```
12. In the `onClick` event, **retrieve the values from the form elements** using the `$w('#id')` selector API. **Create variables for each of the input field's values.**
```
let contactName = $w('#nameInput').value;
let contactEmail = $w('#emailInput').value;
let message = $w('#messageInput').value;
```
13. Let's **use these values to construct a message**. Feel free to build out the message how you would like! You can use the string constructor with '+' or template the string.
```
let text = contactName + " would like talk to you! Here's what they have to say: " + message + " - Reply to them at " + contactEmail;
```
14. And then we need to **pass in the text message to the _sendSms_ function** to actually send our text!
```
sendSms(text);
```
15. Our UI `onClick` should look similar to this:
```
export function formSubmit_click(event) {
  let contactName = $w('#nameInput').value;
  let contactEmail = $w('#emailInput').value;
  let message = $w('#messageInput').value;
  let text = contactName + " would like talk to you! Here's what they have to say: " + message + " - Reply to them at " + contactEmail;
  sendSms(text);
}
```


:fast_forward: Next Module => [Go Live](PRODUCTION.md)  
