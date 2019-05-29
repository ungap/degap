const svg = 'http://www.w3.org/2000/svg';
const xhtml = 'http://www.w3.org/1999/xhtml';

const create = element => document.createElementNS(xhtml, element);

const createContent = (markup, type) =>
                        (type === 'svg' ? createSVG : createHTML)(markup);

const createHTML = html => {
  const template = create('template');
  template.innerHTML = html;
  return template.content;
};

const createSVG = xml => {
  const {content} = create('template');
  const template = create('div');
  template.innerHTML = '<svg xmlns="' + svg + '">' + xml + '</svg>';
  const {childNodes} = template.firstChild;
  let {length} = childNodes;
  while (length--)
    content.appendChild(childNodes[0]);
  return content;
};

export default createContent;
