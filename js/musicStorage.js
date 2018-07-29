console.log('music')

let musicDatabase =[];

const createAlbumList = (albumTitle, albumYear, artist, label, albumImage) => {
    const albums ={
        title: albumTitle,
        year: albumYear,
        artist: artist,
        label: label,
        image: albumImage
    }
    musicDatabase.push(albums)
}

createAlbumList('Friday Soundtrack', '1995', 'Ice Cube, KayDee, Dr. Dre', 'Priority',)
createAlbumList('Belly Soundtrack', '1998', "D'Angelo, Sean Paul, DMX",)
console.log(musicDatabase)