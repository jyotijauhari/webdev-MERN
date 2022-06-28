//default imports

import obj from './temp';
import yolo from "./temp";


console.log(obj);
console.log(yolo);

//named imports
import {key as haathi} from './strings';
import { exportedObj } from './strings';

//importing all
import * as bundled from "./strings";
bundled.key;
bundled.exportedObj;