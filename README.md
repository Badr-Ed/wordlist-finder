# Kali Linux and SecLists Wordlist Guide
 
A file by file map of the wordlists that ship with Kali Linux and the SecLists collection, with a one line use case for each.
 
**Accuracy notes**
 
- Sections 7, 8 and 9 (`Payloads/`, `Web-Shells/`, `Passwords/Cracked-Hashes/`) were checked against the SecLists GitHub repository (commit `dbe00ff`, November 2026).
- The other sections are written from general knowledge of typical Kali installs. File names and versions drift, so confirm locally with `tree /usr/share/wordlists` and `tree -L 3 /usr/share/seclists`.
- SecLists is installed with `sudo apt install seclists`. Kali links it at `/usr/share/wordlists/seclists`.
- Use these lists only against systems you own or have written permission to test.
## Disclaimer
 
> This guide was created with the help of Claude, an AI assistant made by Anthropic. It is for educational purposes only. The author is not responsible for any illegal activity or misuse linked to it. Use these lists only on systems you own or have written permission to test.
 
## Contents
 
1. Kali root `/usr/share/wordlists/`
2. `dirb/` and `dirbuster/`
3. `wfuzz/`
4. `metasploit/`
5. SecLists `Discovery/`
6. SecLists `Passwords/` and `Usernames/`
7. SecLists `Payloads/`
8. SecLists `Web-Shells/`
9. SecLists `Passwords/Cracked-Hashes/`
10. SecLists `Fuzzing/` and the rest
11. Quick picks
---
 
## 1. Kali root `/usr/share/wordlists/`
 
```
rockyou.txt.gz         14M leaked passwords, the default for cracking (gunzip first)
john.lst               John the Ripper's built in common passwords
fasttrack.txt          small list for quick password spraying
nmap.lst               passwords used by Nmap brute force scripts
sqlmap.txt             table and column names for sqlmap guessing
dnsmap.txt             subdomain names for dnsmap brute forcing
wifite.txt             small WPA password list for wifite
seclists/              link to the SecLists collection
amass/                 subdomain lists for amass enumeration
fern-wifi/common.txt   WPA passwords for Fern WiFi Cracker
legion/                small user and pass lists for service brute forcing
```
 
## 2. `dirb/` and `dirbuster/`
 
```
dirb/
├── common.txt              ~4.6k common paths, fast first pass
├── small.txt               tiny list for quick checks
├── big.txt                 ~20k paths for deeper scans
├── extensions_common.txt   file extensions (.bak, .old, .php)
├── indexes.txt             index file names (index.php, default.asp)
├── mutations_common.txt    suffixes to mutate found names (_old, ~)
├── spanish.txt             Spanish language directory names
├── euskera.txt             Basque language directory names
├── others/                 misc keyword and name lists
├── stress/                 long strings to stress test servers
└── vulns/                  product paths (apache, iis, tomcat, jboss)
 
dirbuster/
├── directory-list-2.3-small.txt          ~87k entries, quick directory scan
├── directory-list-2.3-medium.txt         ~220k entries, the standard CTF choice
├── directory-list-lowercase-2.3-*.txt    same lists, lowercase only
├── directory-list-1.0.txt                older legacy list
├── apache-user-enum-1.0.txt              usernames for Apache ~user probing
├── apache-user-enum-2.0.txt              expanded version of the above
└── directories.jbrofuzz                  JBroFuzz format directory list
```
 
## 3. `wfuzz/`
 
```
wfuzz/
├── general/
│   ├── common.txt              common paths, quick scan
│   ├── big.txt                 large path list
│   ├── medium.txt              mid sized path list
│   ├── admin-panels.txt        admin login page locations
│   ├── http_methods.txt        GET, PUT, DELETE and others for method testing
│   └── extensions_common.txt   common file extensions
├── Injections/
│   ├── SQL.txt                 basic SQL injection payloads
│   ├── XSS.txt                 cross site scripting payloads
│   ├── XML.txt                 XML injection and XXE strings
│   ├── Traversal.txt           directory traversal payloads
│   ├── All_attack.txt          mixed attack strings for broad fuzzing
│   └── bad_chars.txt           characters that break input handling
├── webservices/
│   ├── ws-dirs.txt             web service directory names
│   └── ws-files.txt            web service file names
├── vulns/                      per product vulnerable paths
├── stress/                     buffer overflow style strings
└── others/
    ├── common_pass.txt         common passwords
    └── names.txt               common usernames
```
 
