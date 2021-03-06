import {
	get,
	computed,
	Component
} from "ember";
import layout from "templates/components/SettingsRowComponent.hbs";


/**
 * @param {Substitution[]} substitutions
 * @returns {Array}
 */
function getSubstitutionsList( substitutions ) {
	if ( !( substitutions instanceof Array ) ) { return []; }

	return substitutions.map(function( substitution ) {
		const vars = substitution.vars.map( name => `{${name}}` );

		return {
			variable   : vars[0],
			description: substitution.description
		};
	});
}


export default Component.extend({
	layout,

	classNames: [ "settings-row-component" ],

	strNewLine: "\n",
	substitutionsExpanded: false,

	documentationUrl: null,

	_substitutions: computed( "substitutions", function() {
		const substitutions = get( this, "substitutions" );
		return getSubstitutionsList( substitutions );
	})

}).reopenClass({
	positionalParams: [ "title", "description" ]
});
