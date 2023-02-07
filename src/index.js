import onOpen from './onOpen';
import showSideBar from './sidebar';
import sendEmail from './send';
import doGet from './webapp';

global.onOpen = onOpen;
global.showSideBar = showSideBar;
global.sendEmail = sendEmail;
global.doGet = doGet;
