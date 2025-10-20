export function fade(node: HTMLElement) {
  let y: number;
  let opacity: number;

  const style = getComputedStyle(node);
  const transform = style.transform === 'none' ? '' : style.transform;

  return {
    delay: 0,
    duration: 600,
    css: (t: number) => {
      y = 20 * (1 - t);
      opacity = t;
      return `
        transform: ${transform} translateY(${y}px);
        opacity: ${opacity};
      `;
    }
  };
}
