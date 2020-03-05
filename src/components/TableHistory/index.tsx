import React from 'react';
import { TableHistoryContainer } from '../StyledComponents';

interface TableHistoryPropsInterface {
    columns: any,
    data: any,
    hide: any,
    onClickTr: (data: any) => void
}

const TableHistory: React.FC<TableHistoryPropsInterface> = (props) => {
    return <TableHistoryContainer>
            <thead className="">
            <tr>
                {
                    props.columns.map((th: any, index: number) => {
                        let hide:any = props.hide.find((c:string) => {return c === th.key});
                        hide = !!hide ? "column-invisible" : "";

                        return <th key={index}
                                   className={hide}
                                   scope="col">
                            {th.text}
                        </th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                props.data.map((tr: any, index: number) => {
                    return <tr key={index} onClick={() => {props.onClickTr(tr)}}>
                      {
                        props.columns.map((td: any, index2: number) => {
                            let hide:any = props.hide.find((c:string) => {return c === td.key});
                            hide = !!hide ? "column-invisible" : "";
                            let render = td.render;

                            if(typeof render === "function") {
                                return <td key={index2}>{render(tr[td.key], tr)}</td>
                            }else if(typeof render === "string") {
                                return render
                            }

                            return <td key={index2} className={hide}>
                                {tr[td.key]}
                            </td>
                        })
                      }
                    </tr>
                })
            }
            </tbody>
        </TableHistoryContainer>

};

export default TableHistory;