curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"query": "{ getDie(numSides: 6) { rollOnce roll(numRolls: 3) } }"}' \
    http://localhost:4000/graphql | jq