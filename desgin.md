Components

- Retro<clean>
- RetroList<title, style, items, add>
- RetroListItem<content, author, votes, moveToList, delete>

Store/State

- AppState: {
  isLoading: boolean = false,
  error?: Error,
  author: string,
  wentWell: RetroList,
  toImprove: RetroList,
  actionItems: RetroList,
  }

- RetroList: {
  id: string,
  content: string,
  author: string,
  votes: number,
  }[]

Action

- addItem(id, content, author, list)
- moveToList(id, fromList, toList)
- deleteItem(id, list)
- deleteAllItems()
- updateItem(id, content, list)
- voteItem(id, list)

UI -> API -> DB (eg. Firebase, AWS Amplify, etc)

API
Design RESTful API
stateless
http methods (verbs) => endpoint (nouns)
POST -> upsert (update & insert)

- GET /items
- POST /item
- DELETE /item

DB
