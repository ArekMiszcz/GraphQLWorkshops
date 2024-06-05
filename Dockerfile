FROM node:latest
RUN apt-get update && apt-get install -y --no-install-recommends jq
RUN mkdir -p /home/node/workshop && chown -R node:node /home/node/workshop
WORKDIR /home/node/workshop
USER node
COPY --chown=node:node . .
EXPOSE 8080
CMD ["/bin/sh", "-c", "bash"]