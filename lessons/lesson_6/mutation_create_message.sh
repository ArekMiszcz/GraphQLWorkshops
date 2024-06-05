curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "mutation CreateMessage($input: MessageInput) { createMessage(input: $input) { id } }", "variables": { "input": { "author": "andy", "content": "hope is a good thing" } } }' \
    http://localhost:4000/graphql | jq