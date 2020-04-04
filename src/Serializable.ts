
import {IDictionary} from '@totalpave/interfaces';

export type Serializable = string | number | boolean | Array<Serializable> | IDictionary<Serializable>;
