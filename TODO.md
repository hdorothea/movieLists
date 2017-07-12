​
# to do
* <strike> buttons need to become gray on hover </strike>
* <strike> directed by needs to appear together with the director links </strike>
* <strike> list name seems to be fixed size on mobile </strike>
* <strike> go to home when you click on header </strike>
* <strike> search box needs to become empty on blur </strike>
* <strike> activate password hashes, remove db routes, deploy </strike>
* <strike> check how it looks like in safari </strike> and edge
* <strike> Logout button looks horrible on mobile </strike>
* <strike> redirect from https </strike>
* <strike> style the search-box input </strike>
* <strike> login and signup forms on desktop safari are not in the middle </strike>
* make images/demo for readme
* add link to github and a sentence saying that it is a demo app using tmdb api to the app
* submit button for login and signup should dark even if we submit by pressing enter
# things to improve
* the routes should not have the ugly id but name_1, name_2 etc. This is not as trivial as it sounds as the current ids are also the primary keys in the database.
* it might be nicer if the sample lists got added to new session. For this each time you create a new session (send a cookie to the frontend) the sample lists should be saved to the database. I tried to save it each time I insert the first list for a sessionid but that doesn't make sense because the user might already have deleted the sample list himself.
* Cancel observables when view changes
* Also when the underlying data changes and you navigate back the data obviously doesn't change back. I don't know if it should or how to do that without a store.
* Fix the problem with displaying the movie posters as a flexbox.
* The sample lists should be on the frontend
* Some more error handling
* If you have more than n lists the sidebar should be paginated
* Local Storage for offline experience
* caching
