import './TableGraphical.scss'
import {useEffect} from 'react';

function TableGraphical({table}) {

    useEffect(() => {
        const tableDom = document.querySelector('.table-graphical')
        tableDom.classList.add('opacity-animated')
        const timeout = setTimeout(() => {
            tableDom.classList.remove('opacity-animated')
        }, 1000)

    }, [table])

    function tdStyle(rwId, tdId) {
        if (rwId === 0) {
            return ' table-graphical__td--title'
        }else if(rwId === table.value.indexOf(table.value.at(-1))) {
            return ' table-graphical__td--border-btm-dark'
        }else {
            return ''
        }
    }

    return (
        <div className={'table-graphical'}>
            {
                table.value.map((row) => {
                    const rowId = table.value.indexOf(row)

                    return (
                        <div key={rowId+1} className={'table-graphical__row'}>
                            {
                                row.map((td) => {
                                    const tdId = row.indexOf(td)

                                    return (
                                        <div key={tdId}
                                             className={'table-graphical__td'+ tdStyle(rowId, tdId)}
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

export default TableGraphical;