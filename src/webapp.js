import getGmailAliasList from './alias';

const doGet = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList();
  const html = template.evaluate().setTitle('WebMail');
  return html;
};

export default doGet;
