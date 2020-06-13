## Corvid Package Manager

In this module, we'll install NPM modules, like Twilio, to use in our application.

**:bulb: New concepts**
- [Package Manager](https://support.wix.com/en/article/corvid-managing-external-code-libraries-with-the-package-manager): Using NPM modules inside of Corvid

**:white_check_mark: Step-by-Step Instructions**

1. Install the **twilio** node module from the Package Manager.

> After the installation, you will see the new package under the node_modules section in the Site Structure panel.

2. Create a new jsw file by the name **textMe.jsw**.

3. Remove template code and import the twilio module at the top of the file.
```
import twilio from 'twilio';
```

4. Add variables for an Account SID and Auth Token which we will get in the next module when we sign up for a Twilio account.
```
const accountSID;
const authToken;
```

5. Stub out an async function called sendSms. Make sure to export it as we will need to access this function on the frontend.
```
export async function sendSms(messageBody) {

}
```

:exclamation: **In the next module, we will dive into creating a Twilio Account and the documentation on how to create a message.**


:fast_forward: Next Module => [Getting started with Twilio](TWILIO_START.md)    
