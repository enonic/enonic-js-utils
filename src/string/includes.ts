export function includes(
	string :string,
	searchString :string,
	position?: number
) :boolean {
	if (searchString as any instanceof RegExp) {
		throw TypeError('second argument must not be a RegExp');
	}
	if (position === undefined) { position = 0; }
	return string.indexOf(searchString, position) !== -1;
}
