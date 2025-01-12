import type { CorePlatform } from '@builder.io/qwik';

export interface MockDocument extends Document {}

export interface MockWindow extends Window {
  document: MockDocument;
}

/**
 * Options when creating a mock Qwik Document object.
 * @public
 */
export interface MockDocumentOptions {
  url?: URL | string;
  html?: string;
}

/**
 * Options when creating a mock Qwik Window object.
 * @public
 */
export interface MockWindowOptions extends MockDocumentOptions {}

/**
 * @public
 */
export interface TestPlatform extends CorePlatform {
  flush: () => Promise<void>;
}

/**
 * @public
 */
export interface QConfig {
  baseURI?: string;
  protocol?: { [protocol: string]: string };
}
