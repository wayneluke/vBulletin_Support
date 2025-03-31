
vBulletin is a web app and needs a web environment to run. You can configure this in a variety of methods dependins on your installation.

## Using XAMMP

If you are unfamiliar with configuring a web environment then XAMPP is probably the easiest way to go. With one download, you can get all the moving parts tied together. Follow the instructions for your OS on the XAMPP [download](https://www.apachefriends.org/download.html) page.

## Installing the Individual Components

> Note: It is impossible for use to cover every aspect of installing this software on every Operating System. This is meant to be a basic guideline. If you need additional help with your Operating System, please use your favorite search engine or install XAMPP.

### Install Apache Web Server

Ensure that you have Apache Web Server installed on your system. If not, you can install it using package managers like apt (for Debian/Ubuntu), yum (for CentOS/RHEL), brew (MacOS) or any other appropriate method for your operating system.

```bash
sudo apt install apache2 #Linux Distros supporting Apt
sudo yum install httpd #Linux Distros support yum
brew install apache #MacOS with Homebrew
winget install -e --id Apache.DirectoryStudio # Windows via winget
```

### Install MariaDB

MariaDB is a popular open-source relational database management system and a drop-in replacement for MySQL. This will provide the required database server for vBulletin. 

Use your package manager to install MariaDB, for example:

```bash
sudo apt install mariadb-server   # For Debian/Ubuntu
sudo yum install mariadb-server   # For CentOS/RHEL
brew install mariadb              # For MacOS
```

#### Secure Your Database installation

After installation, run the following command to secure your MariaDB installation and set the root password:

```bash
sudo mysql_secure_installation 
```

### Install PHP

Install PHP and PHP modules needed to run your PHP applications. You can typically install PHP with the following command:

Examples: 

```bash
sudo apt install php libapache2-mod-php   # For Debian/Ubuntu
sudo yum install php php-mysql            # For CentOS/RHEL
brew install php                          # Install via Homebrew
```

### Enable PHP module in Apache:

After installing PHP in Ubuntu, enable the PHP module in Apache using the following command:

```bash
sudo a2enmod php #Ubunut variants
``` 

Note: Homebrew enables PHP automatically.
### Configure Apache to handle .htaccess

By default, Apache may not be configured to read .htaccess files. To enable this, make sure the AllowOverride directive is set appropriately in the Apache configuration file.

Locate the Apache configuration file, often named httpd.conf, apache2.conf, or httpd-vhosts.conf.

Look for the `<Directory>` block that corresponds to the directory where your PHP applications will be stored (e.g., `/var/www/html`).
Change AllowOverride None to AllowOverride All within the `<Directory>` block. This will allow .htaccess files to override settings.

Save the changes and restart Apache for the changes to take effect:

```bash
sudo service apache2 restart   # For Debian/Ubuntu
sudo systemctl restart httpd   # For CentOS/RHEL
brew services restart https    # Through Homebrew
```

### Test PHP

1. Create a simple PHP file (e.g., test.php) containing the following code:

```php
<?php
phpinfo();
```


2. Place the test.php file in the web server's root directory (e.g., /var/www/html).
3. Access the PHP file through your web browser by visiting http://your_server_ip/test.php or http://localhost/test.php. If PHP is configured correctly, you should see the PHP information page.

## Security considerations

- Keep both PHP and MariaDB versions up to date.
- Use At Rest Encryption on your database.
- Use a strong password for the database user.

#reference #tutorial #how-to 