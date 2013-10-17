Geocrunch
===

Quick and simple geographic calcs

## Usage

```javascript
path(arrayOfCoordPairs, options).distance(options); // returns distance
```

```javascript
path(arrayOfCoordPairs, options).area(options); // returns area
```

```javascript
path(arrayOfCoordPairs, options).center(); // returns center
```

### Path Options

`imBackwards` - Path in format `[lat, lng]` vs expected `[lng, lat]`

### Distance Options

`units` - `meters`, `feet`, `miles`. Default `meters`.

### Area Options

`units` - `sqmeters`, `sqmiles`, `acres`. Default `sqmeters`.