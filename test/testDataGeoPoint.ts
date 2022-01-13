import type {GeoPointArray} from '../src/mock/value.d';

export const GEOPOINT_ARRAYS :GeoPointArray[] = [
	[59.9090442,10.7423389],
	[-90,-180],
	[90,-180],
	[0,0],
	[-90,180],
	[90,180]
];

export const GEOPOINT_STRINGS = [
	'59.9090442,10.7423389',
	'-90,-180',
	'90,-180',
	'0,0',
	'-90,180',
	'90,180'
];

//──────────────────────────────────────────────────────────────────────────────
// Invalid
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINT_ARRAYS_INVALID = [
	[-91,-180],
	[-90,-181],
	[91,-180],
	[90,-181],
	[-91,180],
	[-90,181],
	[91,180],
	[90,181]
];

export const GEOPOINT_STRINGS_INVALID = [
	'-91,-180',
	'-90,-181',
	'91,-180',
	'90,-181',
	'-91,180',
	'-90,181',
	'91,180',
	'90,181'
];

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINTS = [].concat(
	GEOPOINT_ARRAYS,
	GEOPOINT_STRINGS
);

export const GEOPOINTS_INVALID = [].concat(
	GEOPOINT_ARRAYS_INVALID,
	GEOPOINT_STRINGS_INVALID
);
