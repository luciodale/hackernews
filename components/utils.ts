export function capitalize(sentence: string) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export function extractHostname(url: string) {
  return url ? new URL(url).hostname : null;
}
