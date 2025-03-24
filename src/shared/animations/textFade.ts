export const textFade = {
    initial: {
        opacity: 0, y: 10,
        transition: {duration: 0.5, ease: 'easeInOut'},
        viewport: {once: true, margin: '-50px'},
    },
    animate: {
        opacity: 1, y: 0,
        transition: {duration: 0.5, ease: 'easeInOut'},
        viewport: {once: true, margin: '-50px'},
    },
}