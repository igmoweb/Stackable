/**
 * BLOCK: Header Block.
 */
import { __ } from '@wordpress/i18n'
import { descriptionPlaceholder } from '@stackable/util'
import { disabledBlocks } from 'stackable'
import { HeaderIcon } from '@stackable/icons'

const schema = {
	title: {
		source: 'html',
		selector: 'h2',
		default: __( 'Title for This Block' ),
	},
	subtitle: {
		source: 'html',
		selector: 'p',
		default: descriptionPlaceholder(),
	},
	titleColor: {
		type: 'string',
		// default: '#ffffff',
	},
	subtitleColor: {
		type: 'string',
		// default: '#ffffff',
	},
	contentAlign: {
		type: 'string',
		default: 'center',
	},
	backgroundColorType: {
		type: 'string',
		default: '',
	},
	backgroundColor: {
		type: 'string',
		default: '#000000',
	},
	backgroundColor2: {
		type: 'string',
		default: '',
	},
	backgroundColorDirection: {
		type: 'number',
		default: 0,
	},
	backgroundType: {
		type: 'string',
		default: '',
	},
	backgroundImageID: {
		type: 'number',
	},
	backgroundImageURL: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
		default: 5,
	},
	fixedBackground: {
		type: 'boolean',
		default: false,
	},
	design: {
		type: 'string',
		default: 'basic',
	},
	borderRadius: {
		type: 'number',
		default: 12,
	},
	shadow: {
		type: 'number',
		default: 3,
	},
	contentWidth: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
	},
	invert: {
		type: 'boolean',
		default: false,
	},
	fullHeight: {
		type: 'boolean',
		default: false,
	},

	// Button.
	buttonURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-button',
		attribute: 'href',
		default: '',
	},
	buttonNewTab: {
		type: 'boolean',
		source: 'attribute',
		selector: '.ugb-button',
		attribute: 'target',
		default: false,
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-button span',
		default: __( 'Button text' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
		default: '#ffffff',
	},
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon: {
		type: 'string',
	},
	size: {
		type: 'string',
		default: 'normal',
	},
	cornerButtonRadius: {
		type: 'number',
		default: 4,
	},

	// Button #2.
	buttonURL2: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-header__buttons > *:nth-child(2) .ugb-button',
		attribute: 'href',
		default: '',
	},
	buttonNewTab2: {
		type: 'boolean',
		source: 'attribute',
		selector: '.ugb-header__buttons > *:nth-child(2) .ugb-button',
		attribute: 'target',
		default: false,
	},
	buttonText2: {
		source: 'html',
		selector: '.ugb-header__buttons > *:nth-child(2) .ugb-button span',
		default: __( 'Button text' ),
	},
	buttonColor2: {
		type: 'string',
	},
	buttonTextColor2: {
		type: 'string',
		default: '#ffffff',
	},
	buttonDesign2: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon2: {
		type: 'string',
	},
	buttonSize2: {
		type: 'string',
		default: 'normal',
	},
	buttonBorderRadius2: {
		type: 'number',
		default: 4,
	},

	// Custom CSS attributes.
	customCSSUniqueID: {
		type: 'string',
		default: '',
	},
	customCSS: {
		type: 'string',
		default: '',
	},
	customCSSCompiled: {
		type: 'string',
		default: '',
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	opacity: {
		type: 'number',
	},
	url: {
		type: 'string',
	},
	id: {
		type: 'number',
	},
}

export const name = 'ugb/header'

export const settings = {
	title: __( 'Header' ),
	description: __( 'A large header title area. Typically used at the very top of a page.' ),
	icon: HeaderIcon,
	category: 'stackable',
	keywords: [
		__( 'Header' ),
		__( 'Stackable' ),
	],
	supports: {
		align: [ 'center', 'wide', 'full' ],
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},
	attributes: schema,

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/header-block/?utm_source=welcome&utm_medium=settings&utm_campaign=view_demo&utm_content=demolink',
}
