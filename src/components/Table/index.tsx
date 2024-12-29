
/**
 * A generic table component that dynamically renders data based on provided column configurations.
 *
 * @template T - The type of the data that will be rendered in each row of the table.
 * @param {CustomTableProps<T>} props - The props required by the GenericTable component.
 * @param {T[]} props.data - The array of data objects to be displayed.
 * @param {ITableColumn<T>[]} props.columns - Column configurations for displaying data in the table.
 * @param {{ state: boolean, Component?: ReactNode }} props.loading - An object that manages loading state and an optional custom component.
 * @param {(element: T) => void} [props.selectItem] - An optional function triggered when a row is clicked, passing the selected item as an argument.
 */

import { CustomTableProps } from "./table.types";

const RenderRows = <T,>({ data, columns, selectItem }: Omit<CustomTableProps<T>, "loading">) => {
    if (data.length === 0) {
        return (
            <tr>
                <td colSpan={columns.length} className="text-center p-4">
                    Sin resultados
                </td>
            </tr>
        );
    }

    return data.map((item, index) => (
        <tr
            onClick={selectItem && (() => selectItem(item))}
            key={index}
            className={`border border-none ${selectItem && "hover:bg-slate-50 rounded-lg"
                }`}
        >
            {columns.map((column, e) => (
                <td key={e} className="bg-white color text-black">
                    {column.render(item)}
                </td>
            ))}
        </tr>
    ));
};

export const GenericTable = <T,>({ data, columns, loading, selectItem }: CustomTableProps<T>) => {
    if (loading.state) {
        return loading.Component || <div>Cargando...</div>;
    }

    return (
        <div className="lg:overflow-x-hidden">
            <table className="lg:table w-full" align="center">
                <thead className="bg-sky-700 h-14 !rounded-tl-lg">
                    <tr className="border border-none">
                        {columns.map((column, i) => (
                            <th key={i} className="text-white">
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <RenderRows columns={columns} data={data} selectItem={selectItem} />
                </tbody>
            </table>
        </div>
    );
};
