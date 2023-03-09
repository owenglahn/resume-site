import React from 'react'
import Nav from './Nav';

type Props = {
    name: string
    children: any
}

export default function TopSection({ name , children }: Props) {
  return (
    <>
        <Nav />
        <div className="w-full h-screen bg-[url('../resources/final.png')] bg-cover bg-center flex justify-center items-center" >
            <div className="flex flex-col justify-center items-center">
                <div className="z-10  max-w-screen-lg px-4 lg:px-0">
                    <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
                        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                            {name}
                        </h1>
                        <div className="flex gap-x-4 text-neutral-100">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
