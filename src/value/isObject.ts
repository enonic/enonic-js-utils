// error  Don't use `Object` as a type. The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.
// - If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.
// - If you want a type meaning "any value", you probably want `unknown` instead  @typescript-eslint/ban-types

export const isObject = (value :object | unknown) :value is object =>
	Object.prototype.toString.call(value).slice(8,-1) === 'Object';
