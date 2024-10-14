import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogFields {
    title: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
}

export interface IAsset {
    sys: {id: string};
    fields: {
        file: {
            url: string;
            details?: any;
            fileName: string;
            contentType?: string;
        };
    };
}

export type TypeBlogSkeleton = EntrySkeletonType<TypeBlogFields, "blog">;
export type TypeBlog<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSkeleton, Modifiers, Locales>;

export interface TypeCompanyOverviewFields {
    category: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
    media: EntryFieldTypes.AssetLink;
    color?: EntryFieldTypes.Symbol;
}

export type TypeCompanyOverviewSkeleton = EntrySkeletonType<TypeCompanyOverviewFields, "companyOverview">;
export type TypeCompanyOverview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCompanyOverviewSkeleton, Modifiers, Locales>;