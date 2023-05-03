
export default function importAll(){
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
                console.log(playlists)
                return playlists
            })

            .catch((err) => {
                console.log('error')
            })
        })
    });}