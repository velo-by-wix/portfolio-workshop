import wixLocation from 'wix-location';
import {sendSms} from 'backend/textme';

export function titleText_click(event) {
	wixLocation.to("/");
}

export function formSubmit_click(event) {
	let contactName = $w('#nameInput').value;
    let contactEmail = $w('#emailInput').value;
    let message = $w('#messageInput').value;
    let text = contactName + " would like talk to you! Here's what they have to say: " + message + " - Reply to them at " + contactEmail;
    sendSms(text);
}