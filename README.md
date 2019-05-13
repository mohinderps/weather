## Install

1. Clone

```sh
git clone https://github.com/mohinderps/weather.git
```
2. Go the the cloned repo.
```sh
cd weather
```

3. Install Dependencies

```sh
npm install
```

4. Add constants.js to the root of project

```javascript
  const WORLD_WEATHER_API_KEY = ''  // API KEY GOES HERE

  module.exports = {
    WORLD_WEATHER_API_KEY
  }

```

5. Run

```sh
node index.js 'Tokyo, 10005'
```
