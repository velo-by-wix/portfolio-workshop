// For full API documentation, including code examples, visit https://wix.to/94BuAAs
import { memory } from 'wix-storage';
import wixData from 'wix-data';
import wixLocation from 'wix-location';

$w.onReady(function () {

	$w('#projectsRepeater').onItemReady(($item, itemData) => {
		$item('#detailsAction').onClick((event) => {
			wixLocation.to("/projects/" + encodeURIComponent(itemData.title));
		});
	});

	let selectedSkill = memory.getItem("skill");
	if (selectedSkill) {
		$w('#selectedSkillText').text = selectedSkill;
		$w('#selectedSkillBox').expand();

		let filter = wixData.filter()
			.contains("technologyUsed", selectedSkill);
		$w('#projectsDataset').setFilter(filter)
			.then(() => {
				console.log("DONE")
			});
	}

});