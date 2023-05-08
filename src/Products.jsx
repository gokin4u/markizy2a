// tutaj ustawiacie parametry produktów , dodajecie nowe ewentualnie
export const category = [
    { name: 'Pełna', id: 1 },
    { name: 'Półkaseta', id: 2 },
];

/* bgImg to sciezki do zdjec umieszczonych w folderze public, po wywołaniu npm run build, fotki lądują w folderze dist,
w folderze public trzeba tez wrzucic fotki wariantow takich jak Moderno-1-1.jpg*/
export const models = [
    {
        name: 'Moderno',
        id: 1,
        categoryId: 1,
        price: 100,
        bgImg: 'moderno.jpg',
        colorsIds: [3, 4],
        desc: 'Ekran markizy wykonany jest z odpornego na UV i przedarcia poliestru. Kaseta powinna być instalowana na drewnianym słupku w pozycji pionowej-  markiza jest wyciągana z kasety. Szerokość można regulować od 0 do 300cm. W przesyłce znajdują się akcesoria montażowe'
    },
    {
        name: 'Presto',
        id: 2,
        categoryId: 1,
        price: 150,
        bgImg: 'presto.jpg',
        colorsIds: [1, 2],

        desc: 'Ekran markizy wykonany jest z odpornego na UV i przedarcia poliestru. Kaseta powinna być instalowana na drewnianym słupku w pozycji pionowej-  markiza jest wyciągana z kasety. Szerokość można regulować od 0 do 300cm. W przesyłce znajdują się akcesoria montażowe'
    },
    {
        name: 'Agadio',
        id: 3,
        categoryId: 2,
        price: 120,
        bgImg: 'adagio.jpg',
        colorsIds: [1, 2, 3],
        desc: 'Markiza jest wyciągana z kasety. Szerokość można regulować od 0 do 300cm. W przesyłce znajdują się akcesoria montażowe'
    },
    {
        name: 'Tremolo',
        id: 4,
        categoryId: 2,
        price: 200,
        bgImg: 'tremolo.jpg',
        colorsIds: [1, 2, 3, 4, 5],
        desc: 'Ekran markizy wykonany jest z odpornego na UV i przedarcia poliestru. Kaseta powinna być instalowana na drewnianym słupku w pozycji pionowej'
    },
]

// jak dodajesz nowy kolor np. o id 5 wrzuc potem do models.colorsIds[5]
export const colors = [
    { name: 'RAL 9006', id: 1, code: '#fff', font: '#616376' },
    { name: 'RAL 8019', id: 2, code: '#000', font: '#fff' },
    { name: 'RAL 7016S', id: 3, code: '#ccc', font: '#616376' },
    { name: 'RAL 9016', id: 4, code: '#ffd', font: '#616376' },
    { name: 'RAL 9005', id: 5, code: '#ffd', font: '#616376' },
]

export const fabric = [
    { name: 'Vegas', id: 1 },
    { name: 'Wenecja', id: 2 },
    { name: 'Miami', id: 3 }
]

export const dimensions = [
    { productId: 1, width: [180, 200], range: [100, 150] },
    { productId: 2, width: [120, 200], range: [100, 150] },
    { productId: 3, width: [120, 230], range: [100, 190] },
    { productId: 4, width: [100, 250], range: [140, 190] },
]