function removeUrlAnchor(url) {
  const anchor = "#";
  const indexOfAnchor = url.indexOf(anchor);
  const newURL = url.substr(0, indexOfAnchor);
  if (indexOfAnchor === -1) {
    return url;
  }
  return newURL;
}
