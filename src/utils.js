export const generateTimeOptions = () => {
    const options = [];
    for (let i = 5; i <= 360; i += 5) {
        let label;
        if (i % 60 === 0) {
            label = `${i / 60} hour${i > 60 ? 's' : ''}`;
        } else {
            label = `${Math.floor(i / 60)} hour${i >= 60 ? 's' : ''} ${i % 60} minutes`;
        }
        options.push({ label, value: i });
    }
    return options;
};