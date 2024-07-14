const { throws, AssertionError, deepEqual, deepStrictEqual, doesNotMatch, doesNotReject, doesNotThrow, equal, fail, ifError, match, notDeepEqual, notDeepStrictEqual, notEqual, notStrictEqual, ok, rejects, strict, strictEqual } = require('node:assert');
function runAllAssertions(){
    ok(true, 'ok: gia tri la truthy');
    equal(1, '1', 'equal: Gia tri bang nhau');
    notEqual(1, 2, 'notEqual: Gia tri khong bang nhau');
    deepEqual({a: 1}, {a: '1'}, 'deepEqual: doi tuong bang nhau');
    notDeepEqual({a: 1}, {a: 2}, 'notDeepEqual: doi tuong khong bang nhau');
    strictEqual(1, 1, 'strictEqual: gia tri bang nhau');
    notStrictEqual(1, '1', 'notStrictEqual: gia tri khong bang nhau');
    deepStrictEqual({a: 1}, {a: 1}, 'deepStrictEqual: doi tuong bang nhau');
    try{
        ifError(null);
        console.log('ifError: khong co loi');
    }catch(e){
        console.error('ifError: co loi');
    };
    throws(function a(){
        throw new Error('throws: day la loi');
    }, Error, 'throws: ham nem ra loi');
    doesNotThrow(function b(){
        console.log('_____');
    }, 'doesNotThrow: hom khong loi ra loi');
    (async () => {
        await rejects(
            async function(){
                throw new Error('rejects: day la loi');
            },
            Error, 'rejects: Promise bi tu choi'
        );
    })();
    (async function(){
        await doesNotReject(
            async function(){
                console.log('_____');
            },
            'doesNotReject: Promise khong bi tu choi'
        );
    })();
    match('abc', /[a-z]/, 'match: gia tri khong khop voi regex');
    doesNotMatch('123', /[a-z]/, 'doesNotMatch: gia tri khong khop voi regex');
    try{
        fail('fail: nem ra loi');
    }catch(e){
        console.error('fail: khong nem ra loi');
    }
}
runAllAssertions();