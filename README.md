# Express MVC Boilerplate

An MVC Structured Boilerplate for Express 4 Applications

## Setup & Installation

```bash
# Get a copy of the framework
git clone https://github.com/drmyersii/express-mvc-boilerplate.git your-app
cd your-app

# Install the dependencies
npm install

# Run the application
npm start
```

## Usage

### Routing

Routes are all automatically mapped to their corresponding Controllers/Actions.

**Example:**

```javascript
// home.js
module.exports = {
  // access via GET request to /home/Index or /home
  getIndex: function (req, res)
  {
    res.send('Hello, World!');
  }
}
```
