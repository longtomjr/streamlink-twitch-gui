import { BooleanTransform } from "ember-data";


const defaultOptions = { allowNull: true };


export default BooleanTransform.reopen({
	deserialize( serialized ) {
		return this._super( serialized, defaultOptions );
	},

	serialize( deserialized ) {
		return this._super( deserialized, defaultOptions );
	}
});
