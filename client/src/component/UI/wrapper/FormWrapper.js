import React from 'react';

const FormWrap = (props) => {
  return(
    <div>
      <div id='bg-video'>
      <video
        src='http://flash.gtarcade.net/31/static/usr/uploads/201901/20190109080139_30824/video/got-closebeta-video.mp4'
          //poster='nice-default.jpg'
        autoPlay={'autoPlay'}
        loop={'loop'}
        muted={'muted'}

      />
      </div>
      <div className='log-reg-form'>{props.children}</div>
    </div>
  )
}

export default FormWrap;