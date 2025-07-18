These commands can be run to provide information. Sometimes, you'll need this information to troubleshoot different web server issues.

```shell
# Shows a list of existing virtual hosts
httpd -t -D DUMP_VHOSTS 

#  shows parsed run settings. Can be useful to find error and access logs.
httpd -t -D DUMP_RUN_CFG

# shows all loaded modules
httpd -t -D DUMP_MODULES
```


You can pass the output  of these commands to grep in order to search for specifics.

```shell
httpd -t -D DUMP_MODULES | grep -i --color [module_name]
```

Look for mod_deflate: 

```shell
httpd -t -D DUMP_MODULES | grep -i --color deflate_module
```

Look for mod_rewrite

```shell
httpd -t -D DUMP_MODULES | grep -i --color rewrite_module
```