declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"productos": {
"alpaca.md": {
	id: "alpaca.md";
  slug: "alpaca";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"aroma-cafe.md": {
	id: "aroma-cafe.md";
  slug: "aromas";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"bouquet-grande.md": {
	id: "bouquet-grande.md";
  slug: "bouquet-grande";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"bouquet-mediano.md": {
	id: "bouquet-mediano.md";
  slug: "bouquet-mediano";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"bouquet-mini.md": {
	id: "bouquet-mini.md";
  slug: "bouquet-mini";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"bouquet-pequeno.md": {
	id: "bouquet-pequeno.md";
  slug: "bouquet-pequeno";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"burbuja.md": {
	id: "burbuja.md";
  slug: "burbuja";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"cemento-estilo.md": {
	id: "cemento-estilo.md";
  slug: "cemento-estilo";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"coleccion-pareja.md": {
	id: "coleccion-pareja.md";
  slug: "coleccion-pareja";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"cupcake-a.md": {
	id: "cupcake-a.md";
  slug: "cupcake-a";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"cupcake-b.md": {
	id: "cupcake-b.md";
  slug: "cupcake-b";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"economico.md": {
	id: "economico.md";
  slug: "economico";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"elegante-i.md": {
	id: "elegante-i.md";
  slug: "elegante-i";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"elegante-ii.md": {
	id: "elegante-ii.md";
  slug: "elegante-ii";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-acetato.md": {
	id: "empaque-acetato.md";
  slug: "empaque-acetato";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-carton.md": {
	id: "empaque-carton.md";
  slug: "empaque-carton";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-cartulina.md": {
	id: "empaque-cartulina.md";
  slug: "empaque-cartulina";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-celofan.md": {
	id: "empaque-celofan.md";
  slug: "empaque-celofan";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-organza.md": {
	id: "empaque-organza.md";
  slug: "empaque-organza";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-personalizado.md": {
	id: "empaque-personalizado.md";
  slug: "empaque-personalizado";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"empaque-tul.md": {
	id: "empaque-tul.md";
  slug: "empaque-tul";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"extra-chocolates.md": {
	id: "extra-chocolates.md";
  slug: "extra-chocolates";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"extra-vinil.md": {
	id: "extra-vinil.md";
  slug: "extra-vinil";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"extra-vino.md": {
	id: "extra-vino.md";
  slug: "extra-vino";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"florero-peonia.md": {
	id: "florero-peonia.md";
  slug: "florero-peonia";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"florero.md": {
	id: "florero.md";
  slug: "florero";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-de-acido-hialuronico.md": {
	id: "jabon-de-acido-hialuronico.md";
  slug: "Jabon de ácido hialurónico";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-de-concha-de-nacar.md": {
	id: "jabon-de-concha-de-nacar.md";
  slug: "Jabón de concha de Nácar";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-de-granada.md": {
	id: "jabon-de-granada.md";
  slug: "Jabon de granada";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-de-karite.md": {
	id: "jabon-de-karite.md";
  slug: "Jabon de Karité";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-de-mango.md": {
	id: "jabon-de-mango.md";
  slug: "jabon de mango";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabon-prueba.md": {
	id: "jabon-prueba.md";
  slug: "jabon prueba";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"jabones.md": {
	id: "jabones.md";
  slug: "jabones";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"medioambiente.md": {
	id: "medioambiente.md";
  slug: "medioambiente";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"mini-burbuja.md": {
	id: "mini-burbuja.md";
  slug: "mini-burbuja";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"mini-ramo-margarita.md": {
	id: "mini-ramo-margarita.md";
  slug: "mini-ramo-margarita";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"mini-ramo-peonia.md": {
	id: "mini-ramo-peonia.md";
  slug: "mini-ramo-peonia";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"osito-base-circular.md": {
	id: "osito-base-circular.md";
  slug: "osito-base-circular";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"osito-base-nube.md": {
	id: "osito-base-nube.md";
  slug: "osito-base-nube";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"osito-con-saco.md": {
	id: "osito-con-saco.md";
  slug: "osito-con-saco";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"osito-envase.md": {
	id: "osito-envase.md";
  slug: "osito-envase";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"osito-teddy.md": {
	id: "osito-teddy.md";
  slug: "osito-teddy";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-circular-i.md": {
	id: "porta-circular-i.md";
  slug: "porta-circular-i";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-circular-ii.md": {
	id: "porta-circular-ii.md";
  slug: "porta-circular-ii";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-corazon.md": {
	id: "porta-corazon.md";
  slug: "porta-corazon";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-cuadrado.md": {
	id: "porta-cuadrado.md";
  slug: "porta-cuadrado";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-media-luna.md": {
	id: "porta-media-luna.md";
  slug: "porta-media-luna";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"porta-ovalado.md": {
	id: "porta-ovalado.md";
  slug: "porta-ovalado";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"postre-envase.md": {
	id: "postre-envase.md";
  slug: "postre-envase";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"postre.md": {
	id: "postre.md";
  slug: "postre";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"primera-clase.md": {
	id: "primera-clase.md";
  slug: "primera clase";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"ramo-grande.md": {
	id: "ramo-grande.md";
  slug: "ramo-grande";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"ramo-mediano.md": {
	id: "ramo-mediano.md";
  slug: "ramo-mediano";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"ramo-pequeno.md": {
	id: "ramo-pequeno.md";
  slug: "ramo-pequeno";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"ropa.md": {
	id: "ropa.md";
  slug: "Ropa";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"segunda-mano.md": {
	id: "segunda-mano.md";
  slug: "segunda mano";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"tatu.md": {
	id: "tatu.md";
  slug: "tatu";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"velita-margarita.md": {
	id: "velita-margarita.md";
  slug: "velita-margarita";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
"velita-peonia.md": {
	id: "velita-peonia.md";
  slug: "velita-peonia";
  body: string;
  collection: "productos";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
