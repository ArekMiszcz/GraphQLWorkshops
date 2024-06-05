#!/bin/bash

USAGE="Creates a Connection to a database from a remote user.
Tunnels a connection to the DB via a named local port.

Usage: 
  . ./mutation_update_message.sh --id message_id [--author Author] [--content Content]

Options:
  --id message_id
    Update message with given id
  --author author
    Update message with given author
  --content content
    Update message with given content
"

# Helper functions
RED='\033[1;31m'
BLUE='\033[1;34m'
GREEN='\033[1;32m'
NC='\033[0m'

# For Windows users:
MSYS2_ARG_CONV_EXCL="*"

echoR() {
  echo -e "${RED}${1}${NC}"
}
echoB() {
  echo -e "${BLUE}${1}${NC}"
}
echoG() {
  echo -e "${GREEN}${1}${NC}"
}

# Default param values
MESSAGE_ID=""
AUTHOR="Andy123"
CONTENT="Some different content"

POSITIONAL=()
while [[ $# -gt 0 ]]; do
  KEY="$1"

  case $KEY in
    -h|--help)
      echo "$USAGE"
      exit 0
      ;;
    --id)
      MESSAGE_ID="$2"
      shift
      shift
      ;;
    --author)
      AUTHOR="$2"
      shift
      shift
      ;;
    --content)
      CONTENT="$2"
      shift
      shift
      ;;
    *)
      echo "Unknown option '$1'"
      POSITIONAL+=("$1") # save it in an array for later
      shift # past argument
      ;;
  esac
done

# Check dependency commands exist.
if [ ! $MESSAGE_ID ] ; then
  echoR "Message ID could not be found. Please provide --id param."
  exit 1
fi

curl -X POST \
    -H "Content-Type: application/json" \
    -d '
        {
            "query": "mutation UpdateMessage($id: ID!, $input: MessageInput) { updateMessage(id: $id, input: $input) { id } }",
            "variables": {
                "id": "'$MESSAGE_ID'",
                "input": {
                    "author": "'"$AUTHOR"'",
                    "content": "'"$CONTENT"'"
                }
            }
        }
    ' \
    http://localhost:4000/graphql | jq