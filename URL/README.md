  # Url: [Function: Url], ✔
  # parse: [Function: urlParse], ✔
  # resolve: [Function: urlResolve], ✔
  resolveObject: [Function: urlResolveObject], ❌ Không tồn tại
  # format: [Function: urlFormat], ✔
  URL: [class URL] { 🚩
    canParse: [Function: canParse], 🚩
    createObjectURL: [Function:❌createObjectURL], ❌ không tồn tại
    revokeObjectURL: [Function: revokeObjectURL] ❌ không tồn tại
  },
  # URLSearchParams: [class URLSearchParams], ✔
  # domainToASCII: [Function: domainToASCII], ✔
  # domainToUnicode: [Function: domainToUnicode], ✔
  # pathToFileURL: [Function: pathToFileURL], ✔
  # fileURLToPath: [Function: fileURLToPath], ✔
  # urlToHttpOptions: [Function: urlToHttpOptions] ✔

=========================================================================
| URL | parse | href | searchParams | hash | username | host | protocol |
| hostname | origin | password | port | search | toJSON | toString      |
| resolve | URLSearchParams | domainToASCII | domainToUnicode |         |
| pathToFileURL | fileURLToPath | urlToHttpOptions

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)