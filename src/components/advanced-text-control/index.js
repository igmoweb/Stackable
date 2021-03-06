import { BaseControl, TextControl } from '@wordpress/components'
import BaseControlMultiLabel from '../base-control-multi-label'
import classnames from 'classnames'
import { omit } from 'lodash'

const AdvancedSelectControl = props => {
	return (
		<BaseControl
			help={ props.help }
			className={ classnames( 'ugb-advanced-text-control', props.className ) }
		>
			<BaseControlMultiLabel
				label={ props.label }
				units={ props.units }
				unit={ props.unit }
				onChangeUnit={ props.onChangeUnit }
				screens={ props.screens }
			/>
			<TextControl
				{ ...omit( props, [ 'className', 'help', 'label', 'units', 'unit', 'onChangeUnit', 'screens' ] ) }
			/>
		</BaseControl>
	)
}

AdvancedSelectControl.defaultProps = {
	onChange: () => {},
	onChangeUnit: () => {},
}

export default AdvancedSelectControl
