curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ quoteOfTheDay random rollThreeDice }"}' \
    http://localhost:4000/graphql | jq