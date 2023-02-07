const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('⌲ WebMail')
    .addItem('Show SideBar', 'showSideBar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
