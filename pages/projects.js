import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { useComplexLanguageMethod } from '../contexts/languageContext';
import Default from '../projects/Default';

export const subject$ = new BehaviorSubject('');
const projects = [
  '404 Error',
  'Address Bar',
  'Ajax',
  'Apache',
  'Autoresponder',
  'BitTorrent',
  'Blog',
  'Bookmark',
  'Bot',
  'Broadband',
  'Captcha',
  'Certificate',
  'Client',
  'Cloud',
  'Cloud Computing',
  'CMS',
  'Cookie',
  'CSS',
  'Cyberspace',
  'Denial of Service',
  'DHCP',
  'Dial-up',
  'DNS Record',
  'Domain Name',
  'Download',
  'E-mail',
  'Facebook',
  'FiOS',
  'Firewall',
  'FTP',
  'Gateway',
  'Google',
  'Google Drive',
  'Gopher',
  'Hashtag',
  'Hit',
  'Home Page',
  'HTML',
  'HTTP',
  'HTTPS',
  'Hyperlink',
  'Hypertext',
  'ICANN',
  'Inbox',
  'Internet',
  'InterNIC',
  'IP',
  'IP Address',
  'IPv4',
  'IPv6',
  'IRC',
  'iSCSI',
  'ISDN',
  'ISP',
  'JavaScript',
  'jQuery',
  'Meta Search Engine',
  'Meta Tag',
  'Minisite',
  'Mirror',
  'Name Server',
  'Packet',
  'Page View',
  'Payload',
  'Phishing',
  'POP3',
  'Protocol',
  'Scraping',
  'Search Engine',
  'Social Networking',
  'Socket',
  'Spam',
  'Spider',
  'Spoofing',
  'SSH',
  'SSL',
  'Static Website',
  'Twitter',
  'XHTML',
];

export const getSuggestionsFromArray = (projects) => (subject) => {
  return subject.pipe(
    debounceTime(200), // wait until user stops typing
    distinctUntilChanged(),
    map((value) =>
      !value || value === ''
        ? projects
        : projects.filter((p) => p.toLocaleLowerCase().includes(value))
    )
  );
};

function Projects() {
  const { t } = useComplexLanguageMethod();
  const getSuggestions = getSuggestionsFromArray(projects);
  return (
    <div id='page-project-id'>
      <p>{t('projectsPageText')}</p>
      <Default getSuggestions={getSuggestions} />
    </div>
  );
}

export default Projects;
