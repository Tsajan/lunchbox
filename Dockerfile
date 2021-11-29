FROM node:12

ENV PATH /lunchbox-frontend/node_modules/.bin:$PATH

RUN apt-get update && apt-get install -y vim
RUN npm install -g react-scripts@3.4.1
RUN npm install -g serve

RUN echo "set encoding=utf-8" >> /etc/vim/vimrc

# create app directory
WORKDIR /lunchbox-frontend

# install dependency
COPY package*.json ./
RUN npm install

# copy source
COPY . ./

CMD npm run build --node-flags --max-old-space-size=4096 --no-warnings && rm -rf src && serve -s build -p 3000

