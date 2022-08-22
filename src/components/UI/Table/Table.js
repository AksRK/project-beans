import './Table.scss'
import {useEffect} from 'react';

function Table({table}) {

    useEffect(() => {
        const tableDom = document.querySelector('.table')
        tableDom.classList.add('opacity-animated')
        const timeout = setTimeout(() => {
            tableDom.classList.remove('opacity-animated')
        }, 1000)

    }, [table])

    function tdStyle(rwId, tdId) {
        if (rwId === 0 && tdId === 0) {
            return ' table__td--bold table__td--main'
        }else if (rwId === 0 && tdId >= 1) {
            return ' table__td--title'
        }else if (rwId >= 1 && tdId === 0) {
            return ' table__td--main'
        }else {
            return ''
        }
    }

    return (
        <div className={'table'}>
            {
                table.value.map((row) => {
                    const rowId = table.value.indexOf(row)

                    return (
                        <div key={rowId} className={'table__row'}>
                            {
                                row.map((td) => {
                                    const tdId = row.indexOf(td)

                                    return (
                                        <div key={tdId}
                                             className={'table__td'+ tdStyle(rowId, tdId)}
                                        >{td}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Table;