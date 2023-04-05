async function parseExample(path: string, id: string) {
  const res = await fetch(`${path}/${id}.html`);
  let text = await res.text();
  const div = document.createElement("div");
  div.innerHTML = text;
  const comments = Array.prototype.filter.call(div.childNodes, (el) => {
    return el.nodeType == 8;
  });
  const title = comments.length ? comments[0].data : "Untitled";

  text = text.replace(/<\!--.*?-->/g, "");
  text = text.trim();

  return { id, title, code: text };
}

export default async function parseExamples(path: string, examples: string[]) {
  const arr: Promise<{
    id: string;
    title: any;
    code: string;
  }>[] = [];

  examples.forEach((id) => {
    arr.push(parseExample(path, id));
  });
  return await Promise.all(arr);
}
