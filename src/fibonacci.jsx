class Foo {
    static function fibonacci(num : int) : int {
        return Foo._fibonacci(num);
    }
    static function _fibonacci(num : int) : int {
        if (num == 0) {
            return 0;
        }
        else if (num == 1) {
            return 1;
        }
        else {
            return Foo._fibonacci(num - 2) + Foo._fibonacci(num - 1);
        }
    }
}

class _Main {
    static function main(args : string[]) : void {
        log "=== 1 ===";
        for (var i = 0; i < 10; i++) {
            log "fibonacci(" + i as string + ") = ", Foo.fibonacci(i);
        }

        log "=== 2 ===";
        var fib = (num: int) : int ->
                   num > 1 ? fib(num - 2) + fib(num - 1) : num;
        for (var i = 0; i < 10; i++) {
            log "fibonacci(" + i as string + ") = ", fib(i);
        }
    }
}