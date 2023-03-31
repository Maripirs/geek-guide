# ♟ Geek Guide ♟
##### By Maripi 
Live site down. Will redeploy soon

##  Getting Started 
Welcome to Geek Guide. User can choose any of the available games <br>
<br>
There are two ways to choose a game. From the home page or from the sidebar. Both of them have a search functionality that will update the games displayed as the value changes.
<br>
The game Paga provides some general information about the selected game and different sections that hold compact versions of specific rules of the game.
<br><br>

##  Wireframe 
##### Home Page
###### It's the welcome page, where the user can start a search or pick one of the displayed games.
<img width="auto" height="500" alt ="Home Page" src="https://user-images.githubusercontent.com/112437477/216835439-c0a9c8e2-6b73-430a-ac1e-204b4d1d1954.png">


##### Game Page
###### Once the game was selected, the user can see it's contents on this page.

<img width="auto" height="1000" alt="Game Page" src="https://user-images.githubusercontent.com/112437477/216835488-a3e8ca43-8398-443b-9ec5-b68c1233e031.png">


##  Technologies Used 
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white">
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
<br>
<br>

## Code Snippet

### Backend

Nested Models to make it easier to add games on the django admin page
```py
class ContentInline(admin.StackedInline):
    fields: ("name", "text", "type", "image","direction", "order") 
    model = Content
    extra=0
    inlines = [ExtendedInline]
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':3, 'cols':70})},
    }

class SectionAdmin(admin.ModelAdmin):
    inlines = [ContentInline]
    list_filter = ('game',)
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows':3, 'cols':70})},
    }
```

### Frontend

Used a 'type' property for Content and Extended contents to determine how it will get rendered on the page
```js
import {
	ContLegend,
	ContExample,
	ContDescription,
	ExtLegend,
	ExtExample,
	ExtDescription,
} from "./CardElements";

const contentComp = {
	legend: ContLegend,
	example: ContExample,
	description: ContDescription,
};
const extendedComp = {
	legend: ExtLegend,
	example: ExtExample,
	description: ExtDescription,
};
const ContentCard = (props) => {
	const Content = contentComp[props.content.type];
	return (
		<div
			className="card bg-neutral shadow-xl mx-4 my-1 sm:my-3 w-11/12 md:w-1/3 overflow-hidden h-fit"
			style={{ borderRadius: "5px" }}
		>
			<Content content={props.content} />
			{props.content.extended.length > 0 && (
				<div className="extended bg-primary ">
					{props.content.extended.map((ext, i) => {
						const Extended = extendedComp[ext.type];
						return <Extended key={i} extended={ext} />;
					})}
				</div>
			)}
		</div>
	);
};

```



##  Whats next? 
Here are a few stretch goals we look to accomplish in the future:<br>

* Make sure the page will load from a specific game url<br>
* Add a suggestions page<br>
* Add a prompt to the suggestion page when your search has no matches<br>

<br>

## Thank you for reading! 
<p>
  <a href="https://www.linkedin.com/in/maripirs/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> Maripi's LinkedIn
  </a>
<p>


