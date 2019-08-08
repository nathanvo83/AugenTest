Assumption

Option1: Server (process, search,…)

+ data updated (immediately)
+ speed load (medium) -> n times
+ refresh

- search immediately -> slow
- duplicate search (user delete letter) -> server’s performance -> slow
- paging -> slow
- sort -> slow


Option 2: Client (process, search,…)
+ search immediately -> fast
+ paging -> fast
+ sort -> fast
+ scale

- load slow (1st time)
- data (no updated)
- use more memory
- …


My view:
•	Data isn’t big (500 record -> 80Kb, 10k records -> 1.5M)
•	Data doesn’t change more (update, create -> less)
•	Data doesn’t need update immediately.

Decision:
•	Choose option 2.
•	If I have more time, I will upgrade load progressive data.
