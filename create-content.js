const w3 = 'http://www.w3.org/';

const create = element => document.createElementNS(w3 + '1999/xhtml', element);

const createContent = (markup, type) =>
                        (type === 'svg' ? createSVG : createHTML)(markup);

const createHTML = html => {
  const template = create('template');
  template.innerHTML = html;
  return template.content;
};

const createSVG = svg => {
  const {content} = create('template');
  const template = create('div');
  template.innerHTML = '<svg xmlns="' + w3 + '2000/svg">' + svg + '</svg>';
  const {childNodes} = template.firstChild;
  let {length} = childNodes;
  while (length--)
    content.appendChild(childNodes[0]);
  return content;
};

export default createContent;
