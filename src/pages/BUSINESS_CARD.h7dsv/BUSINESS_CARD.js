// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import { getSiteQRCode } from 'backend/qrcode';

$w.onReady(async function () {

	let qrImage = await getSiteQRCode();
	$w('#image1').src = qrImage.url;
	
});