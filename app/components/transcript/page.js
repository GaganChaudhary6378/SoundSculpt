import React from 'react'
import Navbar from '../navbar/page'
const fs = require('fs');
const ytdl = require('ytdl-core');



function Transcript() {

    async function getAudio() {
        ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
            .pipe(fs.createWriteStream('video.mp4'));

        let info = await ytdl.getInfo(videoID);
        let format = ytdl.chooseFormat(info.formats, { quality: '134' });
    }

    return (
        <div>
       
            This is my trancript page
        </div>
    )
}

export default Transcript