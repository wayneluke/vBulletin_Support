
This article explains the process of user login and logout with API.

## Login Process[](https://vb5support.com/developers/vbapi/api_login_logout/#login-process "Anchor to: Login Process")

The client is able to login user with [user.login2](https://vb5support.com/api/classes/vB-Api-User.html#method_login2) method.

If login successfully, It will return a new sessionhash, the userid. Here’s an example:

`{"sessionhash":"9ffe471fa6dcd814a4590de87ff6cad7","userid":"1","password":"6967db2172df02e461c5129b01b460c6","lastvisit":"0","lastactivity":"1331222482"}`

Otherwise it will throw ‘badlogin’ error.

Note that after user login, the sessionhash and apiaccesstoken will be regenerated. So the Authorization header won’t be returned to the client in this method.

Because of technical limit, this method is unable to return a new securitytoken. So after this API call [user.login2](https://vb5support.com/api/classes/vB-Api-User.html#method_login2), client should call [api.init](https://vb5support.com/api/classes/vB-Api-Api.html#method_init) to get the new securitytoken. Once the client gains both the new sessionhash and the securitytoken, please save them in application session vars. And then login process is done. You need to pass the new sessionhash to the API and use the new securitytoken to sign the requests in future API method calls.

## Logout Process[](https://vb5support.com/developers/vbapi/api_login_logout/#logout-process "Anchor to: Logout Process")

Client should call [user.logout](https://vb5support.com/api/classes/vB-Api-User.html#method_logout) to logout an user. And it will return a new session hash just the same as [user.login2](https://vb5support.com/api/classes/vB-Api-User.html#method_login2).

Client don’t need to fetch a new apiaccesstoken again because after logging out, the new security token is always be ‘guest’. But if client needs other refreshed variables, call [api.init](https://vb5support.com/api/classes/vB-Api-Api.html#method_init).

Built with [Hugo](https://gohugo.io/) and

[Back to top](https://vb5support.com/developers/vbapi/api_login_logout/#)