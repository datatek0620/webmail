import getGmailAliasList from './alias';

const showSideBar = () => {
  const template = HtmlService.createTemplateFromFile('index');
  template.aliases = getGmailAliasList();
  const html = template.evaluate().setTitle('WebMail');
  SpreadsheetApp.getUi().showSidebar(html);
};

export default showSideBar;
