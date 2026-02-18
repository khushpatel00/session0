import React from 'react'

function ActivityBar({className}) {
	return (
		<>
			<div className={'fixed bottom-0 w-screen h-14 flex justify-center flex-wrap bg-zinc-900/50 backdrop-blur-lg' + ' ' + className}>
				<img src="/archicon.png" alt="" className='max-h-full p-2 ' />
			</div>
		</>
	)
}

export default ActivityBar