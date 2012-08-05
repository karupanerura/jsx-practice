class Foo {
    static function fizzbuzz(num : int) : string {
        var ret = "";

        if (num % 3 == 0) {
            ret += "Fizz";
        }
        if (num % 5 == 0) {
            ret += "Buzz";
        }
        if (!ret) {
            ret += num as string;
        }

        return ret;
    }
}

class _Main {
    static function main(args : string[]) : void {
        log "=== 1 ===";
        for (var i = 1; i <= 100; i++) {
            log Foo.fizzbuzz(i);
        }

        log "=== 2 ===";
        var fizzbuzz = (num: int) : string ->
            (num % 15 == 0) ? "FizzBuzz":
            (num % 3  == 0) ? "Fizz":
            (num % 5  == 0) ? "Buzz":
            num as string;
        for (var i = 1; i <= 100; i++) {
            log fizzbuzz(i);
        }
    }
}