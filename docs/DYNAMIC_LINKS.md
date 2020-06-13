## Enable Dynamic Linking

In this module, we'll create dynamic links from the overall list of projects to each project's page.

**:bulb: New concepts**
- $w('#element'): [Wix's UI Element Selector API](https://www.wix.com/corvid/new-reference/$w#top)

**:white_check_mark: Step-by-Step Instructions**

1. We need to make sure that each item in the repeater links to it's corresponding project page. We can do this use the element selector API to work with the repeater and components in the repeater.

2. In the IDE, we need to start by iterating through the repeater once the Data items are ready. We can use the [Repeater onItemReady() method](https://www.wix.com/corvid/new-reference/$w/repeater/onitemready). **Add this** to your code _inside the $w.onReady function_ to make sure the page is loaded before we start interacting with elements.
```javascript
$w('#projectsRepeater').onItemReady()
```

3. `onItemReady` takes in an event handler which will enable use to work with each individual UI item and the data in the repeater. Let's create the event handler:
```javascript
$w('#projectsRepeater').onItemReady( ($item, itemData) => {});
```

4. `$item` allows us to work with a selected item inside the repeater like we would with `$w`. `itemData` provides us with the specific data we are currently populating in that `$item`.

5. We can then use `$item('#container')` to make the whole project container clickable and have it navigate to the appropriate project page. In order to this, we'll need to import the Wix Location API again. At the top of your code, **add an import statement for Wix Location**.
```javascript
import wixLocation from 'wix-location';
```

6. Back inside the event handler for `onItemReady`, let's start working on the `onClick` event. To access the container insider the event handler, we use `$item` instead of `$w`. **Add an `onClick` event to the container.**
```javascript
$item('#container').onClick((event) => {});
```

7. We can use Wix Location inside the `onClick` event to navigate to the project's individual page. **Using `wixLocation.to()`, navigate to the specific project page**. Make sure to use `encodeURIComponent` incase their are reserved URI characters in the project name.
```javascript
wixLocation.to("/projects/"+encodeURIComponent(itemData.title));
```

> If you need to find your URL path, on the Page Settings, go to the Page Info tab to find the URL pattern.

8. Your navigation code should similar to this:
```javascript
$w('#projectsRepeater').onItemReady(($item, itemData)=>{
	$item('#projectContainer').onClick((event) =>{
	   wixLocation.to("/projects/"+encodeURIComponent(itemData.title));
	});
});
```

:fast_forward: Next Module => [Create a custom filter](CUSTOM_FILTER.md)
