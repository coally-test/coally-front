import moment from 'moment';

type DateFormatType = {
    date: string | Date;
    view_time?: boolean;
};

export const formatDate = ({ date, view_time = true }: DateFormatType): string => {
    if (!date) {
        return 'Fecha no disponible';
    }

    const momentDate = moment.utc(date);

    if (!view_time) {
        return momentDate.format('YYYY-MM-DD');
    }
    return momentDate.format('YYYY-MM-DD HH:mm:ss');
};
