const render = (template, data) => {
	template = template.replace(/<%=(.*?)%>/gm, '${$1}');
  const templateFragments = template.split(/<%.*?%>/gm);
  const codeFragments = template.match(/<%.*?%>/gm).map(m => m.substring(2, m.length-2));
  let t = 0, c = 0;
  return eval(`(() => {
  	${Object.keys(data).map(k => `var ${k} = ${JSON.stringify(data[k])};`).join('\n')}
    var result = '';
    ${Array(templateFragments.length + codeFragments.length).fill(0).reduce((code, _, i) => {
      if (i % 2 === 0) {
        if (templateFragments[t].trim().length > 0) {
          code += `
            result += \`${templateFragments[t]}\`;
          `;
        }
        t += 1;
      } else {
        code += codeFragments[c];
        c += 1;
      }
      return code;
    }, '')}
    return result;
  })()`);
};
