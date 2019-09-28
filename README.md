<div align=center>
<img src="https://github.com/tangshengeng/Internet-login_JavaScript/blob/master/JavaScript.png" width=60%>
</div>

# Internet Login(JavaScript)
Login the internet account without the graphical interface. This project is made by Shengeng Tang.
Hefei University of Technology, Ph.D candidate.

The node toolkit is available at [NodeJS](https://nodejs.org/en/download/).

# Unpacked the Toolkit

```
git clone https://github.com/tangshengeng/Internet-login_JavaScript.git
cd Internet-login_JavaScript
xz -d node-v10.16.3-linux-x64.tar.xz
tar -xvf node-v10.16.3-linux-x64.tar
```

# Modify the logInDcrom.js file
```
vim logInDcrom.js
```

The main contents that need to be changed are as follows:
```
    'DDDDD' : 'XXX', //Fill in the actual account here!!!
```
```
    'upass' : 'XXX', //Fill in the actual password here!!!
```
```
    host: 'XXX.XXX.XXX.XXX', //Fill in the URL of the login page here!!!
```
# Login the Internet
```
sh logIn.sh
```
