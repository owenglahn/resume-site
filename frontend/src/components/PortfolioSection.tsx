import React from 'react'

export default function PortfolioSection(props: {name: string, source: string, children: any}) {
  return (
    <div className='text-teal-200 mb-8'>
        <h2 className='text-center text-xl font-bold uppercase'>{props.name}</h2>
        <div className='text-center'>
            <ul>
                {props.children}
            </ul>
        </div>
    </div>
  )
}