## 4. `metasploit/`
 
```
metasploit/
├── unix_passwords.txt          common Unix account passwords
├── password.lst                general common password list
├── unix_users.txt              common Unix usernames
├── namelist.txt                common names for user enumeration
├── common_roots.txt            common password root words
├── http_default_users.txt      default web login usernames
├── http_default_pass.txt       default web login passwords
├── tomcat_mgr_default_*.txt    Tomcat manager default credentials
├── snmp_default_pass.txt       SNMP community strings
├── routers_userpass.txt        default router logins
├── burnett_top_*.txt           top passwords from Burnett's research
└── ftp, postgres, mysql, oracle, sap lists   service default credentials
```
 
## 5. SecLists `Discovery/`
 
```
Discovery/
├── Web-Content/
│   ├── common.txt                          quick first pass paths
│   ├── big.txt                             large generic path list
│   ├── raft-small/medium/large-directories.txt   directory names, best general choice
│   ├── raft-small/medium/large-files.txt         file names, pair with directories
│   ├── raft-*-extensions.txt               file extensions seen in the wild
│   ├── raft-*-words.txt                    general web words
│   ├── directory-list-2.3-*.txt            the DirBuster lists, included copy
│   ├── quickhits.txt                       known sensitive files and paths
│   ├── web-extensions.txt                  web file extensions
│   ├── LinuxFileList.txt                   common Linux file paths for LFI
│   ├── Common-DB-Backups.txt               database backup file names
│   ├── api/                                API endpoint, object and action names
│   ├── CMS/                                WordPress, Joomla, Drupal paths
│   ├── URLs/                               sample URL path lists
│   └── Programming-Language-Specific/      paths for PHP, Java, ASP and others
├── DNS/
│   ├── subdomains-top1million-5000.txt     quick subdomain pass
│   ├── subdomains-top1million-20000.txt    medium subdomain pass
│   ├── subdomains-top1million-110000.txt   thorough subdomain pass
│   ├── namelist.txt                        general hostnames
│   ├── dns-Jhaddix.txt                     huge list for bug bounty recon
│   └── bitquark-subdomains-top100K.txt     alternative 100k subdomain list
├── SNMP/                                   SNMP community strings
├── Infrastructure/                         service names, ports, hostnames
└── Variables/                              common parameter names for fuzzing
```
 
## 6. SecLists `Passwords/` and `Usernames/`
 
```
Passwords/
├── Common-Credentials/
│   ├── top 100, 1000, 10k, 100k lists          most common passwords, size varies
│   └── 10-million-password-list-top-*.txt      ranked passwords for brute force
├── Leaked-Databases/       rockyou, phpbb, myspace and other breach lists
├── Default-Credentials/
│   ├── default-passwords.csv                   vendor default logins in one file
│   └── per device lists                        routers, cameras, apps
├── WiFi-WPA/
│   └── probable-v2-wpa-top4800.txt             likely WPA passphrases, 8+ characters
├── Software/               passwords bundled with cracking tools
├── Cracked-Hashes/         see section 9
├── Permutations/           mangled and leetspeak variants
├── Keyboard-Walks/         qwerty style patterns
├── Malware/                passwords used by botnets and malware
├── Honeypot-Captures/      real guesses attackers sent to honeypots
├── Pwdb-Public/            very large public password databases
├── bt4-password.txt        old BackTrack password list
└── darkc0de.txt            classic large password list
 
Usernames/
├── top-usernames-shortlist.txt             tiny list: admin, root, test
├── xato-net-10-million-usernames.txt       huge real username list
├── cirt-default-usernames.txt              vendor default usernames
├── Names/
│   ├── names.txt                           common first and last names
│   ├── malenames-usa-top1000.txt           US male first names
│   └── femalenames-usa-top1000.txt         US female first names
└── Honeypot-Captures/                      usernames attackers tried on honeypots
```
 
## 7. SecLists `Payloads/` (verified)
 
