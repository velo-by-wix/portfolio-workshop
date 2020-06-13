## Create a custom filter

In this module, we'll use data in the database to create a custom filter-set list.

**:bulb: New concepts**
- [WixData](https://www.wix.com/corvid/new-reference/wix-data#top): Interacting directly with a database collection

**:white_check_mark: Step-by-Step Instructions**

1. Back on the Home page, it's time to fill in the Skills Tag list with your skills from your database. This way, every time you add a new project, the skills list will update.

2. We'll need to use the Wix Data API to query the database and create a distinct list of all the technologies used.

3. Wix Data queries are asynchronous, so we'll need to make our `onReady` an async function. **Add the `aysnc` keyword in front of the function declaration in the `onReady` event.**

4. Next define a variable called `topSkills` inside the `onReady` event.
```javascript
let topSkills;
```
5. We'll use `topSkills` to hold our query results. Let's **build a Wix Data query** on the **Projects** collection you created earlier. We're using the async-await syntax.
```javascript
let topSkills = await wixData.query("Projects");
```

6. Once you start a Wix Data Query, you can build out more complex filtering or matching, and then run the query using a couple of different functions like `find()`. However in this case, we want a distinct list of Technologies Used across all our projects, so we'll actually want to execute the query using `distinct()`. Distinct takes in a parameter of the field we want the distinct values for.

7. Let's **execute our query using the `distinct("parameter")` method** on the **Technology Used tag field** we created in our database.
```javascript
let topSkills = await wixData.query("Projects").distinct("technologyUsed");
```

8. This will return our distinct list of technologies which we can now use in our skills tag List. However, before we can attach the data to the tag List, we do have to reconstruct it to match the accepted data type for our UI element.

9. **Define a new array** that will our data objects for our tag list element.
```javascript
let tagsJson = [];
```

10. We have to iterate through all the items in the topSkills list. **Create a `for` loop** to do so**.
```javascript
for(let i = 0; i < topSkills.items.length; i++) {

}
```

11. For each skill, we need to create a label-value pairing to work with the tag list. **Create a json label value object** for each item, and then **push it to the `tagsJson` variable**.
```javascript
let tag = {
	"label": topSkills.items[i],
	"value": topSkills.items[i]
};
tagsJson.push(tag);
```

12. Lastly, we need to **update the tag list's options** to be the newly constructed `tagsJson`.
```javascript
$w('#skillTags').options = tagsJson;
```

13. Your code should look similar to this:
```javascript
import wixData from 'wix-data';

$w.onReady(async function () {

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
```

:fast_forward: Next Module => [Explore page memory](PAGE_MEMORY.md)
