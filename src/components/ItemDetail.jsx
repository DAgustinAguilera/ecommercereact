 export const ItemDetail = ({item}) => {

    return <>
        <div>
            <h1>{item.nombre}</h1>
            <img src={item.imagen} alt="" />
        </div>
        </>
}

