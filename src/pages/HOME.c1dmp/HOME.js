// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import wixData from 'wix-data';
import {memory} from 'wix-storage';
import wixLocation from 'wix-location';

$w.onReady(async function () {

	$w('#skillTags').onChange((event) => {
		let selectedSkill = event.target.value;
		memory.setItem("skill", selectedSkill);
		wixLocation.to("/projectslist");
	});

	let topSkills = await wixData.query("Projects").distinct("technologyUsed");
	let tagsJson = [];
	
	for (let i = 0; i < topSkills.items.length; i++) {
		let tag = {
			"label": topSkills.items[i],
			"value": topSkills.items[i]
		};
		tagsJson.push(tag);
	}
	$w('#skillTags').options = tagsJson;

});

