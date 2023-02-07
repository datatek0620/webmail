/* const getGmailAliasList = () => {
  const aliases = GmailApp.getAliases();
  aliases.push(Session.getActiveUser().getEmail());
  return aliases;
}; */

const getGmailAliasList = () => {
  return [Session.getActiveUser().getEmail(), ...GmailApp.getAliases()];
};

export default getGmailAliasList;
