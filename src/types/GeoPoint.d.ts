import type {OptionalSpace} from './String.d';

export type GeoPointArray = [number, number]; // Tuple
export type GeoPointFunction = (lat :number, lon :number) => unknown;
export type GeoPointString = `${string},${OptionalSpace}${string}`;

// Failed experiments

/*type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends any[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator< ArrayItems<T> > }

export type GeoPointArray = FixedLengthArray<[number, number]>;*/

/*type Minus99ToMinus90 = -99|-98|-97|-96|-95|-94|-93|-92|-91|-90;
type Minus89ToMinus80 = -89|-88|-87|-86|-85|-84|-83|-82|-81|-80;
type Minus79ToMinus70 = -79|-78|-77|-76|-75|-74|-73|-72|-71|-70;
type Minus69ToMinus60 = -69|-68|-67|-66|-65|-64|-63|-62|-61|-60;
type Minus59ToMinus50 = -59|-58|-57|-56|-55|-54|-53|-52|-51|-50;
type Minus49ToMinus40 = -49|-48|-47|-46|-45|-44|-43|-42|-41|-40;
type Minus39ToMinus30 = -39|-38|-37|-36|-35|-34|-33|-32|-31|-30;
type Minus29ToMinus20 = -29|-28|-27|-26|-25|-24|-23|-22|-21|-20;
type Minus19ToMinus10 = -19|-18|-17|-16|-15|-14|-13|-12|-11|-10;
type Minus9ToMinus1 = -9|-8|-7|-6|-5|-4|-3|-2|-1;

type Minus90ToMinus1 = -90
	|Minus89ToMinus80
	|Minus79ToMinus70
	|Minus69ToMinus60
	|Minus59ToMinus50
	|Minus49ToMinus40
	|Minus39ToMinus30
	|Minus29ToMinus20
	|Minus19ToMinus10
	|Minus9ToMinus1

type ZeroTo9 = 0|1|2|3|4|5|6|7|8|9;
type TenTo19 = 10|11|12|13|14|15|16|17|18|19;
type TwentyTo29 = 20|21|22|23|24|25|26|27|28|29;
type ThirtyTo39 = 30|31|32|33|34|35|36|37|38|39;
type FourtyTo49 = 40|41|42|43|44|45|46|47|48|49;
type FiftyTo59 = 50|51|52|53|54|55|56|57|58|59;
type SixtyTo69 = 60|61|62|63|64|65|66|67|68|69;
type SeventyTo79 = 70|71|72|73|74|75|76|77|78|79;
type EightyTo89 = 80|81|82|83|84|85|86|87|88|89;
type NinetyTo99 = 90|91|92|93|94|95|96|97|98|99;

type ZeroTo90 = ZeroTo9
	|TenTo19
	|TwentyTo29
	|ThirtyTo39
	|FourtyTo49
	|FiftyTo59
	|SixtyTo69
	|SeventyTo79
	|EightyTo89
	|90

type Minus90To90 = Minus90ToMinus1 | ZeroTo90;*/

//type PrependNextNum<A extends Array<unknown>> = A['length'] extends infer T ? ((t: T, ...a: A) => void) extends ((...x: infer X) => void) ? X : never : never;
//type EnumerateInternal<A extends Array<unknown>, N extends number> = { 0: A, 1: EnumerateInternal<PrependNextNum<A>, N> }[N extends A['length'] ? 0 : 1];
//export type Enumerate<N extends number> = EnumerateInternal<[], N> extends (infer E)[] ? E : never;
//export type Range<FROM extends number, TO extends number> = Exclude<Enumerate<TO>, Enumerate<FROM>>;
//type E1 = Enumerate<-1>;
//type ZeroToNinety = Range<0,91>;
//type ExcessivelyDeep = Range<0,93>;
//type ExcessivelyDeep = Range<91,93>;

//type StringDigit = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9';
//type OptionalStringDigit = '' | StringDigit;

// Too complex
//type StringLatitude = `${OptionalStringDigit}${StringDigit}`
//| `${OptionalStringDigit}${StringDigit}.${OptionalStringDigit}${OptionalStringDigit}${OptionalStringDigit}${OptionalStringDigit}${OptionalStringDigit}${OptionalStringDigit}${OptionalStringDigit}`;
