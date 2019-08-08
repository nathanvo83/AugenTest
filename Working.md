
# Ideas about data:
- Data isn't big (500 record -> 80Kb, 10k records -> 1.5M) -> can download all data to client
- Data doesn't change often (update contacts, create new contacts)

# Assumptions
- Data doesn't need update immediately. 


# Design:
## Option 1: Processing on server side:
Client sends search request to server for every query string, and the server will search and return the data for 1 page

__Pros:__
+ live data (updated immediately)
+ small response data (payload)

__Cons:__
- slow 
- duplicate search (user search the same query again)
- pagination -> slow
- sorting -> slow


## Option 2: Processing on client side
Download the entire contacts list to client side when at starting then works offline.

__Pros:__
+ search locally -> fast
+ sorting, navigating -> fast
+ scale better (offline)

__Cons:__
- slow starting (has to load the entire data)
- data could be out of date
- use more memory on client side

## Decision:
- Choose option 2.

# Enhancements:
- If I have more time, I will implement progressive pagination, use __Redux__



# Deployment

```
$> git clone https://github.com/nathanvo83/AugenTest.git
$> cd ContactDemo\api
$> dotnet run --project ./api/api.csproj
$> cd ContactDemo\web
$> npm start
```



# Timeline summary

__Timeline: 10:00__

- Prepare: 1:00
	Read document: 0:30
	Analysis and design: 0:30
- Coding: 6:30
	Back end: 2:0
	Front end: 4:30
- Style: 1:00
- Building: 0:30
- Document: 1:00

