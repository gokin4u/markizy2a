// tutaj ustawiacie parametry produktów , dodajecie nowe ewentualnie
export const category = [
    { name: 'Pełna', id: 1 },
    { name: 'Półkaseta', id: 2 },
];

/* bgImg to sciezki do zdjec umieszczonych w folderze public, po wywołaniu npm run build, fotki lądują w folderze dist,
w folderze public trzeba tez wrzucic fotki wariantow takich jak Moderno-1-1.jpg*/
export const models = [
    { name: 'Moderno', id: 1, categoryId: 1, price: 100, bgImg: 'moderno.jpg', colorsIds: [3, 4] },
    { name: 'Presto', id: 2, categoryId: 1, price: 150, bgImg: 'presto.jpg', colorsIds: [1, 2] },
    { name: 'Agadio', id: 3, categoryId: 2, price: 120, bgImg: 'adagio.jpg', colorsIds: [1, 2, 3] },
    { name: 'Tremolo', id: 4, categoryId: 2, price: 200, bgImg: 'tremolo.jpg', colorsIds: [1, 2, 3, 4] },
]

// jak dodajesz nowy kolor np. o id 5 wrzuc potem do models.colorsIds[5]
export const colors = [
    { name: 'czarny', id: 1, code: '#fff', font: '#000' },
    { name: 'biały', id: 2, code: '#000', font: '#fff' },
    { name: 'brązowy', id: 3, code: '#ccc', font: '#000' },
    { name: 'antracyt struktura', id: 4, code: '#ffd', font: '#000' },
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