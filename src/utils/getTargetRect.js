export const getTargetRect = (id) => {
    const element = document.getElementById(id);

    // 获取元素的位置信息
    const rect = element.getBoundingClientRect();
    // 返回位置信息
    return [rect.left, rect.top, rect.right, rect.bottom, rect.width, rect.height]
}