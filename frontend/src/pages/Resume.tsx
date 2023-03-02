import React from 'react';
import Nav from '../components/Nav';

const IMAGE_SOURCE = process.env.REACT_APP_BG_IMAGE_SOURCE;

export default function Resume() {
  return (
    <>
        <Nav />
        <img className="absolute z-0" src={IMAGE_SOURCE}></img>
    </>
  )
}
