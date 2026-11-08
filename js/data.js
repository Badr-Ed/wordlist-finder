/* Data: filter groups, command templates and the wordlist catalog.
   To add a wordlist, add one row to E: [name, path, goal, size, source, use]. */
const GOALS=[['pass','Crack passwords'],['web','Find hidden web paths'],['dns','Find subdomains'],['user','Guess usernames'],['def','Default logins'],['wifi','WiFi handshakes'],['fuzz','Fuzz inputs'],['upload','Test file uploads']];
const SIZES=[['S','Under 10k'],['M','10k to 500k'],['L','500k to 20M'],['X','Over 20M']];
const SRC=[['K','Kali built in'],['S','SecLists']];
const KP='/usr/share/wordlists/',SP='/usr/share/seclists/';
const CMD={pass:'hashcat -m 0 hash.txt {p}',web:'gobuster dir -u http://TARGET -w {p}',dns:'gobuster dns -d example.com -w {p}',user:'hydra -L {p} -P pass.txt ssh://TARGET',def:'hydra -L users.txt -P {p} ftp://TARGET',wifi:'aircrack-ng -w {p} capture.cap',fuzz:"ffuf -u 'http://TARGET/?q=FUZZ' -w {p}",upload:''};
// n name, p path, g goal, z size, s source, d use
const E=[
['rockyou.txt','rockyou.txt','pass','L','K','14M leaked passwords, the default for cracking. Run gunzip on rockyou.txt.gz first.'],
['fasttrack.txt','fasttrack.txt','pass','S','K','Small list for quick password spraying.'],
['john.lst','john.lst','pass','S','K','John the Ripper’s built in common passwords.'],
['unix_passwords.txt','metasploit/unix_passwords.txt','pass','S','K','Common Unix account passwords from Metasploit.'],
['10k-most-common.txt','Passwords/Common-Credentials/10k-most-common.txt','pass','S','S','The 10,000 most common passwords, a fast first try.'],
['10-million-password-list-top-1000000.txt','Passwords/Common-Credentials/10-million-password-list-top-1000000.txt','pass','L','S','One million ranked passwords for longer brute force runs.'],
['darkc0de.txt','Passwords/darkc0de.txt','pass','L','S','Classic large password list, use after rockyou.'],
['Keyboard-Walks','Passwords/Keyboard-Walks/','pass','S','S','Patterns like qwerty and 1qaz2wsx that people really use.'],
['common.txt','dirb/common.txt','web','S','K','About 4.6k common paths, the fast first pass.'],
['big.txt','dirb/big.txt','web','M','K','About 20k paths for a deeper dirb or gobuster scan.'],
['directory-list-2.3-medium.txt','dirbuster/directory-list-2.3-medium.txt','web','M','K','About 220k entries, the standard choice for CTF web boxes.'],
['admin-panels.txt','wfuzz/general/admin-panels.txt','web','S','K','Locations of admin and login pages.'],
['raft-medium-directories.txt','Discovery/Web-Content/raft-medium-directories.txt','web','M','S','Directory names seen in the wild, often better than DirBuster lists.'],
['raft-medium-files.txt','Discovery/Web-Content/raft-medium-files.txt','web','M','S','File names to pair with the directories list.'],
['quickhits.txt','Discovery/Web-Content/quickhits.txt','web','S','S','Known sensitive files and paths like .git and backups.'],
['api-endpoints.txt','Discovery/Web-Content/api/api-endpoints.txt','web','S','S','Common API endpoint names.'],
['CMS','Discovery/Web-Content/CMS/','web','M','S','Paths for WordPress, Joomla and Drupal sites.'],
['dnsmap.txt','dnsmap.txt','dns','S','K','Small subdomain list used by dnsmap.'],
['subdomains-top1million-5000.txt','Discovery/DNS/subdomains-top1million-5000.txt','dns','S','S','Top 5,000 subdomains, the quick pass.'],
['subdomains-top1million-110000.txt','Discovery/DNS/subdomains-top1million-110000.txt','dns','L','S','Thorough subdomain brute force.'],
['dns-Jhaddix.txt','Discovery/DNS/dns-Jhaddix.txt','dns','X','S','Huge list built for bug bounty recon.'],
['unix_users.txt','metasploit/unix_users.txt','user','S','K','Common Unix usernames like root and admin.'],
['top-usernames-shortlist.txt','Usernames/top-usernames-shortlist.txt','user','S','S','Tiny list of the most likely usernames.'],
['names.txt','Usernames/Names/names.txt','user','M','S','Common first and last names for building logins.'],
['xato-net-10-million-usernames.txt','Usernames/xato-net-10-million-usernames.txt','user','X','S','Ten million real usernames, only for last resort runs.'],
['default-passwords.csv','Passwords/Default-Credentials/default-passwords.csv','def','S','S','Vendor default logins in one file.'],
['routers_userpass.txt','metasploit/routers_userpass.txt','def','S','K','Default username and password pairs for routers.'],
['tomcat_mgr_default_pass.txt','metasploit/tomcat_mgr_default_pass.txt','def','S','K','Default passwords for the Tomcat manager.'],
['common-snmp-community-strings.txt','Discovery/SNMP/common-snmp-community-strings.txt','def','S','S','Likely SNMP community strings.'],
['wifite.txt','wifite.txt','wifi','S','K','Small WPA password list bundled with wifite.'],
['probable-v2-wpa-top4800.txt','Passwords/WiFi-WPA/probable-v2-wpa-top4800.txt','wifi','S','S','Likely WPA passphrases, 8 characters or longer.'],
['SQL.txt','wfuzz/Injections/SQL.txt','fuzz','S','K','Basic SQL injection payloads.'],
['LFI-Jhaddix.txt','Fuzzing/LFI/LFI-Jhaddix.txt','fuzz','M','S','Path traversal and file inclusion payloads.'],
['XSS-Jhaddix.txt','Fuzzing/XSS/XSS-Jhaddix.txt','fuzz','M','S','Cross site scripting payloads.'],
['special-chars.txt','Fuzzing/special-chars.txt','fuzz','S','S','Special characters that break input handling.'],
['big-list-of-naughty-strings.txt','Fuzzing/big-list-of-naughty-strings.txt','fuzz','M','S','Strings that crash or confuse applications.'],
['eicar-com.txt','Payloads/Anti-Virus/eicar-com.txt','upload','S','S','Harmless EICAR file, checks that an upload scanner flags malware.'],
['null-byte','Payloads/File-Names/null-byte/','upload','S','S','File names with null bytes, tests extension filters.'],
['Zip-Traversal','Payloads/Zip-Traversal/','upload','S','S','Zips that try to write outside the extraction folder.'],
['Zip-Bombs','Payloads/Zip-Bombs/','upload','S','S','Archives that test whether an extractor limits decompression.'],
['laudanum-1.0','Web-Shells/laudanum-1.0/','upload','M','S','Injectable PHP, ASP and JSP shells for authorized tests. Remove after testing.']
].map(a=>({n:a[0],p:(a[4]=='K'?KP:SP)+a[1],g:a[2],z:a[3],s:a[4],d:a[5]}));
