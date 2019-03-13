# instructions to view pages...
run the following from the command line...  
$ pushd [filename].html; python3 -m http.server 8000; popd  
then navigate to localhost:8000

## design plan so far
*use forms to collect data from web-app  
*use data to populate webpage with dynamic size (similar to dynamic tables, but using sections)  
*stylize that page
*    import transparent nav bar from codepen
*figure out what API to use (knowledge, graph, google maps, yelp, more to consider...)
 
*updats: 
*    Apply for the Google Map Embed API key at https://code.google.com/apis/console

*more to come...  

## data to collect from forms
*menu item  
*description  
*price  
*daliy/weekly specials?  
*happy hour offerings?  
*beverages  
*pictures(knowledge graph?)  
*more to come...  

# journal of project progress/issues/challenges/sucesses
*chose blank bootstrap template to build menu on   

*issues trying to figure out how to use forms to create dynamic menu, going to start with a very simple plain text to do list but have multiple items per add   

*issues getting to do list to work, html is fine, need to get javascript to work to add to the webpage, going to work through the code later today or tomorrow   

*issues to make animation during page loading using css and javascript.

*issues to make the text over img and make the img transparent while not effect the text.

*issues to use the api(mo.js javascript animation engine)(template twitter_fav:https://codepen.io/sol0mka/pen/wWdRLk) By LegoMushroom @sol0mka.

*Fixed issues with mo.js API: reason: "Issue: Must send the script with mojs reference somewhere inside <body> tag instead of <head> - there is the issue that will be solved in near future, but for now, you need to link mojs inside body tag."
 
*after painstaking issues getting the form to work how i wanted it to to add menu data to the actual proper section of the menu, was finally able to resolve it by reducing to one submit button and appending each data item as a new text node, seprately. 

*issue when trying to apply changes to style.css to get cursive on menu, or make the menu sections bold and stand out more but changes are not being applied when view webpage
