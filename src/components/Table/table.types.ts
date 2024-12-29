import { ReactNode } from "react";

/**
 * Defines a type that excludes the `__typename` property from a given type.
 * 
 * @template Type - The base type from which the properties are extracted.
 */
export type IDataProperty<T> = {
    [Property in keyof T]: T[Property];
};

/**
 * Describes the structure of a column in the table.
 * 
 * @template T - The type of data being displayed in the table.
 * @property {keyof IDataProperty<T> | "actions"} id - Unique identifier for the column, can be a property of `T` or "actions" for custom actions.
 * @property {string | ReactNode} label - The column header text or component.
 * @property {(item: IDataProperty<T>) => ReactNode} render - Function that defines how to render a cell in the column based on the row's data.
 */
export interface ITableColumn<T> {
    id: keyof IDataProperty<T> | "actions";
    label: string | ReactNode;
    render: (item: IDataProperty<T>) => ReactNode;
}
/**
 * Props for the custom table component, responsible for rendering data in a tabular format.
 *
 * @template T - The type of data used in the table rows.
 * 
 * @template T[] - Array of data objects to be displayed in the table.
 */
export interface CustomTableProps<T> {
    /**
     * The array of data objects to be displayed in the table.
     */
    data: T[];

    /**
     * Configuration for table columns, defining how the data is displayed.
     */
    columns: ITableColumn<T>[];

    /**
     * Loading state of the table.
     * 
     * @property {boolean} state - Indicates if the table is currently loading.
     * @property {ReactNode} [Component] - Optional custom component to render while loading.
     */
    loading: {
        state: boolean;

        Component?: ReactNode;
    };

    /**
     * Optional flag indicating if there was an error during data fetching.
     */
    error?: boolean;

    /**
     * Optional function triggered when a row is clicked, passing the selected item as an argument.
     */
    selectItem?: (element: T) => void;
}
