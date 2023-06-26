const DATE_UNITS = [
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
]

const getDatesDiff = (timestamp) => {
    const now = Date.now();
    const elapsed = (timestamp - now) / 1000 // getting rid of the milliseconds

    for (const [unit, secondsPerUnit] of DATE_UNITS) {
        if (Math.abs(elapsed) > secondsPerUnit || unit === 'second' ) {
            const value = Math.round(elapsed / secondsPerUnit)
            return { value, unit }
        }
    }

}

export default function useTimeAgo(timestamp) {
    const { value, unit } = getDatesDiff(timestamp)
    const rtf = new Intl.RelativeTimeFormat('en', {style: 'long'});
    return rtf.format(value, unit)
}