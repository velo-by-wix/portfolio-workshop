## JavaScript Web Modules

In this module, we'll create backend code and call it on our UI.

**:bulb: New concepts**
- [QR Code Generator](http://goqr.me/api/): API to generate QR Codes
- [JavaScript Web Modules](https://support.wix.com/en/article/corvid-web-modules-calling-server-side-code-from-the-front-end): Calling server-side code from the front-end
- [WixFetch](https://www.wix.com/corvid/new-reference/wix-fetch#top): Access third party REST APIs

**:white_check_mark: Step-by-Step Instructions**

### BACKEND

1. Let's add some backend code! **Under Site Structure > Backend, create a new file called _qrCode.jsw_**. Creating a JavaScript Web Module enables us to access our backend code in the frontend.

2. We can use Wix Fetch to call any REST API. In this case, let's use it to generate a QR Code using [QR Code Generator](http://goqr.me/api/).

3. Start by **importing fetch from the Wix Fetch API**.
```javascript
import {fetch} from 'wix-fetch';
```

4. Next we need to create a function that we can access on our UI. **Create an exported asynchronous function callwd _getSiteQrCode()_**. It takes in no parameters.
```javascript
export async function getSiteQRCode() {

}
```

5. We can define a constant to be the URL we want the QR code to point to. Once we go live with our site, we can replace this URL. For now, **create a constant that points to your LinkedIn page, GitHub Repo home, or other public page** you might want a recruiter to have access to.
```javascript
const qrCodeLink = "https://www.linkedin.com/in/meredith-hassett/";
```

6. We need to construct the URL for the QR Code REST API. The API has parameters for size and data, aka the URL we want to point to. **Create a variable for the Fetch URL with the Data parameter set to your link** that you created in the previous step.
```javascript
let fetchURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+qrCodeLink;
```

7. Last we can use the async await paradigm to fetch the QR Code image. Wix Fetch takes in a URL and options. Since we are just doing a get and don't need to set any headers, we can omit the options parameter. **Create a variable to fetch the QR image**.
```javascript
let qrCode = await fetch(fetchUrl);
```

8. And then we can **return the image** so they calling code can use it.
```javascript
return qrCode;
```

9. Our _qrCode.jsw_ file should look like this:
```javascript
import {fetch} from 'wix-fetch';

export async function getSiteQRCode(){
	const qrCodeLink = "https://www.linkedin.com/in/meredith-hassett/";
	let fetchUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+qrCodeLink;
	let qrCode = await fetch(fetchUrl);
	return qrCode;
}
```

### FRONTEND

10. Let's use this on our **Business Card** page.

11. We can **import our exported backend function** in our frontend like we do other Wix APIs. To access the backend code, traverse the site structure like so:
```javascript
import {getSiteQRCode} from 'backend/qrcode';
```

> This import/export relationship also works with code in your Public folder.

12. In our `onReady` function, we can call this function. Since it's asynchronous, let's use async await for the qrImage. **Create a variable for the image src that is returned from the _getSiteQrCode_ function**. Don't forget when using async await, we need to add the async keyword to our `onReady` callback.
```javascript
let qrImage = await getSiteQRCode();
```

13. Once the image src is returned, we can **set the image URL to the src property of the image on our UI**.
```javascript
$w('#qrImage').src = qrImage.url;
```

14. Our Busines Card Page Code should look similar to this:
```javascript
import {getSiteQRCode} from 'backend/qrcode';

$w.onReady(async function () {
	let qrImage = await getSiteQRCode();
	$w('#image1').src = qrImage.url;
});
```

:fast_forward: Next Module => [Let's go live!](PRODUTION.md)   