Despite the name, this folder is not a list of exploit strings. It holds test files for checking how upload handlers, archive extractors, scanners and parsers behave.
 
```
Payloads/
├── README.md                                   overview of the payload test files
├── PHPInfo.zip                                 phpinfo test file packaged as a zip (~250 KB)
├── Anti-Virus/
│   └── eicar-com.txt                           EICAR test string, safely triggers antivirus detection
├── File-Names/
│   ├── README.md                               notes on the file name test cases
│   ├── directory-traversal.zip                 zip with traversal paths, tests extraction handling
│   ├── max-length.zip                          zip with a maximum length file name
│   ├── exec/
│   │   ├── Hello$(hostname)World.txt           name with command substitution, tests unsafe shell use
│   │   └── Hello`hostname`World.txt            backtick variant of the same test
│   └── null-byte/
│       ├── Hello%00World.txt                   null byte in name, tests truncation bugs
│       └── Hello.php%00World.txt               null byte after .php, tests upload extension filters
├── Flash/
│   └── xssproject.swf                          legacy Flash file for XSS testing
├── Images/
│   ├── lottapixel.jpg                          tiny file with huge dimensions, tests image processing limits
│   └── uber.gif                                large GIF (~920 KB) for upload and processing tests
├── Zip-Bombs/                                  archives that test decompression limits
│   ├── 42-passwordless.zip                     the classic 42.zip, no password
│   ├── 42-password-42.zip                      same archive, password is 42
│   ├── 338.zip                                 larger nested zip bomb (~346 KB)
│   ├── droste.zip                              recursive zip that contains itself
│   ├── r.zip, r.gz, r.tar.gz                   tiny recursive archives in three formats
│   ├── zbsm.zip                                small zip bomb
│   ├── zblg.zip                                large zip bomb (~9.9 MB)
│   ├── zbxl.zip                                extra large zip bomb (~46 MB)
│   └── zip-bomb.zip                            generic zip bomb
└── Zip-Traversal/                              zips that write outside the extraction folder
    ├── depth-00.zip ... depth-10.zip           traversal at each directory depth, 0 to 10 levels up
    ├── index.php                               tiny file the archives drop, proves the write worked
    └── make.py                                 script that generates the depth-N archives
```
 
## 8. SecLists `Web-Shells/` (verified)
 
Web shells for authorized testing and for defenders building detections. Treat every file here as live malware: keep it out of production web roots and remove it after the test.
 
```
Web-Shells/
├── backdoor_list.txt                           known web shell file names to hunt for or probe
├── CFM/
│   └── shell.cfm.html                          ColdFusion shell
├── FuzzDB/
│   ├── cmd-simple.php                          minimal PHP command runner
│   ├── cmd.php                                 PHP command runner
│   ├── cmd.aspx                                ASP.NET command runner
│   ├── cmd.jsp                                 JSP command runner
│   ├── cmd.sh                                  CGI shell script command runner
│   ├── list.php                                PHP directory listing
│   ├── list.jsp                                JSP directory listing
│   ├── list.sh                                 CGI shell script directory listing
│   ├── up.php                                  PHP file upload helper
│   ├── up.sh                                   CGI shell script upload helper
│   ├── reverse.jsp                             JSP reverse shell
│   └── nc.exe                                  Windows netcat binary for pivoting
├── JSP/
│   └── simple-shell.jsp                        very small JSP shell
├── Magento/
│   ├── newadmin-Inchoo.php                     creates a Magento admin account
│   └── newadmin-KINKCreative.php               alternate Magento admin creator
├── PHP/
│   ├── Dysco.php                               PHP shell with file and command features
│   ├── obfuscated-phpshell.php                 obfuscated shell, tests detection evasion
│   └── another-obfuscated-phpshell.php         second obfuscated sample
├── Vtiger/
│   ├── README.md                               notes on the vulnerable Vtiger plugin
│   ├── manifest.xml                            plugin manifest for upload
│   ├── languages/en_us/VtigerVulnPlugin.php           plugin language stub
│   ├── languages/en_us/Settings/VtigerVulnPlugin.php  settings language stub
│   ├── modules/VtigerVulnPlugin/manifest.xml          module manifest
│   ├── modules/VtigerVulnPlugin/VtigerVulnPlugin.php  module entry file
│   ├── modules/VtigerVulnPlugin/actions/Gateway.php   action that runs commands
│   └── settings/actions/Gateway.php                   settings action that runs commands
├── WordPress/
│   ├── bypass-login.php                        logs in as admin without a password
│   └── plugin-shell.php                        WordPress plugin that exposes a shell
└── laudanum-1.0/                               Laudanum injectable web shell suite
    ├── CREDITS, GPL, README                    authorship, license and usage notes
    ├── asp/
    │   ├── shell.asp                           ASP command shell
    │   ├── file.asp                            ASP file browser and uploader
    │   ├── dns.asp                             ASP DNS lookup tool
    │   └── proxy.asp                           ASP HTTP proxy for pivoting
    ├── aspx/
    │   └── shell.aspx                          ASP.NET command shell
    ├── cfm/
    │   └── shell.cfm                           ColdFusion command shell
    ├── jsp/
    │   ├── cmd.war                             prebuilt WAR with a command shell
    │   ├── makewar.sh                          script that builds the WAR
    │   └── warfiles/                           WAR sources: cmd.jsp, WEB-INF/web.xml, META-INF/MANIFEST.MF
    ├── php/
    │   ├── shell.php                           PHP command shell
    │   ├── php-reverse-shell.php               PHP reverse shell
    │   ├── file.php                            PHP file browser and uploader
    │   ├── dns.php                             PHP DNS lookup tool
    │   ├── host.php                            PHP host lookup tool
    │   ├── proxy.php                           PHP HTTP proxy for pivoting
    │   └── killnc.php                          kills a running netcat listener
    └── wordpress/
        ├── laudanum.php                        WordPress plugin wrapper for the tools
        └── templates/                          plugin copies: shell, php-reverse-shell, file, dns, host,
                                                ipcheck, proxy, killnc and settings (.php)
```
 
