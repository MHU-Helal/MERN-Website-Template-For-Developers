import React from 'react'
import App from '../Components/App';
import {Helmet} from 'react-helmet';

export default function Home() {
  return (
    <>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Website React Template</title>
    </Helmet>
    <App/>
    </>
  )
}
