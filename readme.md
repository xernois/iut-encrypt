# IUT_ENCRYPT

ce module est basé sur le module crypto de nodeJs

## Chiffrer un message et comparer

```js
import Encrypt from "@xernois/iut_encrypt"

const hash = Encrypt.sha1("password");

Encrypt.compareSha1 ("password", hash) // -> true
Encrypt.compareSha1("different password", hash) // -> false
```

## Lister les algorithmes

```js
import Encrypt from "@xernois/iut_encrypt"

Encrypt.algorithmes // string[] => ['sha1', 'sha256', ... , 'md5']
```