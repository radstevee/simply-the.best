/**
 * This configures the navigation bar and footer. Each entry is a nav link with
 * the correct translation and url path.
 *
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated
 */

import type {SupportedLanguage} from "src/utils/i18n";

export default {
    "en": {
        "home": {
            text: "home",
            slug: ""
        },
        "about": {
            text: "about",
            slug: "about"
        },
        "blog": {
            text: "blog",
            slug: "blog",
            route: "/blog/pages/1"
        },
        "archive": {
            text: "archive",
            slug: "archive"
        },
        "tags": {
            text: "tags",
            slug: "tags"
        },
        "series": {
            text: "series",
            slug: "series"
        }
    }
} as const satisfies TranslationNavEntries;

type TranslationNavEntries = Record<SupportedLanguage, Record<string, NavEntry>>

export type NavEntry = {
    /*
        Provided translation
    */
    text: string,

    /*
        Content collection slug or url path for this page without the language code
    */
    slug: string,

    route?: string
};