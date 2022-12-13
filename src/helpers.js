function choice(items) {
  const i = Math.floor(Math.random() * items.length);
  return items[i];
}

function remove(items, item) {
  const i = items.indexOf(item);
  if (i === -1) return undefined;
  return [...items.slice(0, i), ...items.slice(i + 1)];
}

export { choice, remove };
