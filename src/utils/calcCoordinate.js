export const calcCoordinate = (containerRect, targetRect) => {
    const containerX = containerRect[0],
        containerY = containerRect[1],
        targetX = targetRect[0],
        targetY = targetRect[1]
    const x = targetX - containerX, y = targetY - containerY
    return {
        x: x > 0 ? x : 0,
        y: y > 0 ? y : 0
    }
}