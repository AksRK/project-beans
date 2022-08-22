import './List.scss'
import {useEffect} from "react";

function List({list}) {
    useEffect(() => {
        const listDom = document.querySelector('.list')
        listDom.classList.add('opacity-animated')
        const timeout = setTimeout(() => {
            listDom.classList.remove('opacity-animated')
        }, 1000)

    }, [list])


    return (
        <ul className={'list list--dotted'}>
            {
                list.value.map((item) => {
                    const liId = list.value.indexOf(item)

                    return (
                        <li key={liId} className={'list__item'}>
                            <span></span>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;