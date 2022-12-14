import axios from "axios";
import React, { useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";

// const playlistsLocal = [
//     {
//         id: 1,
//         name: "Playlist 1"
//     },
//     {
//         id: 2,
//         name: "Playlist 2"
//     },
//     {
//         id: 3,
//         name: "Playlist 3"
//     },
//     {
//         id: 4,
//         name: "Playlist 4"
//     },
// ]
function Playlists() {

    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: { Authorization: "ana-sammi-barbosa" }
        }
        )
            .then((res) => {
                setPlaylists(res.data.result.list)
            })
            .catch((err) => alert(err.response.data))
    }, [])

    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id} playlist={playlist} />
            })}

        </div>
    );
}

export default Playlists;
