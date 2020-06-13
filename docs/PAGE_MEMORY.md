## Explore page memory

In this module, we'll use Wix Storage API to store data in the user's browser.

**:bulb: New concepts**
- [WixStorage](https://www.wix.com/corvid/new-reference/wix-storage#top): Store data in the user's browser

**:white_check_mark: Step-by-Step Instructions**

1. We want to be able to share information across pages, like which filter choice was selected from the Home page on the Projects List page. We can use Wix Storage to accomplish this.
2. On the Home page, **import the memory storage type from the Wix Storage API**.
```
import {memory} from 'wix-storage';
```
3. Memory is the shortest time to live type of storage, but will be sufficient for what we want to accomplish.
4. We want to capture which Skill Tag was selected and then pass it to the Project List page. We can use the **Selection Tag UI Element's `onChange()` event** to recognize a selection. Create the `onChange()` event inside the `$w.onReady()` function.
```
$w('#skillTags').onChange((event) => {});
```
5. During the `onChange` event, we can set the memory storage to include the item selected. We can use the event's target property to access the Value or Label of the tag. **Create a new variable and set it's value to the selected tag's Value**.
```
let selectedSkill = event.target.value;
```
6. Now that we have the Value of the selected tag, we can store it in memory so we can access its value on a new page. Use the **memory's `setItem()` method to store a value**. This method takes in a name for the item and it's value.
```
memory.setItem("skill", selectedSkill);
```
7. Last, we can navigate to the Project List page to apply the filter we've selected. We'll need to **import the Wix Location API** again on the Home page level code.
```
import wixLocation from 'wix-location';
```
8.  In the `onChange` event for the Skills tag, we need to move to the Project list page. **Use the Wix Location `to()` method to navigate to your project list page.** If you need to find the URL pattern for your project list page, you can alway check the Page Settings.
```
wixLocation.to("/projectslist");
```
9. Your Home page should have an `onChange` event for your skill tags list that looks something like this:
```
$w('#skillTags').onChange((event) => {
		let selectedSkill = event.target.value;
		memory.setItem("skill", selectedSkill);
		wixLocation.to("/projectslist");
	});
```


:fast_forward: Next Module => [Access page memory](PROJECT_MEMORY.md)
