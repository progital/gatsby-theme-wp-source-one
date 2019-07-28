const queryLocalImage = (name, edges) => {
  if (!Array.isArray(edges)) {
    return undefined;
  }

  const found = edges.find(({ node }) => node.relativePath === name);

  return found ? found.node.childImageSharp.fluid : found;
};

export default queryLocalImage;
