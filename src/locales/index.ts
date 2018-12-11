import { English } from './en';
import { Portuguese } from './pt';

(<any>window).Locale = (<any>window).Locale || {};
(<any>window).Locale.en = English || {};
(<any>window).Locale.pt = Portuguese || {};
