import {ListNoteGroupedByDate, NoteOverview} from "@/types/note-overview";

export const getTimeAgo = (dateInput: Date | string): string => {
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
    const today = new Date();

    // Đặt giờ, phút, giây, mili giây về 0 để so sánh chính xác ngày
    const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const diffTime = todayMidnight.getTime() - dateMidnight.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

    if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays > 1 && diffDays <= 7) {
        return 'Last Week';
    } else if (diffDays > 7 && diffDays <= 30) {
        return diffDays + ' days ago';
    } else if (diffDays > 30 && diffDays <= 60) {
        return 'Last Month';
    } else if (diffDays > 60) {
        const months = Math.floor(diffDays / 30);
        return months + (months === 1 ? ' month ago' : ' months ago');
    } else {
        return 'In the future'; // Nếu ngày lớn hơn hôm nay
    }
};



export const groupNotesByDate = (
    notes: NoteOverview[]
): ListNoteGroupedByDate[] => {
    const groupedObj = notes.reduce<{ [key: string]: NoteOverview[] }>(
        (groups, note) => {
            // Lấy phần ngày YYYY-MM-DD
            const dateKey = new Date(note.createdAt).toISOString().split('T')[0];
            if (!groups[dateKey]) {
                groups[dateKey] = [];
            }
            groups[dateKey].push(note);
            return groups;
        },
        {}
    );

    const groupedArray: ListNoteGroupedByDate[] = Object.entries(groupedObj).map(
        ([dateStr, notes]) => {
            // Chuyển string "YYYY-MM-DD" sang Date
            // Tạo Date theo UTC để tránh lệch múi giờ
            const [year, month, day] = dateStr.split('-').map(Number);
            const date = new Date(Date.UTC(year, month - 1, day));

            return {
                date,
                notes,
            };
        }
    );

    // Sắp xếp giảm dần theo ngày
    groupedArray.sort((a, b) => b.date.getTime() - a.date.getTime());

    return groupedArray;
};

