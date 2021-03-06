import type {
	CompoundExpression,
	QueryExpression
} from '../../../types/index.d';


import {flatten} from '../../../array/flatten';


interface MustNot {
	mustNot :Array<QueryExpression & CompoundExpression>
}

function not(arg :QueryExpression & CompoundExpression) :MustNot;
function not(...args :Array<QueryExpression & CompoundExpression>) :MustNot;
function not(args :Array<QueryExpression & CompoundExpression>) :MustNot;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function not(...args :any) :MustNot {
	const flattened = flatten(args) as Array<QueryExpression & CompoundExpression>;
	return {
		mustNot: flattened
	};
}

const mustNot = not;

export {
	mustNot,
	not
};
