/* Lispy. https://github.com/jhunt/lispy
   Copyright (c) 2021 Hunt Productions, Inc. */
function lispy(el) {
  let keywords = {
    '&allow-other-keys': true,
    '&aux': true,
    '&body': true,
    '&environment': true,
    '&key': true,
    '&optional': true,
    '&rest': true,
    '&whole': true,
    '*': true,
    '**': true,
    '***': true,
    '*break-on-signals*': true,
    '*compile-file-pathname*': true,
    '*compile-file-truename*': true,
    '*compile-print*': true,
    '*compile-verbose*': true,
    '*debug-io*': true,
    '*debugger-hook*': true,
    '*default-pathname-defaults*': true,
    '*error-output*': true,
    '*features*': true,
    '*gensym-counter*': true,
    '*load-pathname*': true,
    '*load-print*': true,
    '*load-truename*': true,
    '*load-verbose*': true,
    '*macroexpand-hook*': true,
    '*modules*': true,
    '*package*': true,
    '*print-array*': true,
    '*print-base*': true,
    '*print-case*': true,
    '*print-circle*': true,
    '*print-escape*': true,
    '*print-gensym*': true,
    '*print-length*': true,
    '*print-level*': true,
    '*print-lines*': true,
    '*print-miser-width*': true,
    '*print-pprint-dispatch*': true,
    '*print-pretty*': true,
    '*print-radix*': true,
    '*print-readably*': true,
    '*print-right-margin*': true,
    '*query-io*': true,
    '*random-state*': true,
    '*read-base*': true,
    '*read-default-float-format*': true,
    '*read-eval*': true,
    '*read-suppress*': true,
    '*readtable*': true,
    '*standard-input*': true,
    '*standard-output*': true,
    '*terminal-io*': true,
    '*trace-output*': true,
    '+': true,
    '++': true,
    '+++': true,
    '-': true,
    '/': true,
    '//': true,
    '///': true,
    '/=': true,
    '1+': true,
    '1-': true,
    '<': true,
    '<=': true,
    '=': true,
    '>': true,
    '>=': true,
    'abort': true,
    'abs': true,
    'acons': true,
    'acos': true,
    'acosh': true,
    'add-method': true,
    'adjoin': true,
    'adjust-array': true,
    'adjustable-array-p': true,
    'allocate-instance': true,
    'alpha-char-p': true,
    'alphanumericp': true,
    'and': true,
    'append': true,
    'apply': true,
    'apropos': true,
    'apropos-list': true,
    'aref': true,
    'arithmetic-error': true,
    'arithmetic-error-operands': true,
    'arithmetic-error-operation': true,
    'array': true,
    'array-dimension': true,
    'array-dimension-limit': true,
    'array-dimensions': true,
    'array-displacement': true,
    'array-element-type': true,
    'array-has-fill-pointer-p': true,
    'array-in-bounds-p': true,
    'array-rank': true,
    'array-rank-limit': true,
    'array-row-major-index': true,
    'array-total-size': true,
    'array-total-size-limit': true,
    'arrayp': true,
    'ash': true,
    'asin': true,
    'asinh': true,
    'assert': true,
    'assoc': true,
    'assoc-if': true,
    'assoc-if-not': true,
    'atan': true,
    'atanh': true,
    'atom': true,
    'base-char': true,
    'base-string': true,
    'bignum': true,
    'bit': true,
    'bit-and': true,
    'bit-andc1': true,
    'bit-andc2': true,
    'bit-eqv': true,
    'bit-ior': true,
    'bit-nand': true,
    'bit-nor': true,
    'bit-not': true,
    'bit-orc1': true,
    'bit-orc2': true,
    'bit-vector': true,
    'bit-vector-p': true,
    'bit-xor': true,
    'block': true,
    'boole': true,
    'boole-1': true,
    'boole-2': true,
    'boole-and': true,
    'boole-andc1': true,
    'boole-andc2': true,
    'boole-c1': true,
    'boole-c2': true,
    'boole-clr': true,
    'boole-eqv': true,
    'boole-ior': true,
    'boole-nand': true,
    'boole-nor': true,
    'boole-orc1': true,
    'boole-orc2': true,
    'boole-set': true,
    'boole-xor': true,
    'boolean': true,
    'both-case-p': true,
    'boundp': true,
    'break': true,
    'broadcast-stream': true,
    'broadcast-stream-streams': true,
    'built-in-class': true,
    'butlast': true,
    'byte': true,
    'byte-position': true,
    'byte-size': true,
    'caaaar': true,
    'caaadr': true,
    'caaar': true,
    'caadar': true,
    'caaddr': true,
    'caadr': true,
    'caar': true,
    'cadaar': true,
    'cadadr': true,
    'cadar': true,
    'caddar': true,
    'cadddr': true,
    'caddr': true,
    'cadr': true,
    'call-arguments-limit': true,
    'call-method': true,
    'call-next-method': true,
    'car': true,
    'case': true,
    'catch': true,
    'ccase': true,
    'cdaaar': true,
    'cdaadr': true,
    'cdaar': true,
    'cdadar': true,
    'cdaddr': true,
    'cdadr': true,
    'cdar': true,
    'cddaar': true,
    'cddadr': true,
    'cddar': true,
    'cdddar': true,
    'cddddr': true,
    'cdddr': true,
    'cddr': true,
    'cdr': true,
    'ceiling': true,
    'cell-error': true,
    'cell-error-name': true,
    'cerror': true,
    'change-class': true,
    'char': true,
    'char-code': true,
    'char-code-limit': true,
    'char-downcase': true,
    'char-equal': true,
    'char-greaterp': true,
    'char-int': true,
    'char-lessp': true,
    'char-name': true,
    'char-not-equal': true,
    'char-not-greaterp': true,
    'char-not-lessp': true,
    'char-upcase': true,
    'char/=': true,
    'char<': true,
    'char<=': true,
    'char=': true,
    'char>': true,
    'char>=': true,
    'character': true,
    'characterp': true,
    'check-type': true,
    'cis': true,
    'class': true,
    'class-name': true,
    'class-of': true,
    'clear-input': true,
    'clear-output': true,
    'close': true,
    'clrhash': true,
    'code-char': true,
    'coerce': true,
    'compilation-speed': true,
    'compile': true,
    'compile-file': true,
    'compile-file-pathname': true,
    'compiled-function': true,
    'compiled-function-p': true,
    'compiler-macro': true,
    'compiler-macro-function': true,
    'complement': true,
    'complex': true,
    'complexp': true,
    'compute-applicable-methods': true,
    'compute-restarts': true,
    'concatenate': true,
    'concatenated-stream': true,
    'concatenated-stream-streams': true,
    'cond': true,
    'condition': true,
    'conjugate': true,
    'cons': true,
    'consp': true,
    'constantly': true,
    'constantp': true,
    'continue': true,
    'control-error': true,
    'copy-alist': true,
    'copy-list': true,
    'copy-pprint-dispatch': true,
    'copy-readtable': true,
    'copy-seq': true,
    'copy-structure': true,
    'copy-symbol': true,
    'copy-tree': true,
    'cos': true,
    'cosh': true,
    'count': true,
    'count-if': true,
    'count-if-not': true,
    'ctypecase': true,
    'debug': true,
    'decf': true,
    'declaim': true,
    'declaration': true,
    'declare': true,
    'decode-float': true,
    'decode-universal-time': true,
    'defclass': true,
    'defconstant': true,
    'defgeneric': true,
    'define-compiler-macro': true,
    'define-condition': true,
    'define-method-combination': true,
    'define-modify-macro': true,
    'define-setf-expander': true,
    'define-symbol-macro': true,
    'defmacro': true,
    'defmethod': true,
    'defpackage': true,
    'defparameter': true,
    'defsetf': true,
    'defstruct': true,
    'deftype': true,
    'defun': true,
    'defvar': true,
    'delete': true,
    'delete-duplicates': true,
    'delete-file': true,
    'delete-if': true,
    'delete-if-not': true,
    'delete-package': true,
    'denominator': true,
    'deposit-field': true,
    'describe': true,
    'describe-object': true,
    'destructuring-bind': true,
    'digit-char': true,
    'digit-char-p': true,
    'directory': true,
    'directory-namestring': true,
    'disassemble': true,
    'division-by-zero': true,
    'do': true,
    'do*': true,
    'do-all-symbols': true,
    'do-external-symbols': true,
    'do-symbols': true,
    'documentation': true,
    'dolist': true,
    'dotimes': true,
    'double-float': true,
    'double-float-epsilon': true,
    'double-float-negative-epsilon': true,
    'dpb': true,
    'dribble': true,
    'dynamic-extent': true,
    'ecase': true,
    'echo-stream': true,
    'echo-stream-input-stream': true,
    'echo-stream-output-stream': true,
    'ed': true,
    'eighth': true,
    'elt': true,
    'encode-universal-time': true,
    'end-of-file': true,
    'endp': true,
    'enough-namestring': true,
    'ensure-directories-exist': true,
    'ensure-generic-function': true,
    'eq': true,
    'eql': true,
    'equal': true,
    'equalp': true,
    'error': true,
    'etypecase': true,
    'eval': true,
    'eval-when': true,
    'evenp': true,
    'every': true,
    'exp': true,
    'export': true,
    'expt': true,
    'extended-char': true,
    'fboundp': true,
    'fceiling': true,
    'fdefinition': true,
    'ffloor': true,
    'fifth': true,
    'file-author': true,
    'file-error': true,
    'file-error-pathname': true,
    'file-length': true,
    'file-namestring': true,
    'file-position': true,
    'file-stream': true,
    'file-string-length': true,
    'file-write-date': true,
    'fill': true,
    'fill-pointer': true,
    'find': true,
    'find-all-symbols': true,
    'find-class': true,
    'find-if': true,
    'find-if-not': true,
    'find-method': true,
    'find-package': true,
    'find-restart': true,
    'find-symbol': true,
    'finish-output': true,
    'first': true,
    'fixnum': true,
    'flet': true,
    'float': true,
    'float-digits': true,
    'float-precision': true,
    'float-radix': true,
    'float-sign': true,
    'floating-point-inexact': true,
    'floating-point-invalid-operation': true,
    'floating-point-overflow': true,
    'floating-point-underflow': true,
    'floatp': true,
    'floor': true,
    'fmakunbound': true,
    'force-output': true,
    'format': true,
    'formatter': true,
    'fourth': true,
    'fresh-line': true,
    'fround': true,
    'ftruncate': true,
    'ftype': true,
    'funcall': true,
    'function': true,
    'function-keywords': true,
    'function-lambda-expression': true,
    'functionp': true,
    'gcd': true,
    'generic-function': true,
    'gensym': true,
    'gentemp': true,
    'get': true,
    'get-decoded-time': true,
    'get-dispatch-macro-character': true,
    'get-internal-real-time': true,
    'get-internal-run-time': true,
    'get-macro-character': true,
    'get-output-stream-string': true,
    'get-properties': true,
    'get-setf-expansion': true,
    'get-universal-time': true,
    'getf': true,
    'gethash': true,
    'go': true,
    'graphic-char-p': true,
    'handler-bind': true,
    'handler-case': true,
    'hash-table': true,
    'hash-table-count': true,
    'hash-table-p': true,
    'hash-table-rehash-size': true,
    'hash-table-rehash-threshold': true,
    'hash-table-size': true,
    'hash-table-test': true,
    'host-namestring': true,
    'identity': true,
    'if': true,
    'ignorable': true,
    'ignore': true,
    'ignore-errors': true,
    'imagpart': true,
    'import': true,
    'in-package': true,
    'incf': true,
    'initialize-instance': true,
    'inline': true,
    'input-stream-p': true,
    'inspect': true,
    'integer': true,
    'integer-decode-float': true,
    'integer-length': true,
    'integerp': true,
    'interactive-stream-p': true,
    'intern': true,
    'internal-time-units-per-second': true,
    'intersection': true,
    'invalid-method-error': true,
    'invoke-debugger': true,
    'invoke-restart': true,
    'invoke-restart-interactively': true,
    'isqrt': true,
    'keyword': true,
    'keywordp': true,
    'labels': true,
    'lambda': true,
    'lambda-list-keywords': true,
    'lambda-parameters-limit': true,
    'last': true,
    'lcm': true,
    'ldb': true,
    'ldb-test': true,
    'ldiff': true,
    'least-negative-double-float': true,
    'least-negative-long-float': true,
    'least-negative-normalized-double-float': true,
    'least-negative-normalized-long-float': true,
    'least-negative-normalized-short-float': true,
    'least-negative-normalized-single-float': true,
    'least-negative-short-float': true,
    'least-negative-single-float': true,
    'least-positive-double-float': true,
    'least-positive-long-float': true,
    'least-positive-normalized-double-float': true,
    'least-positive-normalized-long-float': true,
    'least-positive-normalized-short-float': true,
    'least-positive-normalized-single-float': true,
    'least-positive-short-float': true,
    'least-positive-single-float': true,
    'length': true,
    'let': true,
    'let*': true,
    'lisp-implementation-type': true,
    'lisp-implementation-version': true,
    'list': true,
    'list*': true,
    'list-all-packages': true,
    'list-length': true,
    'listen': true,
    'listp': true,
    'load': true,
    'load-logical-pathname-translations': true,
    'load-time-value': true,
    'locally': true,
    'log': true,
    'logand': true,
    'logandc1': true,
    'logandc2': true,
    'logbitp': true,
    'logcount': true,
    'logeqv': true,
    'logical-pathname': true,
    'logical-pathname-translations': true,
    'logior': true,
    'lognand': true,
    'lognor': true,
    'lognot': true,
    'logorc1': true,
    'logorc2': true,
    'logtest': true,
    'logxor': true,
    'long-float': true,
    'long-float-epsilon': true,
    'long-float-negative-epsilon': true,
    'long-site-name': true,
    'loop': true,
    'loop-finish': true,
    'lower-case-p': true,
    'machine-instance': true,
    'machine-type': true,
    'machine-version': true,
    'macro-function': true,
    'macroexpand': true,
    'macroexpand-1': true,
    'macrolet': true,
    'make-array': true,
    'make-broadcast-stream': true,
    'make-concatenated-stream': true,
    'make-condition': true,
    'make-dispatch-macro-character': true,
    'make-echo-stream': true,
    'make-hash-table': true,
    'make-instance': true,
    'make-instances-obsolete': true,
    'make-list': true,
    'make-load-form': true,
    'make-load-form-saving-slots': true,
    'make-method': true,
    'make-package': true,
    'make-pathname': true,
    'make-random-state': true,
    'make-sequence': true,
    'make-string': true,
    'make-string-input-stream': true,
    'make-string-output-stream': true,
    'make-symbol': true,
    'make-synonym-stream': true,
    'make-two-way-stream': true,
    'makunbound': true,
    'map': true,
    'map-into': true,
    'mapc': true,
    'mapcan': true,
    'mapcar': true,
    'mapcon': true,
    'maphash': true,
    'mapl': true,
    'maplist': true,
    'mask-field': true,
    'max': true,
    'member': true,
    'member-if': true,
    'member-if-not': true,
    'merge': true,
    'merge-pathnames': true,
    'method': true,
    'method-combination': true,
    'method-combination-error': true,
    'method-qualifiers': true,
    'min': true,
    'minusp': true,
    'mismatch': true,
    'mod': true,
    'most-negative-double-float': true,
    'most-negative-fixnum': true,
    'most-negative-long-float': true,
    'most-negative-short-float': true,
    'most-negative-single-float': true,
    'most-positive-double-float': true,
    'most-positive-fixnum': true,
    'most-positive-long-float': true,
    'most-positive-short-float': true,
    'most-positive-single-float': true,
    'muffle-warning': true,
    'multiple-value-bind': true,
    'multiple-value-call': true,
    'multiple-value-list': true,
    'multiple-value-prog1': true,
    'multiple-value-setq': true,
    'multiple-values-limit': true,
    'name-char': true,
    'namestring': true,
    'nbutlast': true,
    'nconc': true,
    'next-method-p': true,
    'nil': true,
    'nintersection': true,
    'ninth': true,
    'no-applicable-method': true,
    'no-next-method': true,
    'not': true,
    'notany': true,
    'notevery': true,
    'notinline': true,
    'nreconc': true,
    'nreverse': true,
    'nset-difference': true,
    'nset-exclusive-or': true,
    'nstring-capitalize': true,
    'nstring-downcase': true,
    'nstring-upcase': true,
    'nsublis': true,
    'nsubst': true,
    'nsubst-if': true,
    'nsubst-if-not': true,
    'nsubstitute': true,
    'nsubstitute-if': true,
    'nsubstitute-if-not': true,
    'nth': true,
    'nth-value': true,
    'nthcdr': true,
    'null': true,
    'number': true,
    'numberp': true,
    'numerator': true,
    'nunion': true,
    'oddp': true,
    'open': true,
    'open-stream-p': true,
    'optimize': true,
    'or': true,
    'otherwise': true,
    'output-stream-p': true,
    'package': true,
    'package-error': true,
    'package-error-package': true,
    'package-name': true,
    'package-nicknames': true,
    'package-shadowing-symbols': true,
    'package-use-list': true,
    'package-used-by-list': true,
    'packagep': true,
    'pairlis': true,
    'parse-error': true,
    'parse-integer': true,
    'parse-namestring': true,
    'pathname': true,
    'pathname-device': true,
    'pathname-directory': true,
    'pathname-host': true,
    'pathname-match-p': true,
    'pathname-name': true,
    'pathname-type': true,
    'pathname-version': true,
    'pathnamep': true,
    'peek-char': true,
    'phase': true,
    'pi': true,
    'plusp': true,
    'pop': true,
    'position': true,
    'position-if': true,
    'position-if-not': true,
    'pprint': true,
    'pprint-dispatch': true,
    'pprint-exit-if-list-exhausted': true,
    'pprint-fill': true,
    'pprint-indent': true,
    'pprint-linear': true,
    'pprint-logical-block': true,
    'pprint-newline': true,
    'pprint-pop': true,
    'pprint-tab': true,
    'pprint-tabular': true,
    'prin1': true,
    'prin1-to-string': true,
    'princ': true,
    'princ-to-string': true,
    'print': true,
    'print-not-readable': true,
    'print-not-readable-object': true,
    'print-object': true,
    'print-unreadable-object': true,
    'probe-file': true,
    'proclaim': true,
    'prog': true,
    'prog*': true,
    'prog1': true,
    'prog2': true,
    'progn': true,
    'program-error': true,
    'progv': true,
    'provide': true,
    'psetf': true,
    'psetq': true,
    'push': true,
    'pushnew': true,
    'quote': true,
    'random': true,
    'random-state': true,
    'random-state-p': true,
    'rassoc': true,
    'rassoc-if': true,
    'rassoc-if-not': true,
    'ratio': true,
    'rational': true,
    'rationalize': true,
    'rationalp': true,
    'read': true,
    'read-byte': true,
    'read-char': true,
    'read-char-no-hang': true,
    'read-delimited-list': true,
    'read-from-string': true,
    'read-line': true,
    'read-preserving-whitespace': true,
    'read-sequence': true,
    'reader-error': true,
    'readtable': true,
    'readtable-case': true,
    'readtablep': true,
    'real': true,
    'realp': true,
    'realpart': true,
    'reduce': true,
    'reinitialize-instance': true,
    'rem': true,
    'remf': true,
    'remhash': true,
    'remove': true,
    'remove-duplicates': true,
    'remove-if': true,
    'remove-if-not': true,
    'remove-method': true,
    'remprop': true,
    'rename-file': true,
    'rename-package': true,
    'replace': true,
    'require': true,
    'rest': true,
    'restart': true,
    'restart-bind': true,
    'restart-case': true,
    'restart-name': true,
    'return': true,
    'return-from': true,
    'revappend': true,
    'reverse': true,
    'room': true,
    'rotatef': true,
    'round': true,
    'row-major-aref': true,
    'rplaca': true,
    'rplacd': true,
    'safety': true,
    'satisfies': true,
    'sbit': true,
    'scale-float': true,
    'schar': true,
    'search': true,
    'second': true,
    'sequence': true,
    'serious-condition': true,
    'set': true,
    'set-difference': true,
    'set-dispatch-macro-character': true,
    'set-exclusive-or': true,
    'set-macro-character': true,
    'set-pprint-dispatch': true,
    'set-syntax-from-char': true,
    'setf': true,
    'setq': true,
    'seventh': true,
    'shadow': true,
    'shadowing-import': true,
    'shared-initialize': true,
    'shiftf': true,
    'short-float': true,
    'short-float-epsilon': true,
    'short-float-negative-epsilon': true,
    'short-site-name': true,
    'signal': true,
    'signed-byte': true,
    'signum': true,
    'simple-array': true,
    'simple-base-string': true,
    'simple-bit-vector': true,
    'simple-bit-vector-p': true,
    'simple-condition': true,
    'simple-condition-format-arguments': true,
    'simple-condition-format-control': true,
    'simple-error': true,
    'simple-string': true,
    'simple-string-p': true,
    'simple-type-error': true,
    'simple-vector': true,
    'simple-vector-p': true,
    'simple-warning': true,
    'sin': true,
    'single-float': true,
    'single-float-epsilon': true,
    'single-float-negative-epsilon': true,
    'sinh': true,
    'sixth': true,
    'sleep': true,
    'slot-boundp': true,
    'slot-exists-p': true,
    'slot-makunbound': true,
    'slot-missing': true,
    'slot-unbound': true,
    'slot-value': true,
    'software-type': true,
    'software-version': true,
    'some': true,
    'sort': true,
    'space': true,
    'special': true,
    'special-operator-p': true,
    'speed': true,
    'sqrt': true,
    'stable-sort': true,
    'standard': true,
    'standard-char': true,
    'standard-char-p': true,
    'standard-class': true,
    'standard-generic-function': true,
    'standard-method': true,
    'standard-object': true,
    'step': true,
    'storage-condition': true,
    'store-value': true,
    'stream': true,
    'stream-element-type': true,
    'stream-error': true,
    'stream-error-stream': true,
    'stream-external-format': true,
    'streamp': true,
    'string': true,
    'string-capitalize': true,
    'string-downcase': true,
    'string-equal': true,
    'string-greaterp': true,
    'string-left-trim': true,
    'string-lessp': true,
    'string-not-equal': true,
    'string-not-greaterp': true,
    'string-not-lessp': true,
    'string-right-trim': true,
    'string-stream': true,
    'string-trim': true,
    'string-upcase': true,
    'string/=': true,
    'string<': true,
    'string<=': true,
    'string=': true,
    'string>': true,
    'string>=': true,
    'stringp': true,
    'structure': true,
    'structure-class': true,
    'structure-object': true,
    'style-warning': true,
    'sublis': true,
    'subseq': true,
    'subsetp': true,
    'subst': true,
    'subst-if': true,
    'subst-if-not': true,
    'substitute': true,
    'substitute-if': true,
    'substitute-if-not': true,
    'subtypep': true,
    'svref': true,
    'sxhash': true,
    'symbol': true,
    'symbol-function': true,
    'symbol-macrolet': true,
    'symbol-name': true,
    'symbol-package': true,
    'symbol-plist': true,
    'symbol-value': true,
    'symbolp': true,
    'synonym-stream': true,
    'synonym-stream-symbol': true,
    't': true,
    'tagbody': true,
    'tailp': true,
    'tan': true,
    'tanh': true,
    'tenth': true,
    'terpri': true,
    'the': true,
    'third': true,
    'throw': true,
    'time': true,
    'trace': true,
    'translate-logical-pathname': true,
    'translate-pathname': true,
    'tree-equal': true,
    'truename': true,
    'truncate': true,
    'two-way-stream': true,
    'two-way-stream-input-stream': true,
    'two-way-stream-output-stream': true,
    'type': true,
    'type-error': true,
    'type-error-datum': true,
    'type-error-expected-type': true,
    'type-of': true,
    'typecase': true,
    'typep': true,
    'unbound-slot': true,
    'unbound-slot-instance': true,
    'unbound-variable': true,
    'undefined-function': true,
    'unexport': true,
    'unintern': true,
    'union': true,
    'unless': true,
    'unread-char': true,
    'unsigned-byte': true,
    'untrace': true,
    'unuse-package': true,
    'unwind-protect': true,
    'update-instance-for-different-class': true,
    'update-instance-for-redefined-class': true,
    'upgraded-array-element-type': true,
    'upgraded-complex-part-type': true,
    'upper-case-p': true,
    'use-package': true,
    'use-value': true,
    'user-homedir-pathname': true,
    'values': true,
    'values-list': true,
    'variable': true,
    'vector': true,
    'vector-pop': true,
    'vector-push': true,
    'vector-push-extend': true,
    'vectorp': true,
    'warn': true,
    'warning': true,
    'when': true,
    'wild-pathname-p': true,
    'with-accessors': true,
    'with-compilation-unit': true,
    'with-condition-restarts': true,
    'with-hash-table-iterator': true,
    'with-input-from-string': true,
    'with-open-file': true,
    'with-open-stream': true,
    'with-output-to-string': true,
    'with-package-iterator': true,
    'with-simple-restart': true,
    'with-slots': true,
    'with-standard-io-syntax': true,
    'write': true,
    'write-byte': true,
    'write-char': true,
    'write-line': true,
    'write-sequence': true,
    'write-string': true,
    'write-to-string': true,
    'y-or-n-p': true,
    'yes-or-no-p': true,
    'zerop': true,
  }
  el.forEach(e => {
    let code = e.textContent
    let out = []
    let levels = [], qq = false
    let m
    while (code != '') {
      if (code.substr(0,1) == '(') {
        levels.unshift(qq ? ' qq' : '')
        qq = false
        out.push("<span class=\"open-paren"+levels[0]+"\">(</span>");
        code = code.substr(1)

      } else if (code.substr(0,1) == ')') {
        out.push("<span class=\"close-paren"+levels[0]+"\">)</span>");
        levels.shift()
        code = code.substr(1)

      } else if (code.substr(0,1) == '`') {
        qq = true
        out.push("<span class=\"qq\">`</span>");
        code = code.substr(1)

      } else if (code.substr(0,2) == ',@') {
        out.push("<span class=\"comma-at\">,@</span>");
        code = code.substr(2)

      } else if (code.substr(0,1) == ',') {
        out.push("<span class=\"comma\">,</span>");
        code = code.substr(1)

      } else if (code.substr(0,1) == '\'') {
        out.push("<span class=\"q\">'</span>");
        code = code.substr(1)

      } else if (m = code.match(/^\s+/)) {
        out.push("<span class=\"ws\">"+m[0]+"</span>")
        code = code.substr(m[0].length);

      } else if (m = code.match(/^"[^"]*"/)) {
        out.push("<span class=\"string-literal\">"+m[0]+"</span>")
        code = code.substr(m[0].length);

      } else if (m = code.match(/^\d+/)) {
        out.push("<span class=\"numeric-literal\">"+m[0]+"</span>")
        code = code.substr(m[0].length);

      } else if (m = code.match(/^[^\s\)]+/)) {
        let classes = ['sym']
        if (keywords[m[0]]) {
          classes.push('keyword')
        }
        if (m[0].substr(0,1) == '&'
         || m[0].substr(0,1) == ':') {
          classes.push('special')
         }
        out.push("<span class=\""+classes.join(' ')+"\">"+m[0]+"</span>")
        code = code.substr(m[0].length);

      } else {
        out.push("<span class=\"syntax-error\">syntax error</span>")
        break
      }
    }
    e.innerHTML = out.join('')
  })
}
