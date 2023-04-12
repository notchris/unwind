async function parseExample(path: string, id: string) {
  const res = await fetch(`${path}/${id}.html`);
  let text = await res.text();
  const div = document.createElement("div");
  div.innerHTML = text;
  const comments = Array.prototype.filter.call(div.childNodes, (el) => {
    return el.nodeType == 8;
  });

  let title = "Untitled";
  let tags = [];
  if (comments.length) {
    title = comments[0].data || "Untitled";
    tags = comments[1] ? comments[1].data.split(",") : [];
  }

  text = text.replace(/<\!--.*?-->/g, "");
  text = text.trim();

  return { id, title, code: text, tags };
}

export default async function parseExamples(path: string, examples: string[]) {
  const arr: Promise<{
    id: string;
    title: any;
    code: string;
    tags: string[];
  }>[] = [];

  examples.forEach((id) => {
    arr.push(parseExample(path, id));
  });
  return await Promise.all(arr);
}
