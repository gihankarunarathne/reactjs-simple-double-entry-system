# reactjs-simple-double-entry-system
A simple Double-Entry Bookkeeping  system (only for academic purposes).

## Setup Environment

Setup guide for **Linux** systems

- **Setup `NodeJS`** ( greater than 4.x.x)
  - Go to NodeJS installing directory (e.g. `cd /opt`)
  - Download NodeJS binary (e.g. `wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-x64.tar.gz`)
  - Extract tar zip (e.g. `tar -xf node-v4.2.4-linux-x64.tar.gz`)
  - Change directory name as `node` (e.g. `mv node-v4.2.4-linux-x64 node`)
  - Add following lines into `.bashrc` (e.g. `vim ~/.bashrc`)
  ```bash
  export PATH=$PATH:/opt/node/bin
  ```

  - Apply `.bashrc` changes (e.g. `source ~/.bashrc`)

- **Other dependancies**
  - Install `git` using `sudo apt-get install git`
  - Install Bower globally (if it's not installed) using `npm install -g bower`


## Installation

- Clone source code using `git clone https://github.com/gihankarunarathne/reactjs-simple-double-entry-system.git double-entry`
- Go to source code directory with `cd double-entry`
- Install NodeJS packages using `npm install`
- Install `bower` packages using `bower install`
- Build source code using `npm run webpack`
- After successfully built, serve files using HTTP server (e.g. `python -m SimpleHTTPServer 8000`)
- Browse to [http://localhost:8000/public/](http://localhost:8000/public/) using your favorite Web Browser
