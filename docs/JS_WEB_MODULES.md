## JavaScript Web Modules

In this module, we'll create backend code and call it on our UI.

**:bulb: New concepts**
- [QR Code Generator](http://goqr.me/api/): API to generate QR Codes
- [JavaScript Web Modules](https://support.wix.com/en/article/corvid-web-modules-calling-server-side-code-from-the-front-end): Calling server-side code from the front-end
- [WixFetch](https://www.wix.com/corvid/new-reference/wix-fetch#top): Access third party REST APIs

**:white_check_mark: Step-by-Step Instructions**

1. Let's add some backend code! **Under Site Structure > Backend, create a new file called _qrCode.jsw_**. Creating a JavaScript Web Module enables us to access our backend code in the frontend.
2. We can use Wix Fetch to call any REST API. In this case, let's use it to generate a QR Code using [QR Code Generator](http://goqr.me/api/).
3. Start by **importing fetch from the Wix Fetch API**.
```
import {fetch} from 'wix-fetch';
```
4. Next we need to create a function that we can access on our UI. **Create an exported asynchronous function callwd _getSiteQrCode()_**. It takes in no parameters.
```
export async function getSiteQRCode() {

}
```
5. We can define a constant to be the URL we want the QR code to point to. Once we go live with our site, we can replace this URL. For now, **create a constant that points to your LinkedIn page, GitHub Repo home, or other public page** you might want a recruiter to have access to.
```
const qrCodeLink = "https://www.linkedin.com/in/meredith-hassett/";
```
6. We need to construct the URL for the QR Code REST API. The API has parameters for size and data, aka the URL we want to point to. **Create a variable for the Fetch URL with the Data parameter set to your link** that you created in the previous step.
```
let fetchURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+qrCodeLink;
```
7. Last we can use the async await paradigm to fetch the QR Code image. Wix Fetch takes in a URL and options. Since we are just doing a get and don't need to set any headers, we can omit the options parameter. **Create a variable to fetch the QR image**.
```
let qrCode = await fetch(fetchUrl);
```
8. And then we can **return the image** so they calling code can use it.
```
return qrCode;
```
9. Our _qrCode.jsw_ file should look like this:
```
import {fetch} from 'wix-fetch';

export async function getSiteQRCode(){
	const qrCodeLink = "https://www.linkedin.com/in/meredith-hassett/";
	let fetchUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+qrCodeLink;
	let qrCode = await fetch(fetchUrl);
	return qrCode;
}
```


:fast_forward: Next Module => [Corvid Package Manager](PACKAGE_MANAGER.md)   
