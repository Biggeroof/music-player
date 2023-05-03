export function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}


export function importAllo(){
    let playlists = []
    fetch('src/playlists/master.json')
    .then((response) => response.json())
    .then((json) => {
        let playlistPaths = json['title']
        playlistPaths.map((item) => {

            fetch(item)
            .then((response) => {
                if (response.status !== 200)  {
                    console.log('error')
                    return;
                }
                response.json().then((json) => {
                    playlists.push(json)
                })
            })

            .catch((err) => {
                console.log('error')
                console.log('b')
                return;
            })
            console.log('d')
        })
    });
    return playlists}