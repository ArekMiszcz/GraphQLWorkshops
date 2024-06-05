curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ rollDice(numDice: 5, numSides: 6) }"}' \
    http://localhost:4000/graphql | jq