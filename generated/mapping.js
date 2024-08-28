const codepageMappings = {
	'bixolon/legacy': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,,,,,,,,,,,,'cp858'],
	'bixolon': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,,,,,,,,,'windows1252','cp866','cp852','cp858',,'cp862','cp864','thai42','windows1253','windows1254','windows1257',,'windows1251','cp737','cp775','thai14','bixolon/hebrew','windows1255','thai11','thai18','cp885','cp857','iso8859-7','thai16','windows1256','windows1258','khmer',,,,'bixolon/cp866','windows1250',,'tcvn3','tcvn3capitals','viscii'],
	'citizen': ['cp437','epson/katakana','cp858','cp860','cp863','cp865','cp852','cp866','cp857',,,,,,,,'windows1252',,,,,'thai11',,,,,'thai13',,,,'tcvn3','tcvn3capitals','windows1258',,,,,,,,'cp864'],
	'epson/legacy': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,,,,,,,,,'windows1252','cp866','cp852','cp858'],
	'epson': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,,,,'cp851','cp853','cp857','cp737','iso8859-7','windows1252','cp866','cp852','cp858','thai42','thai11',,,,,'thai13',,,,'tcvn3','tcvn3capitals','cp720','cp775','cp855','cp861','cp862','cp864','cp869','epson/iso8859-2','iso8859-15','cp1098','cp774','cp772','cp1125','windows1250','windows1251','windows1253','windows1254','windows1255','windows1256','windows1257','windows1258','rk1048'],
	'fujitsu': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,'cp857',,,,,,,,'windows1252','cp866','cp852','cp858',,,,,,,'thai13',,,,,,,,,,,,,,'cp864'],
	'hp': ['cp437','cp850','cp852','cp860','cp863','cp865','cp858','cp866','windows1252','cp862','cp737','cp874','cp857','windows1251','windows1255','rk1048'],
	'metapace': ['cp437','epson/katakana','cp850','cp860','cp863','cp865',,,,,,,,,,,,,,'cp858'],
	'mpt': ['cp437',,'cp850','cp860','cp863','cp865','windows1251','cp866','cp3021','cp3012'],
	'pos-5890': ['cp437','epson/katakana','cp850','cp860','cp863','cp865','iso8859-1',,'cp862',,,,,,,,'windows1252','cp866','cp852','cp858',,,,'windows1251','cp737','windows1257',,'windows1258','cp864',,,,'windows1255',,,,,,,,,,,,,,,,,,,,,,,,'cp861',,,,'cp855','cp857',,,,'cp851','cp869',,'cp772','cp774',,,'windows1250',,'cp3840',,'cp3843','cp3844','cp3845','cp3846','cp3847','cp3848',,'cp771','cp3001','cp3002','cp3011','cp3012',,'cp3041','windows1253','windows1254','windows1256','cp720',,'cp775'],
	'pos-8360': ['cp437','epson/katakana','cp850','cp860','cp863','cp865','iso8859-1','windows1253','cp862',,,,,,,,'windows1252','cp866','cp852','cp858',,'latvian',,'windows1251','cp737','windows1257',,'windows1258','cp864',,,'pos8360/hebrew','windows1255',,,,,,,,,,,,,,,,,,,,,,,,'cp861',,,,'cp855','cp857',,,,'cp851','cp869',,'cp772','cp774',,,'windows1250',,'cp3840',,'cp3843','cp3844','cp3845','cp3846','cp3847','cp3848',,'cp771','cp3001','cp3002','cp3011','cp3012',,,,'windows1254','windows1256','cp720',,'cp775'],
	'star': ['cp437','star/katakana','cp850','cp860','cp863','cp865',,,,,,,,,,,'windows1252','cp866','cp852','cp858','thai42','thai11','thai13','thai14','thai16',,'thai18'],
	'xprinter': ['cp437','epson/katakana','cp850','cp860','cp863','cp865','iso8859-1','windows1253','xprinter/hebrew','cp3012',,'windows1255',,,,,'windows1252','cp866','cp852','cp858',,'latvian','cp864','windows1251','cp737','windows1257',,,,,,,,'windows1256'],
	'youku': ['cp437','epson/katakana','cp850','cp860','cp863','cp865','windows1251','cp866','cp3021','cp3012',,,,,,'cp862','windows1252',,'cp852','cp858',,,'cp864','iso8859-1','cp737','windows1257',,,'cp855','cp857','windows1250','cp775','windows1254','windows1255','windows1256','windows1258',,,'iso8859-1',,,,,,'iso8859-15',,,'cp874'],
};

codepageMappings['zijang'] = codepageMappings['pos-5890'];

export default codepageMappings;
