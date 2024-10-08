import type React from 'react'
import { ModeToggle } from '../theme/theme-toggle'

const Header: React.FC = () => {
	return (
		<div className='w-full flex justify-between border-b-2 border-solid border-slate-300 pb-2'>
			<p className='text-2xl font-bold'>JSON Viewer test app</p>
			<ModeToggle />
		</div>
	)
}

export default Header
