import masterPlaylist from './playlists/master.json'
export default function importAll(){
    let playlists = {}
    fetch('/src/playlists/master.json')
    .then(
        (response) => {
            if (response.status !== 200)  {
                console.log('error' + response.status)
                return;
            }

            response.json().then((data) => {
                let playlistPaths = data['title']
                playlistPaths.items.map((item) => {
                    fetch(item)
                    .then((response) => {
                        if (response.status !== 200)  {
                            console.log('error')
                            return;
                        }
                        response.json().then((data) => {
                            let title = data["title"]
                            let songs = data["songs"]
                            playlists[title] = songs
                        })
                        
                    })

                    .catch((err) => {
                        console.log('error')
                    })
                })
            })
        }
    )
    .catch((err) => {
        console.log('error')
    })

    return playlists
}


// const importAll = () => {
//     function importAll(require) {
//         console.log(r);
//         console.log(1)
//         let files = {};
//         r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//         return files;
//     }
// }

// export default importAll