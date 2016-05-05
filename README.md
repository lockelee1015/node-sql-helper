#node-sql-helper

A sql builder engined by es6 template string.

###how to install

```
   npm install --save node-sql-helper
```

###how to build a template

```
module.exports = function (option) {
    return {
        queryUser:
        `
        SELECT *
        FROM USER
        WHERE ID='${option.id}'
        `
    }
}
```

###how to use

```
    var template = require('./template')
    var SqlHelper = require('node-sql-helper')
    var sqlhelper = SqlHelper(template)
    var sql = sqlhelper.getSql('queryUser', { id: '1' })
    // sql = SELECT * FROM USER WHERE ID='1'
```

more usages in example

welcome for issues and pr