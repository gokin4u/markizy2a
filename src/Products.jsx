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
        fabrics: [1, 2, 3, 4, 5, 6],
        desc: 'Ekran markizy wykonany jest z odpornego na UV i przedarcia poliestru. Kaseta powinna być instalowana na drewnianym słupku w pozycji pionowej-  markiza jest wyciągana z kasety. Szerokość można regulować od 0 do 300cm. W przesyłce znajdują się akcesoria montażowe'
    },
    {
        name: 'Presto',
        id: 2,
        categoryId: 1,
        price: 150,
        bgImg: 'presto.jpg',
        fabrics: [1, 2, 3, 4, 5, 6],
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
        fabrics: [1, 2, 3, 4, 5, 6],
        desc: 'Markiza jest wyciągana z kasety. Szerokość można regulować od 0 do 300cm. W przesyłce znajdują się akcesoria montażowe'
    },
    {
        name: 'Tremolo',
        id: 4,
        categoryId: 2,
        price: 200,
        bgImg: 'tremolo.jpg',
        colorsIds: [1, 2, 3, 4, 5],
        fabrics: [1, 2, 3, 4, 5,],
        desc: 'Ekran markizy wykonany jest z odpornego na UV i przedarcia poliestru. Kaseta powinna być instalowana na drewnianym słupku w pozycji pionowej'
    },
]

// jak dodajesz nowy kolor np. o id 5 wrzuc potem do models.colorsIds[5]
export const colors = [
    { name: 'RAL 9006', id: 1, code: '#999999', font: '#fff' },
    { name: 'RAL 8019', id: 2, code: '#372722', font: '#fff' },
    { name: 'RAL 7016S', id: 3, code: '#4c4c4b', font: '#fff' },
    { name: 'RAL 9016', id: 4, code: '#fff', font: '#000' },
    { name: 'RAL 9005', id: 5, code: '#000', font: '#fff' },
    { name: 'RAL 7016 S', id: 6, code: '#4c4c4b', font: '#616376' },
    { name: '029/82160', id: 7, code: '#4c4c4b', font: '#616376' },
    { name: 'RAL 1013', id: 8, code: '#faf2e1', font: '#616376' },
]

export const fabric = [
    {
        name: 'T-1300',
        id: 1,
        bgImg: 't-1300.jpg'

    },
    {
        name: 'REC-148',
        id: 2,
        bgImg: 'rec-148.jpg'
    },
    {
        name: 'REC-122',
        id: 3,
        bgImg: 'rec-122.jpg'
    },
    {
        name: 'REC-117',
        id: 4,
        bgImg: 'rec-117.jpg'
    },
    {
        name: 'REC-115',
        id: 5,
        bgImg: 'rec-115.jpg'
    },
    {
        name: 'REC-779',
        id: 6,
        bgImg: 'rec-779.jpg'
    }
]

export const dimensions = [
    { productId: 1, width: [180, 200], range: [100, 150] },
    { productId: 2, width: [120, 200], range: [100, 150] },
    { productId: 3, width: [120, 230], range: [100, 190] },
    { productId: 4, width: [100, 250], range: [140, 190] },
]