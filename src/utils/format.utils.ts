export const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date
        .toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: '2-digit'
        })
        .replace(',', '')
        .replace(/(\d{2})$/, '‘$1');
};
