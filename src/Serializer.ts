
import {Serializable} from './Serializable';

export class Serializer<T extends Serializable = Serializable> {
    constructor() {}

    private _serializeItem(key: string, value: any): Serializable {
        if (value instanceof Error) {
            return {
                message: value.message,
                stack: value.stack,
                name: value.name
            };
        }
        else {
            return value;
        }
    }

    protected _serialize(object: T): string {
        return JSON.stringify(object, this._serializeItem);
    }

    public serialize(object: T): string {
        return this._serialize(object);
    }
}