## 9. SecLists `Passwords/Cracked-Hashes/` (verified)
 
This folder holds a single file, not a set of cracked hash dumps.
 
```
Passwords/Cracked-Hashes/
└── milw0rm-dictionary.txt       ~675 KB wordlist built from passwords cracked on the old milw0rm site
```
 
## 10. SecLists `Fuzzing/` and the rest
 
```
Fuzzing/
├── LFI/                         path traversal and file inclusion payloads
├── SQLi/                        generic, auth bypass and per database injections
├── XSS/                         XSS payload sets (Jhaddix, RSnake, BruteLogic)
├── XXE/                         XML external entity payloads
├── SSRF/                        server side request forgery targets
├── command injection lists      OS command injection strings
├── User-Agents/                 browser and bot user agent strings
├── special-chars.txt            special characters for input handling tests
├── big-list-of-naughty-strings.txt   strings that break apps
└── extensions-most-common.fuzz.txt   common file extensions for ffuf
 
Pattern-Matching/                grep patterns for secrets, API keys, errors
IOCs/                            malware and threat indicators for defenders
Ai/                              LLM prompt injection and fuzzing lists
Miscellaneous/                   ports, user agents, other odds and ends
```
 
## 11. Quick picks
 
| Goal | Start with | Then |
| --- | --- | --- |
| Directory and file discovery | `dirb/common.txt` | `raft-medium-directories.txt`, then `raft-large-*` |
| Subdomain enumeration | `subdomains-top1million-5000.txt` | `subdomains-top1million-110000.txt` |
| Password cracking | `rockyou.txt` | `Common-Credentials/` lists, then `Leaked-Databases/` |
| Username enumeration | `top-usernames-shortlist.txt` | `xato-net-10-million-usernames.txt` |
| Default credentials | `Default-Credentials/default-passwords.csv` | `metasploit/` service lists |
| WiFi handshakes | `probable-v2-wpa-top4800.txt` | `rockyou.txt` |
| Injection testing | `Fuzzing/` folder for the bug class | `wfuzz/Injections/` |
| Upload handler testing | `Payloads/` test files | `Web-Shells/` (authorized tests only) |
 
Generators for when no list fits: `cewl` (scrapes a target site), `crunch` (pattern based), `cupp` (built from target details).
 
SecLists is maintained by Daniel Miessler and contributors under the MIT license: https://github.com/danielmiessler/SecLists